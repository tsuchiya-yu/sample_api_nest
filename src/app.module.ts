import { Module } from '@nestjs/common';
import { GraphQLServerModule } from './graphql/graphql-server.module';
import { PrismaModule } from 'nestjs-prisma';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { SiteUpdatesModule } from './site-updates/site-updates.module';
import { WinstonModule } from 'nest-winston';
import { logger } from './logger/winston.logger';

@Module({
  imports: [
    GraphQLServerModule,
    PrismaModule.forRoot({ isGlobal: true }),
    ConfigModule.forRoot({ isGlobal: true }),
    UsersModule,
    SiteUpdatesModule,
    WinstonModule.forRoot({
      transports: logger.transports,
    }),
  ],
})
export class AppModule { }
