'use client'

import { ChakraProvider } from '@chakra-ui/react'
import { css, Global } from '@emotion/react'
// Supports weights 100-900
import '@fontsource-variable/montserrat';
import React from 'react'
import theme from '../assets/theme/theme';

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ChakraProvider theme={theme}>
      <Global
        styles={css`
          html {
            scroll-behavior: smooth;
          }
        `}
      />
      {children}
    </ChakraProvider>
  )
}

