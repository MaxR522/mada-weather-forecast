import * as React from 'react';
import { ChakraProvider, theme, Container } from '@chakra-ui/react';
import MapChart from './pages/maps';
import Footer from './components/footer';
import Header from './components/header';

export const App = () => (
  <ChakraProvider theme={theme}>
    <Header />
    <MapChart />
    <Footer />
  </ChakraProvider>
);
