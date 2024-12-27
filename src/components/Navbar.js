import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

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
    handleResize(); // Check initial size
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <motion.nav
      className="custom-navbar"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="custom-logo">
        <img src={`${process.env.PUBLIC_URL}/icono%20sin%20fondo.png`} alt="Dtecno Logo" className="custom-logo-image" />
      </div>
      {isMobile && (
        <div className="custom-menu-icon" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
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
            <a href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>
          </motion.li>
        ))}
      </ul>
    </motion.nav>
  );
}

export default Navbar;