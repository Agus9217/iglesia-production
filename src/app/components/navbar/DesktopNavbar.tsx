import { Box, Button, Flex, Popover, PopoverArrow, PopoverBody, PopoverContent, PopoverHeader, PopoverTrigger, Stack, UnorderedList } from '@chakra-ui/react'
import logo from '../../assets/img/church-logo.svg'
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
        borderWidth={'thin'}
        borderColor={'red'}
        flexGrow={1}
      >
        <Image
          src={logo}
          alt={'Logo iglesia cristiana en barrio nuevo'}
          width={60}
          height={60}
        />
      </Flex>
      <Flex
        borderWidth={'thin'}
        borderColor={'green'}
        flexGrow={2}
        alignItems={'center'}
        justifyContent={'center'}
      >
        {
          navItem.map(item => (
            <Popover key={item.label} trigger={'hover'} placement={'bottom-start'}>
              <PopoverTrigger>
                <Box
                  as={'a'}
                  href={item.href ?? '#'}
                  p={2}
                >
                  {item.label}
                </Box>
              </PopoverTrigger>
              {
                item.children && (
                  <PopoverContent>
                    {
                      item.children.map(item => (
                        <PopoverBody key={item.label}>
                          <Box
                          as={'a'}
                          href={item.href}
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
        borderWidth={'thin'}
        borderColor={'cyan'}
        flexGrow={1}
      >
      </Flex>
    </Stack>
  )
}

