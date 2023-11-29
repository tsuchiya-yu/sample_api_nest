import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from './users.model'
import { SignInUserArgs } from './user-signin.args'
import { CodeMeg } from './code-msg.response'
import { Token } from './token.response'
import { CreateOneUserArgs } from 'src/@generated/prisma-nestjs-graphql/user/create-one-user.args';
import { UsersService } from 'src/users/users.service';
import { FindFirstUserArgs } from 'src/@generated/prisma-nestjs-graphql/user/find-first-user.args';
import { firebaseApp } from '../main';
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
} from 'firebase/auth';
import { HttpException, HttpStatus } from '@nestjs/common';

@Resolver(() => User)
export class UsersResolver {
    constructor(private readonly userService: UsersService) { }

    // ダミーのレスポンスを返す(動作確認用)
    @Query(() => User)
    dummyUser(@Args('id') id: number) {
        return { id: 1, name: '花子', isDeleted: false, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }

    // ユーザ新規登録
    @Mutation(() => User)
    async createUser(@Args() args: CreateOneUserArgs): Promise<User> {
        console.log('call: createUser#UsersResolver');
        try {
            const auth = getAuth(firebaseApp);
            const user = await this.userService.createUser(args);
            console.log(user);

            const userCredential = await createUserWithEmailAndPassword(
                auth,
                user['email'],
                user['password']
            );
            userCredential.user;

            return user;
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
            const auth = getAuth(firebaseApp);
            const userCredential = await signInWithEmailAndPassword(
                auth,
                args.email,
                args.password,
            );

            const firebaseUser = userCredential.user;

            // ここでusersテーブルから一致するemailを検索
            const user = await this.userService.findUserByEmail(firebaseUser.email);

            if (!user) {
                throw new HttpException('ユーザーが見つかりません。', HttpStatus.NOT_FOUND);
            }

            const idToken = await firebaseUser.getIdToken();

            return { token: idToken };
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
        console.log('call: signOut#UsersResolver');
        try {
            const auth = getAuth(firebaseApp);
            await signOut(auth);
            return { statusCode: 200, message: 'OK!' };
        } catch (error) {
            console.error(error);
            throw new HttpException('ログアウトに失敗しました。', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}