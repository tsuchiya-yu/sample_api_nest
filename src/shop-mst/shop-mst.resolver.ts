import { Query, Resolver, Args, Int } from '@nestjs/graphql';
import { ShopMst } from './shop-mst'
import { ShopMstService } from './shop-mst.service';
import { HttpException, HttpStatus } from '@nestjs/common';
import { FindManyshopMstArgs } from 'src/@generated/prisma-nestjs-graphql/shop-mst/find-manyshop-mst.args';

@Resolver()
export class ShopMstResolver {
    constructor(private readonly shopMstService: ShopMstService) {}

    @Query(() => [ShopMst], { nullable: true })
    async shopMsts(@Args() args: FindManyshopMstArgs): Promise<ShopMst[]> {
        console.log('call: shoMsts#ShopMstResolver');
        const shoMsts = await this.shopMstService.findAll(args);
        if (!shoMsts) {
            throw new HttpException('shop Mst not found', HttpStatus.NOT_FOUND);
        }
        return shoMsts;
    }
}
