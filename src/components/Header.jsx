import React from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import Isologo from "../assets/img/IsologoFinal.svg";

function Header() {
  const location = useLocation();

  const links = [
    { path: "/", label: "Inicio" },
    { path: "/institucional", label: "Sobre mí" },
    { path: "/servicios", label: "Servicios a pacientes" },
    { path: "/tienda", label: "Tienda" },
  ];

  return (
    <header>
      <div className="header-superior">
        <div className="isologo">
          <img src={Isologo} alt="Logo" />
        </div>
        <div className="titulo">
          <span className="nombreSitio">Alquimia Femenina</span>
        </div>
      </div>

      <nav>
        {location.pathname === "/formulario" ? (
          <Link to="/servicios" className="volver">
            Volver
          </Link>
        ) : (
          links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) => (isActive ? "activo" : "")}
            >
              {link.label}
            </NavLink>
          ))
        )}
      </nav>
    </header>
  );
}

export default Header;
