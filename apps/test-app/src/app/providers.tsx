'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import styles from './styles'
export function Providers({ 
    children 
  }: { 
  children: React.ReactNode 
  }) {
  return (
    <CacheProvider>
      <ChakraProvider>
        {children}
        
        <style jsx>
          {styles}
        </style>
      </ChakraProvider>
    </CacheProvider>
  )
}