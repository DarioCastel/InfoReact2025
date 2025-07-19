import { useParams, useNavigate } from "react-router-dom";
import { peliculas } from "../data/peliculas";

const PeliPlay = () => {
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
        <button
          onClick={() => navigate(-1)}
          style={{
            cursor: "pointer",
            marginTop: 20,
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
      </div>
    );
  }

  if (!pelicula.video) {
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
        <h2>Esta película no tiene video disponible</h2>
        <button
          onClick={() => navigate(-1)}
          style={{
            cursor: "pointer",
            marginTop: 20,
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
      </div>
    );
  }

  return (
    <div style={{
      padding: "2rem",
      minHeight: "100vh",
      color: "#fff",
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }}>

      <video
        src={pelicula.video}
        controls
        autoPlay
        style={{ width: "100%", maxWidth: 800, borderRadius: 8, boxShadow: "0 0 15px rgba(119,143,241,0.7)" }}
      />

      <button
        onClick={() => navigate(-1)}
        style={{
          cursor: "pointer",
          marginTop: "1rem",
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
    </div>
  );
};

export default PeliPlay;
