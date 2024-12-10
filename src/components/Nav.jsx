import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const Nav = () => {
  const location = useLocation(); // Obtiene la ubicación actual

  // Estado para manejar la clase "responsive"
  const [isResponsive, setIsResponsive] = useState(false);

  // Función para alternar la clase "responsive"
  const toggleResponsive = () => {
    setIsResponsive((prevState) => !prevState);
  };

  // Si estamos en "/login", no renderizamos el Nav
  if (location.pathname === "/login") {
    return null;
  }

  return (
    <div className={`topnav ${isResponsive ? "responsive" : ""}`} id="myTopnav">
      <a href="#home" className="active">Cerrar sesión</a>
      <a href="#news">Gestión de equipos</a>
      <a href="#contact">Solicitudes</a>
      <a href="#about">Usuarios</a>
      <a href="#about">Mi perfil</a>
      <a href="javascript:void(0);" className="icon" onClick={toggleResponsive}>
        <i className="fa fa-bars"></i>
      </a>
    </div>
  );
};

export default Nav;