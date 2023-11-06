import { Module } from '@nestjs/common';
import { GraphQLServerModule } from './graphql/graphql-server.module';
import { PrismaModule } from 'nestjs-prisma';
import { ConfigModule } from '@nestjs/config';
import { SampleModule } from './sample/sample.module';
import { UsersModule } from './users/users.module';
import { SiteUpdatesModule } from './site-updates/site-updates.module';
@Module({
  imports: [
    GraphQLServerModule,
    SampleModule,
    PrismaModule.forRoot({ isGlobal: true }),
    ConfigModule.forRoot({ isGlobal: true }),
    UsersModule,
    SiteUpdatesModule,
  ],
})
export class AppModule { }
