import { useState } from "react";
import { peliculas } from "../data/peliculas";
import MovieCard from "../components/MovieCard";

const categorias = ["Todas", ...new Set(peliculas.map((p) => p.categoria))];

const App = () => {
  const [busqueda, setBusqueda] = useState("");
  const [categoria, setCategoria] = useState("Todas");
  const [videoSeleccionado, setVideoSeleccionado] = useState<string | null>(null);

  const peliculasFiltradas = peliculas.filter((p) => {
    const coincideTitulo = p.titulo.toLowerCase().includes(busqueda.toLowerCase());
    const coincideCategoria = categoria === "Todas" || p.categoria === categoria;
    return coincideTitulo && coincideCategoria;
  });

  return (
    <div className="app-container" style={{ padding: "2rem", color: "#fff", background: "#111", minHeight: "100vh" }}>
      <h1 style={{ textAlign: "center" }}>Proyecto pelisINFO Entrega N2</h1>

      <div style={{ display: "flex", gap: "1rem", marginBottom: "2rem", justifyContent: "center" }}>
        <input
          type="text"
          placeholder="Buscar por título..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
        <select value={categoria} onChange={(e) => setCategoria(e.target.value)}>
          {categorias.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {peliculasFiltradas.map((p) => (
          <MovieCard key={p.id} pelicula={p} onClick={() => setVideoSeleccionado(p.video)} />
        ))}
      </div>

      {videoSeleccionado && (
        <div style={{
          position: "fixed",
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: "rgba(0,0,0,0.8)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1000
        }}>
          <div style={{ position: "relative", background: "#000", padding: 20 }}>
            <button
  onClick={() => setVideoSeleccionado(null)}
  style={{
    position: "absolute",
    top: 10,
    right: 10,
    background: "transparent",
    border: "none",
    color: "white",
    fontSize: "1.8rem",
    cursor: "pointer",
    transition: "color 0.3s ease",
    padding: 0,
    lineHeight: 1,
    zIndex: 1100,
  }}
  aria-label="Cerrar video"
  onMouseEnter={e => (e.currentTarget.style.color = "#e50914")}
  onMouseLeave={e => (e.currentTarget.style.color = "white")}
>
  X
</button>
            <video src={videoSeleccionado} controls autoPlay style={{ width: "100%", maxWidth: 800 }} />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
