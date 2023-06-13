import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import Script from 'next/script'

const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
}

export const theme = extendTheme({ colors })

export default function MyApp({ Component, pageProps }: AppProps) {

  return (
    <>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
        <Script id='test-script'>
        {
          `
            console.log('test script')
          `
        }
      </Script>
      </ChakraProvider>
    </>
  )
}
