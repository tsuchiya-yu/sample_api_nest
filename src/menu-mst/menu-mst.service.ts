import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { MenuMst } from './menu-mst';
import { FindManyMenuMstArgs } from 'src/@generated/prisma-nestjs-graphql/menu-mst/find-many-menu-mst.args';

@Injectable()
export class MenuMstService {
    constructor(private readonly prisma: PrismaService) { }

    async findAll(args: FindManyMenuMstArgs): Promise<MenuMst[]> {
        return this.prisma.menuMst.findMany(args);
    }
}
