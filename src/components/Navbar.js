import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaWhatsapp } from 'react-icons/fa';
import logo from '../components/dtecnologo.png'; // Asegúrate que la ruta al logo sea correcta
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Manejo del scroll para cambiar el fondo del navbar
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Evitar scroll cuando el menú móvil está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  // Función para navegar entre secciones o rutas
  const handleNavigation = (id) => {
    setIsOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => scrollToSection(id), 100);
    } else {
      scrollToSection(id);
    }
  };

  // Función auxiliar para el scroll suave
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    else window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.nav 
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={() => window.scrollTo(0,0)}>
          <img src={logo} alt="DTECNO Soluciones Digitales" />
        </Link>

        {/* Menú de Escritorio */}
        <div className="navbar-desktop">
          <button onClick={() => handleNavigation('inicio')} className="nav-link">Inicio</button>
          <button onClick={() => handleNavigation('servicios')} className="nav-link">Servicios</button>
          <button onClick={() => handleNavigation('proyectos')} className="nav-link">Proyectos</button>
          <Link to="/it-services" className="nav-link it-link">Servicios IT</Link>
          
          <motion.a 
            href="https://wa.me/1159097342" 
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-cta"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaWhatsapp /> Cotizar Ahora
          </motion.a>
        </div>

        {/* Botón Hamburguesa para Móvil */}
        <div className="navbar-mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
          <FaBars />
        </div>
      </div>

      {/* Nuevo Menú Móvil de Pantalla Completa (Overlay) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="mobile-menu-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Botón de cerrar dentro del overlay */}
            <button className="close-menu-btn" onClick={() => setIsOpen(false)}>
               <FaTimes />
            </button>

            <motion.div 
               className="mobile-links-container"
               initial={{ y: 50, opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               transition={{ delay: 0.2, duration: 0.4 }}
            >
              <button onClick={() => handleNavigation('inicio')} className="mobile-nav-link">Inicio</button>
              <button onClick={() => handleNavigation('servicios')} className="mobile-nav-link">Servicios</button>
              <button onClick={() => handleNavigation('proyectos')} className="mobile-nav-link">Proyectos</button>
              <Link to="/it-services" onClick={() => setIsOpen(false)} className="mobile-nav-link highlight">Servicios IT</Link>
              
              <a href="https://wa.me/1159097342" className="mobile-cta-btn">
                 <FaWhatsapp /> Cotizar Ahora
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navbar;