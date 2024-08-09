import { extendTheme } from '@chakra-ui/react'
import '@fontsource-variable/montserrat';
import '@fontsource/merriweather/300.css';
import '@fontsource/merriweather/400.css';
import '@fontsource/merriweather/700.css';
import '@fontsource/merriweather/900.css';

const theme = extendTheme({
  styles: {
    global: {
      // styles for the `body`
      body: {
        bg: 'orange.50',
      }
    }
  },

  fonts: {
    heading: `'Montserrat Variable', sans-serif`,
    body: `'Montserrat Variable', sans-serif`,
    merriweather: `'Merriweather', serif`,
  },
})

export default theme