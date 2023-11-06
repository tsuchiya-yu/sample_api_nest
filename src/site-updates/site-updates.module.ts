import { Module } from '@nestjs/common';
import { SiteUpdatesService } from './site-updates.service';
import { SiteUpdatesResolver } from './site-updates.resolver';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [SiteUpdatesService, SiteUpdatesResolver, PrismaService],
  exports: [SiteUpdatesService]
})
export class SiteUpdatesModule {}
