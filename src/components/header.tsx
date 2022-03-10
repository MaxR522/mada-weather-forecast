import { Box, Text, Link } from '@chakra-ui/react';
import React from 'react';

type Props = {};

const Header = (props: Props) => {
  return (
    <>
      <Box
        w={'100%'}
        bgColor={'blackAlpha.300'}
        textAlign={'center'}
        height={'auto'}
        display={'flex'}
        alignItems={'center'}
        flexDirection={'column'}
        py={'20px'}
        fontSize={'xl'}
      >
        <Text w={'100%'}>Carte météo interactive de Madagascar </Text>
      </Box>
    </>
  );
};

export default Header;
