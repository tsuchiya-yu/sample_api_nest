import { Injectable } from '@nestjs/common';
import { User } from 'src/@generated/prisma-nestjs-graphql/user/user.model'
import { FindFirstUserArgs } from 'src/@generated/prisma-nestjs-graphql/user/find-first-user.args';
import { CreateOneUserArgs } from 'src/@generated/prisma-nestjs-graphql/user/create-one-user.args';
import { FindUniqueUserArgs } from 'src/@generated/prisma-nestjs-graphql/user/find-unique-user.args';
import { UserUpdateInput } from 'src/@generated/prisma-nestjs-graphql/user/user-update.input';
import type { FileUpload } from "graphql-upload/processRequest.mjs";
import { S3Service } from '../util/S3Service';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UsersService {

    constructor(private readonly prisma: PrismaService, private s3Service: S3Service) {}

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

    async processUpload(userId: number, upload: FileUpload): Promise<boolean> {
        const file = upload[0].file;
        const createReadStream = file.createReadStream;
        const readStreams = createReadStream(); 
        const filename = file.filename;

        
        try {
            // ファイルアップロード
            const key = await this.s3Service.uploadFile(readStreams, filename);
            // データ更新
            await this.updateUserWithFilePath(userId, key);
            return new Promise(function(resolve, reject) {
                resolve(true);
              });
        } catch (error) {
          console.error('S3 upload error:', error);
          return new Promise(function(resolve, reject) {
            reject(true);
          });
        }
    }

    async updateUserWithFilePath(userId: number, filePath: string): Promise<User> {
        return this.prisma.user.update({
          where: { id: userId },
          data: {
            userImageFile: filePath
          }
        });
      }
}