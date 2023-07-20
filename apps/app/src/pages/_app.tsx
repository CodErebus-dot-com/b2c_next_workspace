import type { AppProps } from 'next/app'
import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import '@styles/globals.css'

const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
    link: '#3366cc',
    error: '#e53e3e',
  },
}

export const theme = extendTheme({ colors })

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <CacheProvider>
        <ChakraProvider theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </CacheProvider>
    </>
  )
}
