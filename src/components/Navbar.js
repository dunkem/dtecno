import React, { useState } from 'react';
import './Navbar.css';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
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
        {['INICIO', 'SERVICIOS', 'PROYECTOS', 'CONTACTO'].map((item, index) => (
          <motion.li
            key={index}
            className="navbar-item"
            whileHover={{ scale: 1.1, color: "#007bff" }}
            transition={{ type: "spring", stiffness: 300 }}
            role="none"
          >
            <a href={`#${item.toLowerCase()}`} onClick={closeMenu} className="navbar-link" role="menuitem" aria-label={`Ir a ${item}`}>
              {item}
            </a>
          </motion.li>
        ))}
      </ul>
    </motion.nav>
  );
}

export default Navbar;