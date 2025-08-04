import React from 'react';
import { FaWhatsapp, FaFacebook, FaInstagram } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h3>DTECNO</h3>
          <p>Soluciones tecnológicas que impulsan tu negocio</p>
          <div className="footer-social">
            <a href="https://facebook.com/dtecno_" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="https://instagram.com/dtecno_" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://wa.me/1159097342" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp />
            </a>
          </div>
        </div>
        
        <div className="footer-links">
          <div className="links-column">
            <h4>Servicios</h4>
            <ul>
              <li><a href="#servicios">Reparación de PCs</a></li>
              <li><a href="#servicios">Desarrollo Web</a></li>
              <li><a href="#servicios">Marketing Digital</a></li>
            </ul>
          </div>
          
          <div className="links-column">
            <h4>Empresa</h4>
            <ul>
              <li><a href="#proyectos">Proyectos</a></li>
              <li><a href="#contacto">Contacto</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-contact">
          <h4>Contacto Directo</h4>
          <a href="https://wa.me/1159097342" className="whatsapp-link">
            <FaWhatsapp /> 11 5909-7342
          </a>
          <p>Lunes a Sábados de 9:00 a 20:00</p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} DTECNO - Todos los derechos reservados</p>
      </div>
    </footer>
  );
};

export default Footer;