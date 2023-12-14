import { Module } from '@nestjs/common';
import { ShopMstService } from './shop-mst.service';
import { ShopMstResolver } from './shop-mst.resolver';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [ShopMstService, ShopMstResolver, PrismaService],
  exports: [PrismaService]
})
export class ShopMstModule {}
