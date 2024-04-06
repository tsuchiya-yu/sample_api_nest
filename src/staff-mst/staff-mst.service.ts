import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { StaffMst } from './staff-mst';
import { FindManyStaffMstArgs } from 'src/@generated/prisma-nestjs-graphql/staff-mst/find-many-staff-mst.args';

@Injectable()
export class StaffMstService {
    constructor(private readonly prisma: PrismaService) { }

    async findAll(args: FindManyStaffMstArgs): Promise<StaffMst[]> {
        return this.prisma.staffMst.findMany(args);
    }
}
