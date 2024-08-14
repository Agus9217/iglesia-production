'use client'

import { AspectRatio, Box, Button, Flex, Heading, Highlight, StackDivider, Text, VStack } from '@chakra-ui/react'
import { IoIosArrowForward } from "react-icons/io";
import Image from 'next/image'
import img from '../../assets/img/iglesia-hero-img.jpg'
import { motion } from 'framer-motion'

export const Hero = () => {

  const MotionButton = motion(Button)

  return (
    <Box
      position={'relative'}
      top={0}
      w={'100%'}
    >
      <AspectRatio
        m={0}
        p={0}
        ratio={{ base: 4 / 3, lg: 4 / 2 }}
      >
        <Box
          as={Image}
          src={img}
          alt={'Iglesia Cristiana Barrio Nuevo'}
          filter={'opacity(20%) sepia(80%) contrast(40%)'}
        />
      </AspectRatio>
      <Flex
        position={'absolute'}
        p={4}
        top={'65%'}
        left={'50%'}
        maxW={'90%'}
        w={'100%'}
        transform={'translate(-50%, -50%)'}
        flexDirection={'column'}
      >
        <Flex
          flexDirection={{ base: 'column', md: 'row' }}
        >
          <Box
            w={'100%'}
          >
            <Heading
              as={'h1'}
              fontSize={'xl'}
              color={'orange.700'}
            >
              Iglesia Cristiana en Barrio Nuevo
            </Heading>
          </Box>
          <Box
            w={'100%'}
          >
            <Heading
              as={'h2'}
              fontFamily={'merriweather'}
              fontWeight={400}
              fontSize={{ base: '5xl', '2xl': '7xl' }}
            >
              <Highlight
                query={['evangelizando', 'enseñando']}
                styles={{
                  bg: 'orange.100',
                }}
              >
                Bienvenidos a nuestra Iglesia evangelizando y enseñando en Barrio Nuevo
              </Highlight>
            </Heading>
          </Box>
        </Flex>
        <Flex>
          <Box
            width={'100%'}
          >
            <VStack
              mt={6}
              maxW={'70%'}
              divider={<StackDivider borderColor='orange.300' />}
              spacing={6}
              align='stretch'
              bg={'white'}
              py={8}
              px={4}
              shadow={'lg'}

            >
              <Text
                fontWeight={'bold'}
                fontSize={'lg'}
              >
                Proximos Eventos
              </Text>
              <Box
                h='40px'
              >
                <Text
                  fontSize={'12px'}
                  color={'orange.500'}
                >
                  Anuncio
                </Text>
                <Flex>
                  <Button
                    p={3}
                    w={'100%'}
                    colorScheme={'orange'}
                    variant={'ghost'}
                    fontWeight={'semibold'}
                    fontSize={'lg'}
                    color={'black'}
                    justifyContent={'space-between'}
                    alignItems={'center'}
                    rightIcon={<IoIosArrowForward />}
                  >
                    Reunion de oracion
                  </Button>
                </Flex>
              </Box>
              <Box
                h='40px'
              >
                <Text
                  fontSize={'12px'}
                  color={'orange.500'}
                >
                  Anuncio
                </Text>
                <Flex>
                  <Button
                    p={3}
                    w={'100%'}
                    colorScheme={'orange'}
                    variant={'ghost'}
                    fontWeight={'semibold'}
                    fontSize={'lg'}
                    color={'black'}
                    justifyContent={'space-between'}
                    alignItems={'center'}
                    rightIcon={<IoIosArrowForward />}
                  >
                    Reunion de jovenes
                  </Button>
                </Flex>
              </Box>
              <Flex
                justifyContent={'center'}
              >
                <MotionButton
                  whileHover={{ scale: 0.9 }}
                  whileTap={{ scale: 1.1 }}
                  rounded={'none'}
                  colorScheme={'orange'}
                >
                  Ver todo
                </MotionButton>
              </Flex>
            </VStack>
          </Box>
          <Box
            width={'100%'}
            h={'40px'}
          >
            <MotionButton
              colorScheme={'orange'}
              rounded={'none'}
              whileHover={{ scale: 0.9 }}
              whileTap={{ scale: 1.1 }}
              my={6}
            >
              Soy nuevo
            </MotionButton>
            <Text
              fontWeight={'semibold'}
            >
              Acercate el Domingo a las 17:00hs
            </Text>
            <Text
              mt={2}
              fontWeight={'bold'}
              fontSize={'20px'}
            >
              Si venis hacenoslo saber te esperamos!
            </Text>
          </Box>
        </Flex>
      </Flex>
    </Box>
  )
}

