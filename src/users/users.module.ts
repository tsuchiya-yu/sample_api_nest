import { Module, forwardRef } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { PrismaService } from 'src/prisma.service';
import { JwtModule } from '@nestjs/jwt';
import { AuthModule } from '../auth/auth.module';
import { S3Service } from '../util/S3Service';
@Module({
  imports: [forwardRef(() => AuthModule), JwtModule],
  providers: [UsersService, UsersResolver, PrismaService, S3Service],
  exports: [UsersService]
})
export class UsersModule { }
