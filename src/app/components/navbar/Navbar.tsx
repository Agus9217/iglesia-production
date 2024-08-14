import { Show, Stack } from '@chakra-ui/react'
import React from 'react'
import { DesktopNavbar } from './DesktopNavbar'
import { MobileNavbar } from './MobileNavbar'

export const Navbar = () => {
  return (
    <Stack
      as={'header'}
      position={'fixed'}
      spacing={0}
      minH={'70px'}
      w={'100%'}
      top={0}
      justifyContent={'center'}
      zIndex={1000}
      bg={'orange.50'}
    >
      <Show
        above={'md'}
      >
        <DesktopNavbar />
      </Show>
      <Show
        below={'md'}
      >
        <MobileNavbar />
      </Show>
    </Stack>

  )
}

