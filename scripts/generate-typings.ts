import { GraphQLDefinitionsFactory } from '@nestjs/graphql';
import { join } from 'path';
new GraphQLDefinitionsFactory().generate({
    typePaths: ['./src/**/*.graphql'],
    path: join(process.cwd(), 'src/graphql/type/graphql.ts'),
    outputAs: 'class',
});