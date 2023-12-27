import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserSnsService } from './user-sns.service';
import { UserSns } from './user-sns';
import { FindUniqueUserSnsArgs } from 'src/@generated/prisma-nestjs-graphql/user-sns/find-unique-user-sns.args';
import { FindManyUserSnsArgs } from 'src/@generated/prisma-nestjs-graphql/user-sns/find-many-user-sns.args';
import { CreateOneUserSnsArgs } from 'src/@generated/prisma-nestjs-graphql/user-sns/create-one-user-sns.args';
import { UpdateOneUserSnsArgs } from 'src/@generated/prisma-nestjs-graphql/user-sns/update-one-user-sns.args';

@Resolver(() => UserSns)
export class UserSnsResolver {
  constructor(private readonly userSnsService: UserSnsService) {}

  @Query(() => UserSns, { nullable: true })
  async userSns(@Args() args: FindUniqueUserSnsArgs): Promise<UserSns | null> {
    return this.userSnsService.findUnique(args);
  }

  @Query(() => [UserSns])
  async userSnsList(@Args() args: FindManyUserSnsArgs): Promise<UserSns[]> {
    return this.userSnsService.findAll(args);
  }

  @Mutation(() => UserSns)
  async createUserSns(@Args() args: CreateOneUserSnsArgs): Promise<UserSns> {
    return this.userSnsService.create(args);
  }

  @Mutation(() => UserSns)
  async updateUserSns(@Args('id') id: number, @Args('data') args: UpdateOneUserSnsArgs): Promise<UserSns> {
    return this.userSnsService.update({ where: { id }, data: args.data });
  }
}
