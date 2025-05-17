import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3>Servicios</h3>
          <ul>
            <li><a href="#services">Armado y Reparación de PC</a></li>
            <li><a href="#services">Desarrollo Web</a></li>
            <li><a href="#services">Marketing Digital</a></li>
            <li><a href="#services">Servicio Técnico</a></li>
          </ul>
        </div>
        
        <div className="footer-column">
          <h3>Empresa</h3>
          <ul>
            <li><a href="#about">Sobre Nosotros</a></li>
            <li><a href="#testimonials">Testimonios</a></li>
            <li><a href="#contact">Contacto</a></li>
            <li><a href="#blog">Blog</a></li>
          </ul>
        </div>
        
        <div className="footer-column">
          <h3>Legal</h3>
          <ul>
            <li><a href="#privacy">Política de Privacidad</a></li>
            <li><a href="#terms">Términos y Condiciones</a></li>
            <li><a href="#cookies">Política de Cookies</a></li>
          </ul>
        </div>
        
        <div className="footer-column">
          <h3>Contacto</h3>
          <ul>
            <li>11 5909-7342</li>
            <li>dtecno@gmail.com</li>
            <li>Buenos Aires, Argentina</li>
          </ul>
          <div className="social-links">
            <a href="https://facebook.com/dtecno1" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://instagram.com/dtecno1" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://wa.me/1159097342" target="_blank" rel="noopener noreferrer">WhatsApp</a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Dtecno. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;