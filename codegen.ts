import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "./server/src/schema.graphql",
  generates: {
    "./server/src/generated/graphql.ts": {
      plugins: ["typescript", "typescript-resolvers"],
      config: {
        useIndexSignature: true,
        enumsAsTypes: true,
      },
    },
    "./client/src/generated/graphql.ts": {
      plugins: ["typescript", "typescript-operations"],
      config: {
        useIndexSignature: true,
        enumsAsTypes: true,
      },
    },
  },
};

export default config;
