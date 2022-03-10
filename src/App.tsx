import * as React from 'react';
import { ChakraProvider, theme, Container } from '@chakra-ui/react';
import MapChart from './pages/maps';
import Footer from './components/footer';

export const App = () => (
  <ChakraProvider theme={theme}>
    <MapChart />
    <Footer />
  </ChakraProvider>
);
