import { Module } from '@nestjs/common';
import { UserSnsService } from './user-sns.service';
import { UserSnsResolver } from './user-sns.resolver';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [UserSnsService, UserSnsResolver, PrismaService],
  exports: [UserSnsService]
})
export class UserSnsModule {}
