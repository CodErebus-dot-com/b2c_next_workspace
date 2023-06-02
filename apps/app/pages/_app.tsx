import type { AppProps } from 'next/app'
// import css
import '../styles.css'

export default function MyApp({ Component, pageProps }: AppProps) {

  return (
    <Component {...pageProps} />
  )
}
