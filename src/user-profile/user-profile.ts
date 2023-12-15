import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { User } from '../users/users.model';
import { ShopMst } from '../shop-mst/shop-mst';

@ObjectType()
export class UserProfile {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Int, {nullable:true})
    shopMstId!: number | null;

    @Field(() => String, {nullable:true})
    catchphrase!: string | null;

    @Field(() => String, {nullable:true})
    introduction!: string | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => User, {nullable:false})
    user?: User;

    @Field(() => ShopMst, {nullable:true})
    shopMst?: ShopMst | null;
}
