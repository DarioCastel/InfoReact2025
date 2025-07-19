import { Link } from "react-router-dom";

const NotFound = () => (
  <div style={{ padding: "2rem", color: "#fff", minHeight: "100vh", textAlign: "center" }}>
    <h1>404 - Página no encontrada</h1>
    <Link to="/" style={{ color: "#778FF1", textDecoration: "underline" }}>
      Volver al inicio
    </Link>
  </div>
);

export default NotFound;
