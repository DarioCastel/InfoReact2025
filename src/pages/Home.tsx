import { useState } from "react";
import styled from "styled-components";
import { peliculas } from "../data/peliculas";
import MovieCard from "../components/MovieCard";
import { useNavigate } from "react-router-dom";

const categorias = ["Todas", ...new Set(peliculas.map((p) => p.categoria))];

const Container = styled.div`
  text-align: center;
  padding: 2rem;
  color: white;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #778FF1;
`;

const Input = styled.input`
  padding: 0.6rem;
  border-radius: 8px;
  border: none;
  width: 300px;
  margin-bottom: 1rem;
  font-size: 1rem;
  text-align: center;
`;

const Select = styled.select`
  padding: 0.5rem;
  border-radius: 8px;
  margin-left: 1rem;
  font-size: 1rem;
`;

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Home = () => {
  const [busqueda, setBusqueda] = useState("");
  const [categoria, setCategoria] = useState("Todas");
  const navigate = useNavigate();

  const filtradas = peliculas.filter((p) =>
    (categoria === "Todas" || p.categoria === categoria) &&
    p.titulo.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <Container>
      <Title>🎬 Proyecto PelisINFO entrega 3!!</Title>
      <Input
        type="text"
        placeholder="Buscar por título..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />
      <Select value={categoria} onChange={(e) => setCategoria(e.target.value)}>
        {categorias.map((c) => (
          <option key={c}>{c}</option>
        ))}
      </Select>

      <Grid>
        {filtradas.map((p) => (
          <MovieCard
            key={p.id}
            pelicula={p}
            onPlayClick={() => navigate(`/pelicula/${p.id}/play`)}
            onImageClick={() => navigate(`/pelicula/${p.id}`)}
          />
        ))}
      </Grid>
    </Container>
  );
};

export default Home;
