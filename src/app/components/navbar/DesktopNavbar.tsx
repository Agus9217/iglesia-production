import { Button, Flex, Popover, PopoverArrow, PopoverBody, PopoverContent, PopoverHeader, PopoverTrigger, Stack, UnorderedList } from '@chakra-ui/react'
import logo from '../../assets/img/church-logo.svg'
import Image from 'next/image'
import { navItem } from './nav-item'

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
      >
        {
          navItem.map(item => (
            <Popover key={item.label} trigger={'hover'}>
              <PopoverTrigger>
                <Button>{item.label}</Button>
              </PopoverTrigger>
              {
                item.children && (
                  <PopoverContent>
                    <PopoverBody>Are you sure you want to have that milkshake?</PopoverBody>
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

