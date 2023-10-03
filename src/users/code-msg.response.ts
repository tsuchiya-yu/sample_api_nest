import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class CodeMeg {
    @Field(() => Int)
    statusCode: number;

    @Field()
    message: string;
}