import { Module } from '@nestjs/common';
import { UserProfileService } from './user-profile.service';
import { UserProfileResolver } from './user-profile.resolver';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [UserProfileService, UserProfileResolver, PrismaService],
  exports: [UserProfileService]
})
export class UserProfileModule {}
