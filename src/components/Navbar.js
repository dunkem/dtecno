import React, { useState } from 'react';
import './Navbar.css';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleScrollToSection = (section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    closeMenu();
  };

  return (
    <motion.nav
      className="navbar"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      aria-label="Main navigation"
    >
      <div className="navbar-logo" aria-label="Logo de Dtecno">
        <img src={`${process.env.PUBLIC_URL}/icono%20sin%20fondo.png`} alt="Dtecno Logo" className="navbar-logo-image" />
      </div>
      <button 
        className="navbar-menu-icon" 
        onClick={toggleMenu} 
        aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={isOpen}
      >
        {isOpen ? <FaTimes aria-hidden="true" /> : <FaBars aria-hidden="true" />}
      </button>
      <ul className={`navbar-links ${isOpen ? 'open' : ''}`} role="menu">
        <motion.li
          className="navbar-item"
          whileHover={{ scale: 1.1, color: "#007bff" }}
          transition={{ type: "spring", stiffness: 300 }}
          role="none"
        >
          <Link to="/" onClick={() => handleScrollToSection('inicio')} className="navbar-link" role="menuitem" aria-label="Ir a INICIO">
            INICIO
          </Link>
        </motion.li>
        <motion.li
          className="navbar-item"
          whileHover={{ scale: 1.1, color: "#007bff" }}
          transition={{ type: "spring", stiffness: 300 }}
          role="none"
        >
          <Link to="/" onClick={() => handleScrollToSection('servicios')} className="navbar-link" role="menuitem" aria-label="Ir a SERVICIOS">
            SERVICIOS
          </Link>
        </motion.li>
        <motion.li
          className="navbar-item"
          whileHover={{ scale: 1.1, color: "#007bff" }}
          transition={{ type: "spring", stiffness: 300 }}
          role="none"
        >
          <Link to="/" onClick={() => handleScrollToSection('proyectos')} className="navbar-link" role="menuitem" aria-label="Ir a PROYECTOS">
            PROYECTOS
          </Link>
        </motion.li>
        <motion.li
          className="navbar-item"
          whileHover={{ scale: 1.1, color: "#007bff" }}
          transition={{ type: "spring", stiffness: 300 }}
          role="none"
        >
          <Link to="/" onClick={() => handleScrollToSection('contacto')} className="navbar-link" role="menuitem" aria-label="Ir a CONTACTO">
            CONTACTO
          </Link>
        </motion.li>
        <motion.li
          className="navbar-item"
          whileHover={{ scale: 1.1, color: "#007bff" }}
          transition={{ type: "spring", stiffness: 300 }}
          role="none"
        >
          <Link to="/it-services" className="navbar-link" role="menuitem" aria-label="Ir a SERVICIOS INFORMÁTICOS">
            SERVICIOS INFORMÁTICOS
          </Link>
        </motion.li>
      </ul>
    </motion.nav>
  );
}

export default Navbar;
