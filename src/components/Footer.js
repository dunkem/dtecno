import React from 'react';
import { FaHeart, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h2>DTECNO</h2>
          <p>Llevamos tu negocio al futuro digital.</p>
        </div>
        <div className="footer-links">
          <h4>Servicios</h4>
          <a href="#servicios">Desarrollo Web</a>
          <a href="#servicios">Marketing Ads</a>
          <a href="/it-services">Servicios IT</a>
        </div>
        <div className="footer-contact">
          <h4>Contacto</h4>
          <a href="https://wa.me/1159097342"><FaWhatsapp /> 11 5909-7342</a>
          <a href="mailto:info@dtecno.com.ar"><FaEnvelope /> info@dtecno.com.ar</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Hecho con <FaHeart style={{color:'red'}}/> y React por DTECNO. © {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
};

export default Footer;