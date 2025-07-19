import styled from 'styled-components';

const Container = styled.div`
  min-height: 100vh;
  padding: 2rem;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.5rem;
  font-weight: bold;
  text-shadow: 0 0 5px rgba(0,0,0,0.7);
`;

const Favoritos = () => {
  return (
    <Container>
      Favoritos
    </Container>
  );
};

export default Favoritos;
