import type { BaseQueryFn } from "@reduxjs/toolkit/query";
import { request, ClientError } from "graphql-request";

interface GraphQLArgs {
  document: string;
  variables?: Record<string, any>;
}

export const graphqlBaseQuery =
  ({
    baseUrl,
  }: {
    baseUrl: string;
  }): BaseQueryFn<GraphQLArgs, unknown, unknown> =>
  async ({ document, variables }) => {
    try {
      const result = await request(baseUrl, document, variables);
      return { data: result };
    } catch (error) {
      if (error instanceof ClientError) {
        return { error: error.response.errors };
      }
      return { error };
    }
  };
