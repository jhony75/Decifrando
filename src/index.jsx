import React from 'react';
import { render } from 'react-dom';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { HomePage } from './Pages/HomePage';

render(
  <React.StrictMode>
    <ChakraProvider>
      <ColorModeScript initailColorMode="light" />
      <HomePage />
      {/* <SecondPage /> */}
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
