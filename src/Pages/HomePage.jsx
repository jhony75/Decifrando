import {
  VStack,
  IconButton,
  useColorMode,
  Heading,
  Center,
} from '@chakra-ui/react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { App } from '../App';

function HomePage() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <VStack p={4}>
      <IconButton
        icon={colorMode === 'light' ? <FaSun /> : <FaMoon />}
        isRound="true"
        size="lg"
        alignSelf="flex-end"
        onClick={toggleColorMode}
      />
      <Heading
        mb="8"
        fontWeight="extrabold"
        size="4xl"
        bgGradient="linear(to-br, yellow.300, orange.400)"
        bgClip="text"
      >
        Decifrando
      </Heading>
      <Center>
        <App />
      </Center>
    </VStack>
  );
}

export { HomePage };
