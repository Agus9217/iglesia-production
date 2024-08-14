'use client'

import { Button, Flex, IconButton, Menu, MenuButton, MenuItem, MenuList, Stack } from '@chakra-ui/react'
import { IoMenu } from "react-icons/io5";
import React from 'react'
import Image from 'next/image';
import logo from '../../assets/img/church-logo.png'
import { motion } from 'framer-motion';

export const MobileNavbar = () => {

  const MotionButton = motion(Button)

  return (
    <Stack
      direction={'row'}
      justifyContent={'space-between'}
      alignItems={'center'}
      borderColor={'red'}
      borderWidth={'thin'}
      w={'90%'}
      mx={'auto'}
    >
      <Flex
        alignItems={'center'}
        justifyContent={'center'}
      >
        <MotionButton
          as={'a'}
          variant={'ghost'}
          href={'/'}
          _hover={{
            style: 'none'
          }}
          _active={{
            style: 'none'
          }}
          whileHover={{ scale: 0.9 }}
          whileTap={{ scale: 1.2 }}
        >
          <Image
            src={logo}
            alt={'Logo iglesia cristiana en barrio nuevo'}
            fill={true}
          />
        </MotionButton>
      </Flex>

      <Menu
        autoSelect={false}
      >
        <MenuButton
          as={IconButton}
          variant={'ghost'}
          icon={<IoMenu size={'24px'} />}
        />
        <MenuList>
          <MenuItem>Download</MenuItem>
          <MenuItem>Create a Copy</MenuItem>
          <MenuItem>Mark as Draft</MenuItem>
          <MenuItem>Delete</MenuItem>
          <MenuItem>Attend a Workshop</MenuItem>
        </MenuList>
      </Menu>
    </Stack>
  )
}

