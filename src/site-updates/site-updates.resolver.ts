import { Query, Resolver, Args } from '@nestjs/graphql';
import { SiteUpdates } from 'src/@generated/prisma-nestjs-graphql/site-updates/site-updates.model'
import { SiteUpdatesService } from 'src/site-updates/site-updates.service';
import { HttpException, HttpStatus } from '@nestjs/common';
import { FindManySiteUpdatesArgs } from 'src/@generated/prisma-nestjs-graphql/site-updates/find-many-site-updates.args';

@Resolver()
export class SiteUpdatesResolver {
    constructor(private readonly siteUpdatesService: SiteUpdatesService) {}

    @Query(() => [SiteUpdates], { nullable: true })
    async siteUpdates(@Args() args: FindManySiteUpdatesArgs): Promise<SiteUpdates[]> {
        console.log('call: siteUpdates#SiteUpdatesResolver');
        const siteUpdates = await this.siteUpdatesService.findAll(args);
        if (!siteUpdates) {
            throw new HttpException('Site updates not found', HttpStatus.NOT_FOUND);
        }
        return siteUpdates;
    }
}