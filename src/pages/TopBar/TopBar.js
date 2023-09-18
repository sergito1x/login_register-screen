import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./TopBar.css"; // Importar el archivo de estilos

const TopBar = ({ hideOnPaths }) => {
  const [showTopBar, setShowTopBar] = useState(false);
  const location = useLocation();

  // Verificar si la ruta actual coincide con alguna de las rutas donde la TopBar debe ocultarse
  const shouldHideTopBar = hideOnPaths.some((path) => location.pathname === path);

  // Si shouldHideTopBar es verdadero, no mostramos la TopBar
  if (shouldHideTopBar) {
    return null;
  }

  return (
    <>
      {/* Botón para alternar la visibilidad de la topbar */}
      <button
        className="btn btn-dark d-md-none"
        onClick={() => setShowTopBar(!showTopBar)}
      >
        Toggle TopBar
      </button>

      {/* Topbar */}
      <nav
        className={`navbar navbar-dark bg-dark d-md-flex flex-md-row ${showTopBar ? "" : "d-none"}`}
      >
        <ul className="navbar-nav ml-auto flex-md-row"> {/* Agregamos 'flex-md-row' para distribuir horizontalmente */}
          <li className="nav-item">
            <Link to="/mi-perfil" className="nav-link text-white">
              <span className="titulo">SUPER SISTEMA</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/mi-perfil" className="nav-link text-white">
              <span className="ms-2">Mi Perfil</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/horarios" className="nav-link text-white">
              <span className="ms-2">Horarios</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/citas"} className="nav-link text-white">
              <span className="ms-2">Mis Citas</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/calificaciones" className="nav-link text-white">
              <span className="ms-2">Mis Calificaciones</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/reserva" className="nav-link text-white">
              <span className="ms-2">Reserva Cita</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link text-white">
              <span className="ms-2">Cerrar Sesión</span>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default TopBar;
