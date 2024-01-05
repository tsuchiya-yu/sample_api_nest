import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { User } from 'src/@generated/prisma-nestjs-graphql/user/user.model'
import { FindFirstUserArgs } from 'src/@generated/prisma-nestjs-graphql/user/find-first-user.args';
import { CreateOneUserArgs } from 'src/@generated/prisma-nestjs-graphql/user/create-one-user.args';
import { FindUniqueUserArgs } from 'src/@generated/prisma-nestjs-graphql/user/find-unique-user.args';
import { UserUpdateInput } from 'src/@generated/prisma-nestjs-graphql/user/user-update.input';
import type { FileUpload } from "graphql-upload/processRequest.mjs";

@Injectable()
export class UsersService {
    constructor(private readonly prisma: PrismaService) { }

    async findFirst(args: FindFirstUserArgs): Promise<User | null> {
        return this.prisma.user.findFirst({
            ...args,
            include: { userSns: true, userProfile: true }
        });
    }

    async findUnique(args: FindUniqueUserArgs): Promise<User | null> {
        return this.prisma.user.findUnique({
            ...args,
            include: { userSns: true, userProfile: true }
        });
    }

    async createUser(args: CreateOneUserArgs): Promise<User> {
        return this.prisma.user.create(args);
    }

    async findUserByEmail(email: string): Promise<User> {
        const user = await this.prisma.user.findUnique({
            where: { email: email },
            include: { userSns: true, userProfile: true } 
        });

        return user;
    }

    async updateUser(id: number, userData: UserUpdateInput): Promise<User> {
        return this.prisma.user.update({
          where: { id },
          data: {
            name: userData.name
          }
        });
    }

    async processUpload(userId: number, file: FileUpload): Promise<boolean> {
        // TODO: 要実装
        if (process.env.NODE_ENV === 'production') {
            // 本番：S3にアップロード
        } else {
            // 開発：ローカルに保存
        }
        return new Promise(function(resolve, reject) {
            resolve(true);
        });
    }
}