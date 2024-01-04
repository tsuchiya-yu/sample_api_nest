import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class UserUpdateInput {
  @Field(() => String, { nullable: true })
  name?: string;
}