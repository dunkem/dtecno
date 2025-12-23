import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaWhatsapp } from 'react-icons/fa';
import logo from '../components/dtecnologo.png'; // Asegúrate que el logo tenga fondo transparente
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (id) => {
    setIsOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => scrollToSection(id), 100);
    } else {
      scrollToSection(id);
    }
  };

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
          <img src={logo} alt="DTECNO" />
        </Link>

        {/* Desktop Menu */}
        <div className="navbar-desktop">
          <button onClick={() => handleNavigation('inicio')} className="nav-link">Inicio</button>
          <button onClick={() => handleNavigation('servicios')} className="nav-link">Servicios</button>
          <button onClick={() => handleNavigation('proyectos')} className="nav-link">Proyectos</button>
          <Link to="/it-services" className="nav-link it-link">Servicios IT</Link>
          
          <motion.a 
            href="https://wa.me/1159097342" 
            target="_blank"
            className="navbar-cta"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaWhatsapp /> Cotizar Ahora
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <div className="navbar-mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <button onClick={() => handleNavigation('inicio')}>Inicio</button>
            <button onClick={() => handleNavigation('servicios')}>Servicios</button>
            <button onClick={() => handleNavigation('proyectos')}>Proyectos</button>
            <Link to="/it-services" onClick={() => setIsOpen(false)}>Servicios IT</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navbar;