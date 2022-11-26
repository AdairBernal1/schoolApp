import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: [
    {
      'https://cecssin-graphql.hasura.app/v1/graphql': {
        headers: {
          ContentType: 'application/json',
          'x-hasura-admin-secret':
            'ICvXwrYj76OzUXfRiIdZ3ms3oxUVs0Pv46l07A9d9XsKVTOy6yrVOVp6smWcFqLB',
        },
      },
    },
  ],
  documents: './src/**/*.graphql',
  generates: {
    './graphql/generated.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-apollo-angular',
      ],
    },
    './graphql.schema.json': {
      plugins: ['introspection'],
    },
  },
};

export default config;
