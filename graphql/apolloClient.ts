import { ApolloClient, InMemoryCache } from '@apollo/client';

export const apolloClient = new ApolloClient({
  uri: 'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clb71ocnx0e0v01ut2aq6bg1i/master',
  cache: new InMemoryCache(),
});
