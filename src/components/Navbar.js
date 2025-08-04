import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes, FaWhatsapp } from 'react-icons/fa';
import logo from '../components/dtecnologo.png';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll <= 10) {
        setScrolled(false);
      } else if (currentScroll > lastScroll) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      setLastScroll(currentScroll);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScroll]);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("¡Hola DTECNO! Vi su página y necesito ayuda con...");
    window.open(`https://wa.me/1159097342?text=${message}`, '_blank');
    setIsOpen(false);
  };

  const handleNavigation = (sectionId) => {
    if (window.location.pathname === '/') {
      if (sectionId === 'inicio') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const element = document.getElementById(sectionId);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
    setIsOpen(false);
  };

  return (
    <motion.nav 
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={() => window.scrollTo({ top: 0 })}>
          <img src={logo} alt="DTECNO Soluciones Tecnológicas" loading="eager" />
          {/* Se eliminó el span con el texto duplicado */}
        </Link>

        <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
          <button 
            className="nav-link" 
            onClick={() => handleNavigation('inicio')}
          >
            INICIO
          </button>
          <button 
            className="nav-link" 
            onClick={() => handleNavigation('servicios')}
          >
            SERVICIOS
          </button>
          <button 
            className="nav-link" 
            onClick={() => handleNavigation('proyectos')}
          >
            PROYECTOS
          </button>
          <Link 
            to="/it-services" 
            className="nav-link highlight-link"
            onClick={() => setIsOpen(false)}
          >
            IT SERVICES
          </Link>
        </div>

        <div className="navbar-actions">
          <motion.button
            className="whatsapp-cta"
            onClick={handleWhatsAppClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaWhatsapp className="whatsapp-icon" />
            <span>CONTACTO</span>
          </motion.button>

          <button 
            className="menu-toggle" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar;