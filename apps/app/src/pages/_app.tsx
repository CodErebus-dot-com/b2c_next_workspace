import { ChakraProvider } from '@chakra-ui/react'
import theme from '@src/theme'
import '@styles/globals.css'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
// import type { AppProps } from 'next/app'

interface AppProps {
  Component: React.FC
  pageProps: any
} // temp AppProps

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
      <SpeedInsights />
      <Analytics />
    </>
  )
}
