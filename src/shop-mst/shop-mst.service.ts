import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { ShopMst } from './shop-mst'
import { FindManyshopMstArgs } from 'src/@generated/prisma-nestjs-graphql/shop-mst/find-manyshop-mst.args';

@Injectable()
export class ShopMstService {
    constructor(private readonly prisma: PrismaService) { }

    async findAll(args: FindManyshopMstArgs): Promise<ShopMst[]> {
        return this.prisma.shopMst.findMany(args);
    }
}
