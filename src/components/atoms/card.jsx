import styled from 'styled-components';

const Card = styled.div`
  max-width: 350px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
  margin: 30px auto;
`;
const SocialCard = () => (
  <Card>
    <h1>Teste de titulo</h1>
    <hr />
    <p>Teste</p>
  </Card>
);

export { SocialCard };
