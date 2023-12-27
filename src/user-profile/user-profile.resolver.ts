import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserProfileService } from './user-profile.service';
import { UserProfile } from './user-profile';
import { FindManyUserProfileArgs } from 'src/@generated/prisma-nestjs-graphql/user-profile/find-many-user-profile.args';
import { FindUniqueUserProfileArgs } from 'src/@generated/prisma-nestjs-graphql/user-profile/find-unique-user-profile.args';
import { CreateOneUserProfileArgs } from 'src/@generated/prisma-nestjs-graphql/user-profile/create-one-user-profile.args';
import { UpdateOneUserProfileArgs } from 'src/@generated/prisma-nestjs-graphql/user-profile/update-one-user-profile.args';

@Resolver(() => UserProfile)
export class UserProfileResolver {
    constructor(private readonly userProfileService: UserProfileService) {}

    @Query(() => UserProfile, { nullable: true })
    async userProfile(@Args() args: FindUniqueUserProfileArgs): Promise<UserProfile | null> {
        return this.userProfileService.findUnique(args);
    }

    @Query(() => [UserProfile], { nullable: 'items' })
    async userProfiles(@Args() args: FindManyUserProfileArgs): Promise<UserProfile[]> {
        return this.userProfileService.findAll(args);
    }

    @Mutation(() => UserProfile)
    async createUserProfile(@Args() args: CreateOneUserProfileArgs): Promise<UserProfile> {
        return this.userProfileService.create(args);
    }

    @Mutation(() => UserProfile)
    async updateUserProfile(@Args('id') id: number, @Args('data') args: UpdateOneUserProfileArgs): Promise<UserProfile> {
        return this.userProfileService.update({ where: { id }, data: args.data });
    }
}
