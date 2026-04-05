"use client"

import {QueryClientProvider} from "@tanstack/react-query";
import getQueryClient from "@api/react_query_client";
import React from "react";

function DefaultLayoutProviders({ children }: { children: React.ReactNode }) {
  const client = getQueryClient();

  return (
    <QueryClientProvider client={client}>
      {children}
    </QueryClientProvider>
  )
}

export default DefaultLayoutProviders;
