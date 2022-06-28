import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Favorites from "./routes/Favorites";
import Inicio from "./routes/inicio";
import Search from "./routes/Search";
import Visitados from "./routes/visitados";
import { Detail } from "./routes/Detalle";
import { NavBar } from "./components/NavBar";

export default function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/search" element={<Search />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/visitados" element={<Visitados />} />
          <Route path="/gif" element={<Detail />}>
            <Route path=":gifId" element={<Detail />} />
          </Route>
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}
