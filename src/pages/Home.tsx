import { useState } from "react";
import styled from "styled-components";
import { useMovies } from "../hooks/useMovies";
import MovieCard from "../components/MovieCard";
import { useNavigate } from "react-router-dom";

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

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Home = () => {
  const [busqueda, setBusqueda] = useState("");
  const navigate = useNavigate();

  const { data: peliculas = [], isLoading, error } = useMovies();

  if (isLoading) return <Container><p>Cargando películas...</p></Container>;
  if (error) return <Container><p>Error al cargar las películas</p></Container>;

  const filtradas = peliculas.filter((p) =>
    p.titulo.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <Container>
      <Title>🎬 Proyecto PelisINFO entrega 4!!</Title>
      <Input
        type="text"
        placeholder="Buscar por título..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />

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

      <div style={{ marginTop: "2rem", textAlign: "center" }}>
        <button
          onClick={() => navigate("/crear-pelicula")}
          style={{
            backgroundColor: "#778FF1",
            color: "#111",
            padding: "0.75rem 1.5rem",
            borderRadius: "8px",
            fontWeight: "bold",
            border: "none",
            cursor: "pointer",
            boxShadow: "0 0 10px rgba(119,143,241,0.7)",
            transition: "background-color 0.3s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#5f76d6")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#778FF1")}
        >
          + Crear nueva película
        </button>
      </div>
    </Container>
  );
};

export default Home;
