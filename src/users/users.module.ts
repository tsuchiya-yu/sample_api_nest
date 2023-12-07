import { Module, forwardRef } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { PrismaService } from 'src/prisma.service';
import { JwtModule } from '@nestjs/jwt';
import { AuthModule } from '../auth/auth.module';
@Module({
  imports: [forwardRef(() => AuthModule), JwtModule],
  providers: [UsersService, UsersResolver, PrismaService],
  exports: [UsersService]
})
export class UsersModule { }
