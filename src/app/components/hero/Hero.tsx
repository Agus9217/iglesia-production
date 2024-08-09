import { AspectRatio, Box } from '@chakra-ui/react'
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
          filter={'opacity(20%) sepia(90%) contrast(60%)'}
        />
      </AspectRatio>
    </Box>
  )
}

