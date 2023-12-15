import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { UserProfile } from './user-profile'
import { FindManyUserProfileArgs } from 'src/@generated/prisma-nestjs-graphql/user-profile/find-many-user-profile.args';
import { FindUniqueUserProfileArgs } from 'src/@generated/prisma-nestjs-graphql/user-profile/find-unique-user-profile.args';
import { CreateOneUserProfileArgs } from 'src/@generated/prisma-nestjs-graphql/user-profile/create-one-user-profile.args';
import { UpdateOneUserProfileArgs } from 'src/@generated/prisma-nestjs-graphql/user-profile/update-one-user-profile.args';

@Injectable()
export class UserProfileService {
    constructor(private readonly prisma: PrismaService) { }

    async findAll(args: FindManyUserProfileArgs): Promise<UserProfile[]> {
        return this.prisma.userProfile.findMany(args);
    }

    async findUnique(args: FindUniqueUserProfileArgs): Promise<UserProfile | null> {
        return this.prisma.userProfile.findUnique(args);
    }

    async create(args: CreateOneUserProfileArgs): Promise<UserProfile> {
        return this.prisma.userProfile.create(args);
    }

    async update(args: UpdateOneUserProfileArgs): Promise<UserProfile> {
        return this.prisma.userProfile.update(args);
    }
}
