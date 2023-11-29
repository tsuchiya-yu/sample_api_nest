import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { join } from 'path/posix';
import { UsersModule } from '../users/users.module';
import { logger } from '../logger/winston.logger';

@Module({
  imports: [
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: async () => ({
        plugins: [ApolloServerPluginLandingPageLocalDefault()],
        playground: false,
        debug: true,
        typePaths: ['./src/**/*.graphql'],
        definitions: {
          path: join(process.cwd(), 'src/graphql/type/graphql.ts'),
          outputAs: 'class',
        },
        // TODO: 見直した方が良い気がする
        csrfPrevention: false,
        formatError: (error) => {
          console.log('call: formatError');
          logger.error('GraphQL Error:', error);
          return error;
        },
      }),
    }),
    UsersModule,
  ],
})
export class GraphQLServerModule { }
