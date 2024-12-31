import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <motion.nav
      className="custom-navbar"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      aria-label="Navegación principal"
    >
      <div className="custom-logo">
        <img src={`${process.env.PUBLIC_URL}/icono%20sin%20fondo.png`} alt="Logo de Dtecno" className="custom-logo-image" />
      </div>
      {isMobile && (
        <div className="custom-menu-icon" onClick={toggleMenu} aria-label="Abrir menú" role="button">
          {isOpen ? <FaTimes aria-hidden="true" /> : <FaBars aria-hidden="true" />}
        </div>
      )}
      <ul className={`custom-nav-links ${isOpen ? 'open' : ''}`}>
        {['INICIO', 'SERVICIOS', 'PROYECTOS', 'CONTACTO'].map((item, index) => (
          <motion.li
            key={index}
            className="custom-nav-item"
            whileHover={{ scale: 1.1, color: "#007bff" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <a href={`#${item.toLowerCase()}`} onClick={closeMenu} aria-label={`Ir a ${item}`}>
              {item}
            </a>
          </motion.li>
        ))}
      </ul>
    </motion.nav>
  );
}

export default Navbar;