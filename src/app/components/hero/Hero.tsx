import { AspectRatio, Box, Flex, Heading, Highlight } from '@chakra-ui/react'
import Image from 'next/image'
import img from '../../assets/img/iglesia-hero-img.jpg'

export const Hero = () => {
  return (
    <Box
      position={'relative'}
      top={0}
      w={'100%'}
    >
      <AspectRatio
        m={0}
        p={0}
        ratio={4 / 2}
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
        top={'50%'}
        left={'50%'}
        maxW={'50%'}
        w={'100%'}
        transform={'translate(-50%, -50%)'}
      >
        <Box
          maxW={'50%'}
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
          maxW={'50%'}
          w={'100%'}
        >

          <Heading
            as={'h2'}
            fontFamily={'merriweather'}
            fontWeight={400}
            fontSize={'7xl'}
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
    </Box>
  )
}

