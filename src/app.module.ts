import { Module } from '@nestjs/common';
import { GraphQLServerModule } from './graphql/graphql-server.module';
import { SampleModule } from './sample/sample.module';
@Module({
  imports: [GraphQLServerModule, SampleModule],
})
export class AppModule { }