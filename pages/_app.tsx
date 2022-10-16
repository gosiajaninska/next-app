import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="container md:px-4 flex flex-col min-h-screen relative">
      <Component {...pageProps} />
    </div>
    )
}

export default MyApp
