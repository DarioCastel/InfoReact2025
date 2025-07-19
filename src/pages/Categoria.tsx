import { useParams, Link } from "react-router-dom";
import { peliculas } from "../data/peliculas";
import MovieCard from "../components/MovieCard";

const Categoria = () => {
  const { id } = useParams();

  const peliculasFiltradas = peliculas.filter(
    (p) => p.categoria.toLowerCase() === id?.toLowerCase()
  );

  return (
    <div style={{ padding: "2rem", color: "#fff", minHeight: "100vh" }}>

      <h1 style={{ textAlign: "center" }}>Categoría: {id}</h1>

      {peliculasFiltradas.length > 0 ? (
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1rem" }}>
          {peliculasFiltradas.map((p) => (
            <MovieCard key={p.id} pelicula={p} />
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
