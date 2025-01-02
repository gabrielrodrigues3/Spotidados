import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogoClick = () => {
    setIsMenuOpen(false); // Fecha o menu (caso esteja aberto)
    navigate("/"); // Redireciona para a página inicial (Landing Page)
  };

  return (
    <header className="navbar-header">
      <div className="navbar-container">
        <h2 className="logo" onClick={handleLogoClick} style={{ cursor: "pointer" }}>
          spotidados
        </h2>
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>
        <nav className={`navbar ${isMenuOpen ? "open" : ""}`}>
          <NavLink
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            to="/profile"
            onClick={() => setIsMenuOpen(false)} // Fecha o menu após clicar
          >
            Perfil
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            to="/music"
            onClick={() => setIsMenuOpen(false)} // Fecha o menu após clicar
          >
            Músicas
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            to="/time"
            onClick={() => setIsMenuOpen(false)} // Fecha o menu após clicar
          >
            Tempo
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;

