import { Query, Resolver, Args } from '@nestjs/graphql';
import { StaffMst } from './staff-mst';
import { StaffMstService } from './staff-mst.service';
import { HttpException, HttpStatus } from '@nestjs/common';
import { FindManyStaffMstArgs } from 'src/@generated/prisma-nestjs-graphql/staff-mst/find-many-staff-mst.args';

@Resolver(() => StaffMst)
export class StaffMstResolver {
    constructor(private readonly staffMstService: StaffMstService) {}

    @Query(() => [StaffMst], { nullable: true })
    async staffMsts(@Args() args: FindManyStaffMstArgs): Promise<StaffMst[]> {
        const staffMsts = await this.staffMstService.findAll(args);
        if (!staffMsts) {
            throw new HttpException('Staff Mst not found', HttpStatus.NOT_FOUND);
        }
        return staffMsts;
    }
}
