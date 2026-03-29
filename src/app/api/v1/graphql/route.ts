import { createSchema, createYoga } from 'graphql-yoga'
import { useDisableIntrospection } from '@graphql-yoga/plugin-disable-introspection'

import getSchema from "@/graphql/index";


interface NextContext {
  params: Promise<Record<string, string>>
}

const SERVERS = Object.freeze([
  { name: "Fufels`s public" , port: 27015 },
  { name: 'Fufels`s private', port: 27016 },
  { name: 'Fufels`s rats', port: 27017 }
]);

const ENDPOINT = '/api/v1/graphql';
const SCHEMA_NAME = 'schema';

function setupPlugins() {
  const plugins = [];

  if (process.env.NODE_ENV === 'production') {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    plugins.push(useDisableIntrospection());
  }

  return plugins;
}

const { handleRequest } = createYoga<NextContext>({
  graphiql: process.env.NODE_ENV !== 'production',
  plugins: setupPlugins(),
  schema: createSchema({
    typeDefs: getSchema(SCHEMA_NAME),
    resolvers: {
      Query: {
        servers: () => SERVERS
      },
      Server: {
        name: (item) => item.name,
        alive: async () => {
          await new Promise((resolve) => setTimeout(resolve, 3000))

          return true
        },
        addr: () => '127.0.0.1',
        port: (item) => item.port,
      }
    }
  }),

  // While using Next.js file convention for routing, we need to configure Yoga to use the correct endpoint
  graphqlEndpoint: ENDPOINT,

  // Yoga needs to know how to create a valid Next response
  fetchAPI: { Response }
})

export { handleRequest as GET, handleRequest as POST, handleRequest as OPTIONS }
