import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

const client = new ApolloClient({
  ssrMode: typeof window === "undefined",
  link: new HttpLink({
    uri: "http://localhost:8080/v1/graphql",
    headers: {
      "x-hasura-admin-secret": "myadminsecretkey",
    },
    credentials: "same-origin",
    fetch,
  }),
  cache: new InMemoryCache().restore(),
});

export default client;
