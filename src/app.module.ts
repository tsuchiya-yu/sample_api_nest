import { Module } from '@nestjs/common';
import { GraphQLServerModule } from './graphql/graphql-server.module';
import { PrismaModule } from 'nestjs-prisma';
import { SampleModule } from './sample/sample.module';
@Module({
  imports: [GraphQLServerModule, SampleModule, PrismaModule.forRoot({ isGlobal: true })],
})
export class AppModule { }