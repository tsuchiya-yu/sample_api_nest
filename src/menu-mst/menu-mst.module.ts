import { Module } from '@nestjs/common';
import { MenuMstService } from './menu-mst.service';
import { MenuMstResolver } from './menu-mst.resolver';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [MenuMstService, MenuMstResolver, PrismaService],
  exports: [PrismaService]
})
export class MenuMstModule {}
