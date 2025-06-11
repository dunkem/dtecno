import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaInstagram, FaFacebookF, FaWhatsapp } from 'react-icons/fa';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hola, estoy interesado en los servicios de Dtecno. ¿Podrían brindarme más información?");
    window.open(`https://wa.me/1159097342?text=${message}`, '_blank');
  };

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      aria-label="Main navigation"
    >
      <div className="navbar-container">
        <div className="navbar-logo" aria-label="Logo de Dtecno">
          <img 
            src={`${process.env.PUBLIC_URL}/dtecnologo.png`} 
            alt="Dtecno Logo" 
            className="navbar-logo-image"
          />
        </div>

        <button 
          className="navbar-menu-icon" 
          onClick={toggleMenu} 
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <FaTimes aria-hidden="true" className="icon-close" />
          ) : (
            <FaBars aria-hidden="true" className="icon-open" />
          )}
        </button>

        <div className={`navbar-content ${isOpen ? 'open' : ''}`}>
          <ul className="navbar-links" role="menu">
            {['servicios', 'proyectos'].map((item) => (
              <motion.li
                key={item}
                className="navbar-item"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                role="none"
              >
                <Link 
                  to="/" 
                  onClick={() => handleScrollToSection(item)} 
                  className="navbar-link" 
                  role="menuitem" 
                  aria-label={`Ir a ${item.toUpperCase()}`}
                >
                  {item.toUpperCase()}
                </Link>
              </motion.li>
            ))}
            <motion.li
              className="navbar-item"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              role="none"
            >
              <Link to="/it-services" className="navbar-link" role="menuitem" aria-label="Ir a SERVICIOS INFORMÁTICOS">
                SERVICIOS INFORMÁTICOS
              </Link>
            </motion.li>
          </ul>

          <div className="navbar-actions">
            <div className="social-links">
              <motion.a
                href="https://facebook.com/dtecno_" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="social-icon"
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaFacebookF />
              </motion.a>
              <motion.a
                href="https://www.instagram.com/dtecno_"
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="social-icon"
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaInstagram />
              </motion.a>
            </div>
            
            <motion.button
              onClick={handleWhatsAppClick}
              className="navbar-cta"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
              aria-label="Contactar por WhatsApp"
            >
              <FaWhatsapp style={{ marginRight: '8px' }} />
              CONTÁCTANOS
            </motion.button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar;