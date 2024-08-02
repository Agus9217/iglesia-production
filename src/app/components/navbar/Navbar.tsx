import { Stack } from '@chakra-ui/react'
import React from 'react'
import { DesktopNavbar } from './DesktopNavbar'

export const Navbar = () => {
  return (
    <Stack
      as={'header'}
      spacing={0}
      position={'fixed'}
      minH={'80px'}
      w={'100%'}
      borderWidth={'thin'}
      borderColor={'blue'}
      top={0}
    >
      <DesktopNavbar />
    </Stack>
  )
}

