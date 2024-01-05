import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { User } from 'src/@generated/prisma-nestjs-graphql/user/user.model'
import { FindFirstUserArgs } from 'src/@generated/prisma-nestjs-graphql/user/find-first-user.args';
import { CreateOneUserArgs } from 'src/@generated/prisma-nestjs-graphql/user/create-one-user.args';
import { FindUniqueUserArgs } from 'src/@generated/prisma-nestjs-graphql/user/find-unique-user.args';
import { UserUpdateInput } from 'src/@generated/prisma-nestjs-graphql/user/user-update.input';
import type { FileUpload } from "graphql-upload/processRequest.mjs";
import * as AWS from 'aws-sdk';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class UsersService {
    private s3: AWS.S3;

    constructor(private readonly prisma: PrismaService, private readonly configService: ConfigService) {
        // AWS設定
        AWS.config.update({
            accessKeyId: configService.get<string>('AWS_ACCESS_KEY_ID'),
            secretAccessKey: configService.get<string>('AWS_SECRET_ACCESS_KEY'),
            region: configService.get<string>('AWS_REGION'),
        });

        // S3インスタンスの作成
        this.s3 = new AWS.S3();
    }

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
        // TODO: 
        // 　　・ファイルのディレクトリ構成を考える
        // 　　・S3の処理は別の部分で共通化したい
        // 　　・DBにファイルのパスを保存する処理を実装する
        const file = upload[0].file;
        const createReadStream = file.createReadStream;
        const readStreams = createReadStream(); 
        const filename = file.filename;
        
        const bucketName = this.configService.get<string>('AWS_S3_BUCKET_NAME');
        const key = `${Date.now()}-${filename}`; // ファイル名

        const params = {
          Bucket: bucketName,
          Key: key,
          Body: readStreams,
        };
      
        try {
          await this.s3.upload(params).promise();
          return true;
        } catch (error) {
          console.error('S3 upload error:', error);
          return new Promise(function(resolve, reject) {
            reject(true);
          });
        }
    }
}