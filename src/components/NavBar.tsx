import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/">Inicio</Link> | <Link to="/buscar">Buscar</Link> |{" "}
        <Link to="/favoritos">Favoritos</Link> |{" "}
        <Link to="/visitados">Visitados</Link>
      </nav>
    );
  }
}
