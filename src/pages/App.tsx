
import { peliculas } from '../data/peliculas';
import Navbar from '../components/Navbar';
import MovieCard from '../components/MovieCard';
import Container from '../components/Container';
import styled from 'styled-components';

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const App = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Grid>
          {peliculas.map(p => (
            <MovieCard key={p.id} pelicula={p} />
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default App;
