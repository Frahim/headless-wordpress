// apolloClient.js
import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://uiexpertz.com/globallife-wp/graphql', // Replace with your GraphQL endpoint
  cache: new InMemoryCache(),
});

export default client;
