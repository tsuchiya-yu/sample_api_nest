import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';

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
}
