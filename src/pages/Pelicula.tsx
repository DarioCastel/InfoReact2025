import { useParams, Link, useNavigate } from "react-router-dom";
import { peliculas } from "../data/peliculas";

const Pelicula = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const pelicula = peliculas.find((p) => p.id === id);

  if (!pelicula) {
    return (
      <div style={{
        padding: "2rem",
        color: "#fff",
        background: "#111",
        minHeight: "100vh",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}>
        <h2>Película no encontrada</h2>
        <Link to="/" style={{ color: "#778FF1", textDecoration: "underline", marginTop: 20 }}>Volver al inicio</Link>
      </div>
    );
  }

  return (
    <div style={{
      padding: "2rem",
      color: "#fff",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center"
    }}>
      <button
        onClick={() => navigate(-1)}
        style={{
          marginBottom: "2rem",
          cursor: "pointer",
          background: "none",
          border: "1px solid #778FF1",
          color: "#778FF1",
          padding: "0.5rem 1.5rem",
          borderRadius: "6px",
          fontSize: "1rem"
        }}
      >
        ← Volver
      </button>

      {pelicula.imagen && (
        <img
          src={pelicula.imagen}
          alt={pelicula.titulo}
          style={{
            maxWidth: "400px",
            width: "100%",
            borderRadius: "12px",
            marginBottom: "1.5rem",
            boxShadow: "0 0 15px rgba(119,143,241,0.7)"
          }}
        />
      )}

      <h1 style={{ marginBottom: "0.5rem" }}>{pelicula.titulo}</h1>
      <p style={{ fontStyle: "italic", fontSize: "1.1rem", marginBottom: "0.25rem" }}>
        {pelicula.categoria} • {pelicula.duracion}
      </p>
      <p style={{ maxWidth: "600px", lineHeight: "1.6", marginTop: "1rem" }}>
        {pelicula.descripcion}
      </p>

      <button
        onClick={() => navigate(`/pelicula/${pelicula.id}/play`)}
        style={{
          marginTop: "3rem",
          cursor: "pointer",
          backgroundColor: "#778FF1",
          color: "#111",
          padding: "0.75rem 2rem",
          border: "none",
          borderRadius: "8px",
          fontSize: "1rem",
          fontWeight: "bold",
          boxShadow: "0 0 10px rgba(119,143,241,0.7)",
          transition: "background-color 0.3s ease"
        }}
        onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#5f76d6")}
        onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#778FF1")}
      >
        Reproducir película
      </button>
    </div>
  );
};

export default Pelicula;
