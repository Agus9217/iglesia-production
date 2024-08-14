'use client'

import { Box, Button, Flex, Popover, PopoverBody, PopoverContent, PopoverTrigger, Stack, } from '@chakra-ui/react'
import logo from '../../assets/img/church-logo.png'
import { IoIosArrowDown } from "react-icons/io";
import Image from 'next/image'
import { navItem } from './nav-item'
import { motion } from 'framer-motion';

const MotionButton = motion(Button)

export const DesktopNavbar = () => {

  return (
    <Stack
      spacing={0}
      direction={'row'}
      w={'85%'}
      mx={'auto'}
    >
      <Flex
        flexGrow={1}
        maxW={300}
        w={'100%'}
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
      <Flex
        flexGrow={2}
        alignItems={'center'}
        justifyContent={'center'}
      >
        {
          navItem.map(item => (
            <Popover
              key={item.label}
              trigger={'hover'}
              placement={'bottom-start'}
            >
              <PopoverTrigger>
                <Button
                  as={'a'}
                  href={item.href ?? '#'}
                  p={4}
                  _hover={{
                    bg: 'orange.100'
                  }}
                  rounded={'none'}
                  variant={'ghost'}
                  fontWeight={'medium'}
                  rightIcon={
                    item.children && <IoIosArrowDown size={'10px'} />
                  }
                >
                  {item.label}
                </Button>
              </PopoverTrigger>
              {
                item.children && (
                  <PopoverContent
                    border={0}
                    m={0}
                    p={0}
                    boxShadow={'lg'}
                    rounded={'none'}
                    minW={'sm'}
                  >
                    {
                      item.children.map(item => (
                        <PopoverBody
                          key={item.label}
                          p={0}
                          m={0}
                        >
                          <Box
                            as={'a'}
                            href={item.href}
                            role={'group'}
                            display={'block'}
                            p={4}
                            _hover={{
                              bg: 'orange.100'
                            }}
                          >
                            {item.label}
                          </Box>
                        </PopoverBody>
                      ))
                    }
                  </PopoverContent>
                )
              }
            </Popover>
          ))
        }
      </Flex>
      <Flex
        flexGrow={1}
        maxW={300}
        w={'100%'}
        alignItems={'center'}
        justifyContent={'center'}
      >
      </Flex>
    </Stack>
  )
}

