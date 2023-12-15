import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { ShopMst } from './shop-mst'
import { FindManyShopMstArgs } from 'src/@generated/prisma-nestjs-graphql/shop-mst/find-many-shop-mst.args';

@Injectable()
export class ShopMstService {
    constructor(private readonly prisma: PrismaService) { }

    async findAll(args: FindManyShopMstArgs): Promise<ShopMst[]> {
        return this.prisma.shopMst.findMany(args);
    }
}
