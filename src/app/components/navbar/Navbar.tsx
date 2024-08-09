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
    >
      <Divider
        position={'absolute'}
        borderWidth={'8px'}
        borderColor={'orange.100'}
        top={0}
      />


      <DesktopNavbar />
    </Stack>

  )
}

