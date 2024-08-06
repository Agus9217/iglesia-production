import { Divider, Stack } from '@chakra-ui/react'
import React from 'react'
import { DesktopNavbar } from './DesktopNavbar'

export const Navbar = () => {
  return (
    <>
      <Divider
        borderColor={'orange.100'}
        borderWidth={'8px'}
        mb={2}
      />
      <Stack
        as={'header'}
        spacing={0}
        position={'fixed'}
        minH={'106px'}
        w={'100%'}
        top={0}
        justifyContent={'center'}
      >

        <DesktopNavbar />
      </Stack>
    </>

  )
}

