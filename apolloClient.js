// apolloClient.js
import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://gblheadlesswp.enamahamed.site/index.php?graphql', // Replace with your GraphQL endpoint
  cache: new InMemoryCache(),
});

export default client;
