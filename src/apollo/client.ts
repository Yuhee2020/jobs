import {ApolloClient, InMemoryCache} from '@apollo/client';


export const client = new ApolloClient({
  uri: process.env.REACT_APP_BASE_URL,
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          getJobList: {
            keyArgs: false,
            merge(existing = {}, incoming) {
              console.log(existing)
              console.log(incoming)
              return {
                ...existing, ...incoming, jobs: existing.jobs
                  ? [...existing.jobs, ...incoming.jobs]
                  : [...incoming.jobs]
              }
            }
          }
        }
      }
    }
  }),
});

export default client;