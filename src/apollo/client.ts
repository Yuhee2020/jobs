import { ApolloClient, InMemoryCache } from '@apollo/client'

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        getJobList: {
          keyArgs: false,
          merge(existing = {}, incoming) {
            return {
              ...existing,
              ...incoming,
              jobs: existing.jobs
                ? [...existing.jobs, ...incoming.jobs]
                : [...incoming.jobs],
            }
          },
        },
      },
    },
  },
})

export const client = new ApolloClient({
  uri: process.env.REACT_APP_BASE_URL,
  cache,
})

export default client
