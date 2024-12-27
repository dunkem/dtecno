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
    >
      <div className="footer-container">
        <p>&copy; 2024 Dtecno. Todos los derechos reservados.</p>
        <ul className="social-links">
          <li><a href="https://www.facebook.com/dtecno" target="_blank" rel="noopener noreferrer">Facebook</a></li>
          <li><a href="https://www.instagram.com/dtecno" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          <li><a href="https://www.twitter.com/dtecno" target="_blank" rel="noopener noreferrer">Twitter</a></li>
        </ul>
      </div>
    </motion.footer>
  );
}

export default Footer;
