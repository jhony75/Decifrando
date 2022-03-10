import styled from 'styled-components';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 4px;
  justify-items: center;
  align-items: center;
  justify-content: center;
  align-content: center;
`;

const GridItem = styled.div`
  font-size: 1em;
  min-height: 500px;
  min-width: 500px;
`;

function SecondPage() {
  return (
    <GridContainer>
      <GridItem>
        <h1>Titulo</h1>
        <p>Texto 1</p>
      </GridItem>
      <GridItem>
        <h1>Titulo</h1>
        <p>Texto 2</p>
      </GridItem>
      <GridItem>
        <h1>Titulo</h1>
        <p>Texto 3</p>
      </GridItem>
      <GridItem>
        <h1>Titulo</h1>
        <p>Texto 4</p>
      </GridItem>
    </GridContainer>
  );
}

export { SecondPage };
