import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { join } from 'path/posix';
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
            }),
        }),
    ],
})
export class GraphQLServerModule { }