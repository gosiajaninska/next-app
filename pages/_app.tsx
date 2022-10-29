import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

function MyApp({ Component, pageProps }: AppProps) {

  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <div className="container flex flex-col min-h-screen relative">
        <Header></Header>
        <Component {...pageProps} />
        <Footer></Footer>
      </div>
    </QueryClientProvider>
  )
}

export default MyApp
