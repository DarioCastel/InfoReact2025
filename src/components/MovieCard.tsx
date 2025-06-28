import styled from 'styled-components';
import type { Pelicula } from '../data/peliculas';

type Props = {
  pelicula: Pelicula;
  onClick: () => void;
};

const Card = styled.div`
  background-color: #222;
  color: white;
  border-radius: 8px;
  overflow: hidden;
  width: 200px;
  margin: 1rem;
  box-shadow: 0 0 10px rgba(0,0,0,0.5);
  display: flex;
  flex-direction: column;
`;

const Image = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

const Content = styled.div`
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const Spacer = styled.div`
  flex-grow: 1;
`;

const Button = styled.button`
  margin-top: 0.5rem;
  background-color: #e50914;
  border: none;
  color: white;
  padding: 0.5rem;
  width: 100%;
  cursor: pointer;
  font-weight: bold;
`;

const MovieCard = ({ pelicula, onClick }: Props) => {
  return (
    <Card>
      <Image src={pelicula.imagen} alt={pelicula.titulo} />
      <Content>
        <h3>{pelicula.titulo}</h3>
        <p>{pelicula.categoria} • {pelicula.duracion}</p>
        <Spacer />
        <Button onClick={onClick}>▶ Ver</Button>
      </Content>
    </Card>
  );
};

export default MovieCard;
