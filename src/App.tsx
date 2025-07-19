import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Categoria from "./pages/Categoria";
import Pelicula from "./pages/Pelicula";
import PeliPlay from "./pages/PeliPlay";
import NotFound from "./pages/Notfound"; 
import Favoritos from "./pages/Favoritos";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/categoria/:id" element={<Categoria />} />

        <Route path="/pelicula/:id" element={<Pelicula />} />

        <Route path="/pelicula/:id/play" element={<PeliPlay />} />

        <Route path="/favoritos" element={<Favoritos />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
