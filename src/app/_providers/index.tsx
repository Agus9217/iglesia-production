'use client'

import { ChakraProvider } from '@chakra-ui/react'
import { css, Global } from '@emotion/react'
// Supports weights 100-900
import '@fontsource-variable/montserrat';
import React from 'react'

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ChakraProvider>
      <Global
        styles={css`
          html {
            scroll-behavior: smooth;
          },

          body {
            font-family: 'Montserrat Variable', sans-serif;
          }
        `}
      />
      {children}
    </ChakraProvider>
  )
}

