import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/NavBar";
import Favoritos from "./pages/favoritos";
import Inicio from "./pages/inicio";
import Buscar from "./pages/buscar";
import Visitados from "./pages/visitados";

export default function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/buscar" element={<Buscar />} />
          <Route path="/favoritos" element={<Favoritos />} />
          <Route path="/visitados" element={<Visitados />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}
