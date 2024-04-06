import { Field, ID, ObjectType } from '@nestjs/graphql';
import { ShopMst } from '../shop-mst/shop-mst';

@ObjectType()
export class StaffMst {
  @Field(() => ID, { nullable: false })
  id!: number;

  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => String, { nullable: false })
  name_kana!: string;

  @Field(() => String, { nullable: true })
  shopMstCode?: string;

  @Field(() => ShopMst, { nullable: true })
  shopMst?: ShopMst;

  @Field(() => Boolean, { nullable: false, defaultValue: false })
  isDeleted!: boolean;

  @Field(() => Date, { nullable: false })
  createdAt!: Date;

  @Field(() => Date, { nullable: false })
  updatedAt!: Date;
}
