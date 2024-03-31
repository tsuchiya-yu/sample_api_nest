import { Module } from '@nestjs/common';
import { GraphQLServerModule } from './graphql/graphql-server.module';
import { PrismaModule } from 'nestjs-prisma';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { SiteUpdatesModule } from './site-updates/site-updates.module';
import { WinstonModule } from 'nest-winston';
import { logger } from './logger/winston.logger';
import { ShopMstModule } from './shop-mst/shop-mst.module';
import { UserProfileModule } from './user-profile/user-profile.module';
import { UserSnsModule } from './user-sns/user-sns.module';
import { MenuMstModule } from './menu-mst/menu-mst.module';

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
    ShopMstModule,
    UserProfileModule,
    UserSnsModule,
    MenuMstModule,
  ],
})
export class AppModule { }
