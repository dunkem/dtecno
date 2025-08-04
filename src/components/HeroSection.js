import React, { useEffect } from 'react';
import './HeroSection.css';
import heroImage from '../components/fondohero.png';
import { motion } from 'framer-motion';

const HeroSection = () => {
  useEffect(() => {
    // Efecto de máquina de escribir para el título
    const phrases = ["IMPULSAN", "OPTIMIZAN", "TRANSFORMAN"];
    let currentPhrase = 0;
    let currentLetter = 0;
    let isDeleting = false;
    const element = document.querySelector('.typing-effect');
    
    const type = () => {
      const fullText = phrases[currentPhrase];
      
      if (isDeleting) {
        element.textContent = fullText.substring(0, currentLetter - 1);
        currentLetter--;
      } else {
        element.textContent = fullText.substring(0, currentLetter + 1);
        currentLetter++;
      }
      
      if (!isDeleting && currentLetter === fullText.length) {
        isDeleting = true;
        setTimeout(type, 1500);
      } else if (isDeleting && currentLetter === 0) {
        isDeleting = false;
        currentPhrase = (currentPhrase + 1) % phrases.length;
        setTimeout(type, 500);
      } else {
        const speed = isDeleting ? 100 : 150;
        setTimeout(type, speed);
      }
    };
    
    setTimeout(type, 1000);
  }, []);

  return (
    <section className="hero-section" style={{ backgroundImage: `url(${heroImage})` }}>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>
            SOLUCIONES TECNOLÓGICAS QUE <br />
            <span className="typing-effect highlight">IMPULSAN</span> TU NEGOCIO
          </h1>
          <p className="subtitle">
            Más de 100 empresas confían en nosotros. Soluciones a medida con garantía de satisfacción.
          </p>
        </motion.div>

        <div className="hero-cta">
          <motion.a
            href="https://wa.me/1159097342?text=¡Hola DTECNO! Quiero potenciar mi negocio"
            className="cta-button primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            ¡Quiero mi solución YA! →
          </motion.a>
          <a href="#servicios" className="cta-button secondary">
            Ver servicios
          </a>
        </div>

        <div className="trust-badges">
          <motion.div 
            className="badge"
            whileHover={{ y: -5 }}
          >
            <div className="stars">★★★★★</div>
            <span>4.9/5 en Google</span>
          </motion.div>
          <motion.div 
            className="badge"
            whileHover={{ y: -5 }}
          >
            <span>+100</span>
            <span>Clientes satisfechos</span>
          </motion.div>
          <motion.div 
            className="badge"
            whileHover={{ y: -5 }}
          >
            <span>24/7</span>
            <span>Soporte prioritario</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;