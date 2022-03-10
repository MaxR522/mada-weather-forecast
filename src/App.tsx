import * as React from 'react';
import { ChakraProvider, theme, Container } from '@chakra-ui/react';
import MapChart from './pages/maps';

export const App = () => (
  <ChakraProvider theme={theme}>
    <Container>
      <MapChart />
    </Container>
  </ChakraProvider>
);
