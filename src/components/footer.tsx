import { Box, Link, Text } from '@chakra-ui/react';

const Footer = () => {
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
        mt={'20px'}
        py={'20px'}
      >
        <Text w={'100%'}>
          Built with ❤ by{' '}
          <Link
            as='a'
            href='https://www.linkedin.com/in/mario-randrianomearisoa/'
            target={'_blank'}
          >
            {' '}
            Mario Randrianomearisoa
          </Link>{' '}
        </Text>
        <Text fontSize={'sm'}>Copyright © 2022</Text>
      </Box>
    </>
  );
};

export default Footer;
