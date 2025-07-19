import styled from 'styled-components';
import type { Pelicula } from '../data/peliculas';

type Props = {
  pelicula: Pelicula;
  onPlayClick: () => void;    
  onImageClick: () => void;
};

const Card = styled.div`
  background-color: #222;
  color: white;
  border-radius: 12px;
  overflow: hidden;
  width: 220px;
  margin: 1rem;
  box-shadow: 0 0 15px rgba(119, 143, 241, 0.7);
  display: flex;
  flex-direction: column;
  align-items: center;  /* centramos contenido */
  text-align: center;   /* centramos texto */
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  cursor: pointer;
  border-radius: 12px 12px 0 0;
`;

const Content = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 100%;
`;

const Spacer = styled.div`
  flex-grow: 1;
`;

const Button = styled.button`
  margin-top: 1rem;
  background-color: #778FF1;
  border: none;
  color: #111;
  padding: 0.6rem;
  width: 100%;
  cursor: pointer;
  font-weight: bold;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(119, 143, 241, 0.7);
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #5f76d6;
  }
`;

const MovieCard = ({ pelicula, onPlayClick, onImageClick }: Props) => {
  return (
    <Card>
      <Image
        src={pelicula.imagen}
        alt={pelicula.titulo}
        onClick={onImageClick}
      />
      <Content>
        <h3>{pelicula.titulo}</h3>
        <p style={{ fontStyle: "italic", margin: 0 }}>
          {pelicula.categoria} • {pelicula.duracion}
        </p>
        <Spacer />
        <Button onClick={onPlayClick}>▶ Ver</Button>
      </Content>
    </Card>
  );
};

export default MovieCard;
