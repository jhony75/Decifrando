import { SimpleGrid, Box, Text, useColorMode, Heading } from '@chakra-ui/react';

export function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Heading>Decifrando</Heading>
      <SimpleGrid columns={2} spacing={10}>
        <Box display="flex" borderRadius="10px" bg="tomato">
          <Text>Animais</Text>
        </Box>
        <Box display="flex" borderRadius="10px" bg="tomato">
          <Text>Cores</Text>
        </Box>
        <Box display="flex" borderRadius="10px" bg="tomato">
          <Text>Frutas</Text>
        </Box>
        <Box display="flex" borderRadius="10px" bg="tomato">
          <Text>Veículos</Text>
        </Box>
      </SimpleGrid>
    </>
  );
}
