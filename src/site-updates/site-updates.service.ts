import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { SiteUpdates } from 'src/@generated/prisma-nestjs-graphql/site-updates/site-updates.model'
import { FindUniqueSiteUpdatesArgs } from 'src/@generated/prisma-nestjs-graphql/site-updates/find-unique-site-updates.args';
import { FindManySiteUpdatesArgs } from 'src/@generated/prisma-nestjs-graphql/site-updates/find-many-site-updates.args';

@Injectable()
export class SiteUpdatesService {
    constructor(private readonly prisma: PrismaService) { }

    async findUnique(args: FindUniqueSiteUpdatesArgs): Promise<SiteUpdates | null> {
        return this.prisma.siteUpdates.findUnique(args);
    }

    async findAll(args: FindManySiteUpdatesArgs): Promise<SiteUpdates[]> {
        return this.prisma.siteUpdates.findMany(args);
    }

}