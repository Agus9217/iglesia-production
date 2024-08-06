'use client'

import { Box, Button, Flex, Popover, PopoverBody, PopoverContent, PopoverTrigger, Stack, } from '@chakra-ui/react'
import logo from '../../assets/img/church-logo.svg'
import { IoIosArrowDown } from "react-icons/io";
import Image from 'next/image'
import { navItem } from './nav-item'
import { Link } from '@chakra-ui/next-js'

export const DesktopNavbar = () => {
  return (
    <Stack
      spacing={0}
      direction={'row'}
    >
      <Flex
        flexGrow={1}
        maxW={300}
        w={'100%'}
        alignItems={'center'}
        justifyContent={'center'}
      >
        <Image
          src={logo}
          alt={'Logo iglesia cristiana en barrio nuevo'}
          width={60}
          height={60}
        />
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
                  p={2}
                  variant={'ghost'}
                  _hover={{
                    color: 'orange.300'
                  }}
                  rightIcon={<IoIosArrowDown />}

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
                              bg: 'orange.50'
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

