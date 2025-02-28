import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: 'http://localhost:3000/graphql',
  documents: "src/basics/graphql/**/*.ts",
  generates: {
    "src/generated/graphql.types.ts": {
      plugins: ["typescript"]
    }
  }
};

export default config;
