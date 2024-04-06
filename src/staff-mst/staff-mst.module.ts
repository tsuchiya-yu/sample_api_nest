import { Module } from '@nestjs/common';
import { StaffMstService } from './staff-mst.service';
import { StaffMstResolver } from './staff-mst.resolver';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [StaffMstService, StaffMstResolver, PrismaService],
  exports: [PrismaService]
})
export class StaffMstModule {}
