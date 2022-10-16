import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="container flex flex-col min-h-screen relative">
      <Component {...pageProps} />
    </div>
    )
}

export default MyApp
