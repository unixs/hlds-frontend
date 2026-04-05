import {useQuery } from "@tanstack/react-query";
import { frontendGraphqlClient } from "@/lib/api";
import { GET_SERVERS } from "@/lib/api/frontend/graphql_queries";

export function useServersList() {
  const query = useQuery({
    queryKey: ['servers'],
    queryFn: () => frontendGraphqlClient.request(GET_SERVERS),
  });

  return query;
}
