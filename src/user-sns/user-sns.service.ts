import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { UserSns } from './user-sns';
import { FindManyUserSnsArgs } from 'src/@generated/prisma-nestjs-graphql/user-sns/find-many-user-sns.args';
import { FindUniqueUserSnsArgs } from 'src/@generated/prisma-nestjs-graphql/user-sns/find-unique-user-sns.args';
import { CreateOneUserSnsArgs } from 'src/@generated/prisma-nestjs-graphql/user-sns/create-one-user-sns.args';
import { UpdateOneUserSnsArgs } from 'src/@generated/prisma-nestjs-graphql/user-sns/update-one-user-sns.args';

@Injectable()
export class UserSnsService {
    constructor(private readonly prisma: PrismaService) {}

    async findUnique(args: FindUniqueUserSnsArgs): Promise<UserSns | null> {
        return this.prisma.userSns.findUnique(args);
    }

    async findAll(args: FindManyUserSnsArgs): Promise<UserSns[]> {
        return this.prisma.userSns.findMany(args);
    }

    async create(args: CreateOneUserSnsArgs): Promise<UserSns> {
        return this.prisma.userSns.create(args);
    }

    async update(args: UpdateOneUserSnsArgs): Promise<UserSns> {
        return this.prisma.userSns.update(args);
    }
}
