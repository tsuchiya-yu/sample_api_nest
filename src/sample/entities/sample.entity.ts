import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Sample {
    @Field(() => Int, { description: 'uniq key' })
    id: number;

    @Field({ nullable: true })
    title: string;

    @Field()
    content: string;
}