import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { SampleService } from './sample.service';
import { SampleResolver } from './sample.resolver';

@Module({
  providers: [SampleResolver, SampleService, PrismaService],
})
export class SampleModule {}
