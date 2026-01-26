import { useParams, Link, useNavigate } from "react-router-dom";
import { moviesDB } from "../../MOCKS/movies/db";
import type { Pelicula } from "../../MOCKS/movies/db";
import MovieCard from "../components/MovieCard";

const Categoria = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const peliculasFiltradas = moviesDB.filter(
    (p) => p.categoria.toLowerCase() === id?.toLowerCase()
  );

  return (
    <div style={{ padding: "2rem", color: "#fff", minHeight: "100vh" }}>

      <h1 style={{ textAlign: "center" }}>Categoría: {id}</h1>

      {peliculasFiltradas.length > 0 ? (
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1rem" }}>
          {peliculasFiltradas.map((p: Pelicula) => (
            <MovieCard 
              key={p.id} 
              pelicula={p} 
              onPlayClick={() => navigate(`/pelicula/${p.id}/play`)}
              onImageClick={() => navigate(`/pelicula/${p.id}`)}
            />
          ))}
        </div>
      ) : (
        <p style={{ textAlign: "center", marginTop: "2rem" }}>
          No se encontraron películas en esta categoría.
        </p>
      )}

      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <Link to="/" style={{ color: "#778FF1", textDecoration: "underline" }}>
          ← Volver al inicio
        </Link>
      </div>
    </div>
  );
};

export default Categoria;
