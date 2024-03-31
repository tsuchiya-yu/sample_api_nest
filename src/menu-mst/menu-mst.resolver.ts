import { Query, Resolver, Args } from '@nestjs/graphql';
import { MenuMst } from './menu-mst';
import { MenuMstService } from './menu-mst.service';
import { HttpException, HttpStatus } from '@nestjs/common';
import { FindManyMenuMstArgs } from 'src/@generated/prisma-nestjs-graphql/menu-mst/find-many-menu-mst.args';

@Resolver(() => MenuMst)
export class MenuMstResolver {
    constructor(private readonly menuMstService: MenuMstService) {}

    @Query(() => [MenuMst], { nullable: true })
    async menuMsts(@Args() args: FindManyMenuMstArgs): Promise<MenuMst[]> {
        console.log('call: menuMsts#MenuMstResolver');
        const menuMsts = await this.menuMstService.findAll(args);
        if (!menuMsts) {
            throw new HttpException('Menu Mst not found', HttpStatus.NOT_FOUND);
        }
        return menuMsts;
    }
}
