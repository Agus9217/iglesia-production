import { Divider, Stack } from '@chakra-ui/react'
import React from 'react'
import { DesktopNavbar } from './DesktopNavbar'

export const Navbar = () => {
  return (
    <Stack
      as={'header'}
      spacing={0}
      position={'fixed'}
      minH={'106px'}
      w={'100%'}
      top={0}
      justifyContent={'center'}
      zIndex={1000}
      bg={'orange.50'}
    >
      <Divider
        position={'absolute'}
        borderWidth={'5px'}
        borderColor={'orange.200'}
        top={0}
      />
      <DesktopNavbar />
    </Stack>

  )
}

