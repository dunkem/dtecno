import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={`${process.env.PUBLIC_URL}/icono%20sin%20fondo.png`} alt="Dtecno Logo" className="logo-image" />
      </div>
      <ul className="nav-links">
        <li><a href="#hero">Inicio</a></li>
        <li><a href="#services">Servicios</a></li>
        <li><a href="#projects">Proyectos</a></li>
        <li><a href="#contact">Contacto</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
