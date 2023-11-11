import { resolvers } from '../../../graphql/resolvers';
import { typeDefs } from '../../../graphql/schema';

import { createSchema, createYoga } from 'graphql-yoga';

const { handleRequest } = createYoga({
  graphqlEndpoint: '/graphql',
  schema: createSchema({
    typeDefs,
    resolvers,
  }),
  fetchAPI: {
    Request: Request,
    Response: Response,
  },
});

export { handleRequest as GET, handleRequest as POST };
