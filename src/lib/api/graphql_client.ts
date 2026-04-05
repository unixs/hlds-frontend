import { GraphQLClient } from 'graphql-request'

export type GetEndpointOptions = () => IEndpointOptions;
export interface IEndpointOptions {
  baseUrl?: string;
  path?: string;
}

function getEndpoint(endpointOptions: IEndpointOptions) {
  const {baseUrl, path} = endpointOptions;

  return `${baseUrl}${path}`;
}

function createClient(getEndpointOptions: GetEndpointOptions) {
  const endpoint = getEndpoint(getEndpointOptions());

  return new GraphQLClient(endpoint);
}
export default createClient;
