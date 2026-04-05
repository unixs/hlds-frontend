import { gql } from 'graphql-request';

export const GET_SERVERS = gql`
  query {
    servers {
      name
      addr
      alive
      port
    }
  }
`;
