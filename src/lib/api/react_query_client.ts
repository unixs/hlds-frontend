import {QueryClient, environmentManager } from "@tanstack/react-query";
import {clientENV} from "@/lib/env";

// TypeScript only:
declare global {
  interface Window {
    __TANSTACK_QUERY_CLIENT__:
      import('@tanstack/query-core')
        .QueryClient
  }
}

let browserClient: QueryClient | undefined;


function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        // With SSR, we usually want to set some default staleTime
        // above 0 to avoid refetching immediately on the client
        staleTime: 60 * 1000,
      },
    },
  })
}

function getQueryClient () {
  if (environmentManager.isServer()) {
    return makeQueryClient();
  }

  if (!browserClient) {
    browserClient = makeQueryClient()
  }

  if (clientENV.NEXT_PUBLIC_NODE_ENV == 'development') {
    window.__TANSTACK_QUERY_CLIENT__ = browserClient
  }

  return browserClient;
}


export default getQueryClient;
