import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Layout } from '../components/Layout'
import { CartStateContextProvider } from '../components/cart/Context'
import { ApolloProvider } from '@apollo/client';
import { apolloClient } from '../graphql/apolloClient'

function MyApp({ Component, pageProps }: AppProps) {

  const queryClient = new QueryClient()

  return (
    <ApolloProvider client={apolloClient}>
      <CartStateContextProvider>
        <QueryClientProvider client={queryClient}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </QueryClientProvider>
      </CartStateContextProvider>
    </ApolloProvider>
  )
}

export default MyApp
