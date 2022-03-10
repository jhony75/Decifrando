import { Box, Text, SimpleGrid, Heading, Image } from '@chakra-ui/react';

export function App() {
  const assets = {
    animalBg: './assets/doushouqi-elephant.svg',
  };

  return (
    <>
      <SimpleGrid
        columns={2}
        spacing={10}
        align="center"
        justify="center"
        color="black"
      >
        <Box
          borderRadius="10px"
          bg="yellow.300"
          minH="sm"
          minW="sm"
          p="4"
          m="4"
        >
          <Heading w="100%">Animais</Heading>
        </Box>
        <Box
          borderRadius="10px"
          bg="yellow.300"
          minH="sm"
          minW="sm"
          p="4"
          m="4"
        >
          <Heading w="100%">Cores</Heading>
          <Box>
            <img src="./assets/doushouqi-elephant.svg" />
          </Box>
        </Box>
        <Box
          borderRadius="10px"
          bg="yellow.300"
          minH="sm"
          minW="sm"
          p="4"
          m="4"
        >
          <Heading w="100%">Frutas</Heading>
        </Box>
        <Box
          borderRadius="10px"
          bg="yellow.300"
          minH="sm"
          minW="sm"
          p="4"
          m="4"
        >
          <Heading w="100%">Veiculos</Heading>
        </Box>
      </SimpleGrid>
    </>
  );
}
