import createClient from '../graphql_client'
import {clientENV} from "@/lib/env";

const frontendGraphqlClient = createClient(() => ({
  baseUrl: clientENV.NEXT_PUBLIC_HLDS_FRONT_API_URL,
  path: clientENV.NEXT_PUBLIC_HLDS_FRONT_GRAPHQL_PATH,
}));

export default frontendGraphqlClient;
