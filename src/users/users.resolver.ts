import { Args, Mutation, Query, Resolver, Context } from '@nestjs/graphql';
import { User } from './users.model'
import { SignInUserArgs } from './user-signin.args'
import { CodeMeg } from './code-msg.response'
import { Token } from './token.response'
import { CreateOneUserArgs } from 'src/@generated/prisma-nestjs-graphql/user/create-one-user.args';
import { UsersService } from 'src/users/users.service';
import { HttpException, HttpStatus } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { AuthService } from 'src/auth/auth.service';
import { JwtService } from '@nestjs/jwt';
import { UserUpdateInput } from 'src/@generated/prisma-nestjs-graphql/user/user-update.input';

@Resolver(() => User)
export class UsersResolver {
    constructor(
        private readonly userService: UsersService,
        private readonly authService: AuthService,
        private readonly jwtService: JwtService,
    ) { }

    // ダミーのレスポンスを返す(動作確認用)
    @Query(() => User)
    dummyUser(@Args('id') id: number) {
        return { id: 1, name: '花子', isDeleted: false, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }

    // ユーザ新規登録
    @Mutation(() => Token)
    async createUser(@Args() args: CreateOneUserArgs): Promise<Token> {
        console.log('call: createUser#UsersResolver');
        try {
            // bcryptを使用してパスワードをハッシュ化
            const hashedPassword = await bcrypt.hash(args.data.password, 10);

            // args.dataのpasswordプロパティを更新
            args.data.password = hashedPassword;

            // UserServiceを使用してユーザーを作成
            const user = await this.userService.createUser(args);
            console.log('created user:' + user);

            // JWTトークンの生成
            const token = await this.authService.login(user);
            return token;
        } catch (error) {
            if (error.code === 'P2002' && error.meta.target.includes('email')) {
                // ユニーク制約違反のエラー処理
                throw new HttpException('このメールアドレスはすでに登録されています。', HttpStatus.CONFLICT);
            }
            // その他のエラー処理
            throw new HttpException('ユーザーの作成に失敗しました。', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // ユーザログイン
    @Mutation(() => Token)
    async signIn(@Args('data') args: SignInUserArgs): Promise<Token> {
        console.log('call: signIn#UsersResolver');
        try {
            const user = await this.userService.findUserByEmail(args.email);
            if (!user) {
              throw new HttpException('ユーザーが見つかりません。', HttpStatus.NOT_FOUND);
            }
      
            // パスワードの検証
            const passwordIsValid = await bcrypt.compare(args.password, user.password);
            if (!passwordIsValid) {
              throw new HttpException('パスワードが不正です。', HttpStatus.UNAUTHORIZED);
            }
      
            // JWTトークンの生成
            const token = await this.authService.login(user);
            return token;
          } catch (error) {
            if (error.code === 'auth/wrong-password') {
                throw new HttpException('パスワードが不正です。', HttpStatus.UNAUTHORIZED);
            }
            console.log(error);
            // その他のエラーハンドリング
            throw new HttpException('ログインに失敗しました。', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // ユーザログアウト
    @Mutation(() => User)
    async signOut(): Promise<CodeMeg> {
        // TODO:おいおいリフレッシュトークンでのログアウトに変更する
        console.log('call: signOut#UsersResolver');
        try {
            return { statusCode: 200, message: 'OK!' };
        } catch (error) {
            console.error(error);
            throw new HttpException('ログアウトに失敗しました。', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // ログイン状態？
    @Query(() => Boolean)
    async isUserLoggedIn(@Context() context): Promise<boolean> {
        console.log('call: isUserLoggedIn#UsersResolver');
        try {
            const authHeader = context.req.headers.authorization;
            if (!authHeader) {
                return false;
            }

            const token = authHeader.split(' ')[1];
            const decoded = this.jwtService.verify(token);
            return !!decoded;
        } catch (error) {
            throw new HttpException('トークンの検証に失敗しました。', HttpStatus.UNAUTHORIZED);
        }
    }

    // ログイン中ユーザの情報を取得
    @Query(() => User, { nullable: true })
    async currentUser(@Context() context): Promise<User | null> {
        try {
            const authHeader = context.req.headers.authorization;
            if (!authHeader) {
                return null;
            }
            const token = authHeader.split(' ')[1];
            const decoded = this.jwtService.verify(token);
            console.log(decoded);

            // JWTトークンからメアドを取得
            const email = decoded.email;
            if (!email) {
                return null;
            }

            // メアドに基づいてユーザーデータを取得
            return await this.userService.findUserByEmail(email);
        } catch (error) {
            throw new HttpException('トークンの検証に失敗しました。', HttpStatus.UNAUTHORIZED);
        }
    }

    @Mutation(() => User)
    async updateUser(@Args('id') id: number, @Args('data') updateUserData: UserUpdateInput): Promise<User> {
      return this.userService.updateUser(id, updateUserData);
    }

}