import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { UserProfile } from '../user-profile/user-profile';
import { UserSns } from '../user-sns/user-sns';

@ObjectType()
export class User {

    @Field(() => ID, { nullable: false })
    id!: Number;

    @Field(() => String, { nullable: false })
    name!: string;

    @Field(() => Boolean, { nullable: false, defaultValue: false })
    isDeleted!: boolean;

    @Field(() => Date, { nullable: false })
    createdAt!: Date;

    @Field(() => Date, { nullable: false })
    updatedAt!: Date;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    password!: string;

    @Field(() => UserProfile, {nullable:true})
    userProfile?: UserProfile | null;

    @Field(() => UserSns, {nullable:true})
    userSns?: UserSns | null;
}
