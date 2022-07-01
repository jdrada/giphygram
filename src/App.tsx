import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import Search from "./pages/Search";
import GifDetail from "./pages/GifDetail";
import Viewed from "./pages/Viewed";

export default function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/viewed" element={<Viewed />} />
          <Route path="/gif-detail/:gifId" element={<GifDetail />}></Route>
          <Route path="*" element={<Navigate replace to="/home" />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}
