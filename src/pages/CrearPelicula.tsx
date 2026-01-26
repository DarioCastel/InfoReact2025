import { useState } from "react";
import { useCreateMovie } from "../hooks/useMovies";
import { useNavigate } from "react-router-dom";

const CrearPelicula = () => {
  const navigate = useNavigate();


  const { mutate, isLoading, isError, error, isSuccess } = useCreateMovie() as any;

  const [form, setForm] = useState({
    titulo: "",
    categoria: "",
    duracion: "",
    imagen: "",
    descripcion: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.titulo || !form.categoria || !form.duracion || !form.imagen || !form.descripcion) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    const duracionNum = Number(form.duracion);
    if (isNaN(duracionNum) || duracionNum <= 0) {
      alert("Duración debe ser un número positivo.");
      return;
    }

    mutate(
      {
        titulo: form.titulo,
        categoria: form.categoria,
        duracion: duracionNum,
        imagen: form.imagen,
        descripcion: form.descripcion,
      },
      {
        onSuccess: () => {
          alert("Película creada con éxito!");
          navigate("/");
        },
      }
    );
  };

  return (
    <div style={{ padding: "2rem", color: "white", maxWidth: 600, margin: "0 auto" }}>
      <h1 style={{ color: "#778FF1", marginBottom: "1rem" }}>Crear Nueva Película</h1>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <input
          name="titulo"
          placeholder="Título"
          value={form.titulo}
          onChange={handleChange}
          disabled={isLoading}
          style={{ padding: "0.6rem", borderRadius: 8, border: "none", fontSize: 16 }}
        />
        <input
          name="categoria"
          placeholder="Categoría"
          value={form.categoria}
          onChange={handleChange}
          disabled={isLoading}
          style={{ padding: "0.6rem", borderRadius: 8, border: "none", fontSize: 16 }}
        />
        <input
          name="duracion"
          type="number"
          placeholder="Duración (minutos)"
          value={form.duracion}
          onChange={handleChange}
          disabled={isLoading}
          style={{ padding: "0.6rem", borderRadius: 8, border: "none", fontSize: 16 }}
        />
        <input
          name="imagen"
          placeholder="URL imagen"
          value={form.imagen}
          onChange={handleChange}
          disabled={isLoading}
          style={{ padding: "0.6rem", borderRadius: 8, border: "none", fontSize: 16 }}
        />
        <textarea
          name="descripcion"
          placeholder="Descripción"
          value={form.descripcion}
          onChange={handleChange}
          disabled={isLoading}
          rows={4}
          style={{ padding: "0.6rem", borderRadius: 8, border: "none", fontSize: 16 }}
        />
        <button
          type="submit"
          disabled={isLoading}
          style={{
            backgroundColor: "#778FF1",
            color: "#111",
            fontWeight: "bold",
            padding: "0.75rem",
            border: "none",
            borderRadius: 8,
            cursor: "pointer",
            boxShadow: "0 0 10px rgba(119,143,241,0.7)",
            transition: "background-color 0.3s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#5f76d6")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#778FF1")}
        >
          {isLoading ? "Creando..." : "Crear Película"}
        </button>
        {isError && <p style={{ color: "red" }}>Error al crear la película: {error?.message}</p>}
        {isSuccess && <p style={{ color: "lightgreen" }}>Película creada correctamente!</p>}
      </form>
    </div>
  );
};

export default CrearPelicula;
