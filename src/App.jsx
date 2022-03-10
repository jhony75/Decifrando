import { Box, Text, SimpleGrid, Heading, Button } from '@chakra-ui/react';
import Elephant from './assets/doushouqi-elephant.svg';
import Colors from './assets/Low-Poly-Splash-Of-Color-Lotus-Flower-Silhouette.svg';
import Boat from './assets/pirate_ship2.svg';
import Fruits from './assets/Fruechte-coloured.svg';

export function App() {
  function animal() {
    alert('animal');
  }
  function cor() {
    alert('cor');
  }
  function fruta() {
    alert('fruta');
  }
  function veiculo() {
    alert('veiculo');
  }

  return (
    <>
      <SimpleGrid
        columns={2}
        spacing={10}
        align="center"
        justify="center"
        color="black"
      >
        <button type="button" onClick={animal}>
          <Box
            borderRadius="10px"
            bg="yellow.300"
            minH="sm"
            minW="sm"
            p="4"
            m="4"
          >
            <Heading w="100%">Animais</Heading>
            <Box>
              <img src={Elephant} />
            </Box>
          </Box>
        </button>
        <button type="button" onClick={cor}>
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
              <img src={Colors} />
            </Box>
          </Box>
        </button>
        <button type="button" onClick={fruta}>
          <Box
            borderRadius="10px"
            bg="yellow.300"
            minH="sm"
            minW="sm"
            p="4"
            m="4"
          >
            <Heading w="100%">Frutas</Heading>
            <Box>{/* <img src={Fruits} /> */}</Box>
          </Box>
        </button>
        <button type="button" onClick={veiculo}>
          <Box
            borderRadius="10px"
            bg="yellow.300"
            minH="sm"
            minW="sm"
            p="4"
            m="4"
          >
            <Heading w="100%">Veiculos</Heading>
            <Box>{/* <img src={Boat} /> */}</Box>
          </Box>
        </button>
      </SimpleGrid>
    </>
  );
}
