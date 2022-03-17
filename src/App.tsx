import { ChakraProvider, theme } from '@chakra-ui/react';
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
