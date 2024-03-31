import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class MenuMst {
  @Field(() => ID, { nullable: false })
  id!: number;

  @Field(() => String, { nullable: false })
  code!: string;

  @Field(() => String, { nullable: false })
  category!: string;

  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => Boolean, { nullable: false, defaultValue: false })
  isDeleted!: boolean;

  @Field(() => Date, { nullable: false })
  createdAt!: Date;

  @Field(() => Date, { nullable: false })
  updatedAt!: Date;
}
