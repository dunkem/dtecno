import React from 'react';
import './Footer.css';
import { motion } from 'framer-motion';

function Footer() {
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      aria-label="Pie de página"
    >
      <div className="footer-container">
        <p>&copy; 2024 Dtecno. Todos los derechos reservados.</p>
        <ul className="social-links" aria-label="Enlaces a redes sociales">
          <li>
            <a href="https://www.facebook.com/dtecno1" target="_blank" rel="noopener noreferrer" aria-label="Facebook de Dtecno">
              Facebook
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/dtecno1" target="_blank" rel="noopener noreferrer" aria-label="Instagram de Dtecno">
              Instagram
            </a>
          </li>
        </ul>
      </div>
    </motion.footer>
  );
}

export default Footer;