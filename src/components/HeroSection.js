import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation'; // npm install react-type-animation
import heroImage from '../components/fondohero.png';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section id="inicio" className="hero-section" style={{ backgroundImage: `url(${heroImage})` }}>
      {/* Overlay oscuro para legibilidad */}
      <div className="hero-overlay"></div>
      
      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="hero-badge">AGENCIA DIGITAL FREELANCE</span>
          <h1>
            TRANSFORMAMOS IDEAS EN <br />
            <span className="gradient-text">
              <TypeAnimation
                sequence={[
                  'VENTAS REALES', 2000,
                  'SITIOS WEB MODERNOS', 2000,
                  'EXPERIENCIAS ÚNICAS', 2000
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </span>
          </h1>
          <p className="hero-subtitle">
            Especialistas en <strong>React, WordPress y Google Ads</strong>. 
            Ayudamos a empresas de todos los rubros a escalar sus ventas.
          </p>
        </motion.div>

        <motion.div 
          className="hero-buttons"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <a href="https://wa.me/1159097342?text=Quiero%20una%20web%20moderna" target="_blank" rel="noreferrer" className="cta-button primary">
            🚀 Empezar Proyecto
          </a>
          <a href="#proyectos" className="cta-button secondary">
            Ver Portafolio
          </a>
        </motion.div>

        <div className="hero-stats">
          <div className="stat">
            <h3>+20</h3>
            <p>Proyectos Web</p>
          </div>
          <div className="stat separator"></div>
          <div className="stat">
            <h3>100%</h3>
            <p>Clientes Satisfechos</p>
          </div>
          <div className="stat separator"></div>
          <div className="stat">
            <h3>24/7</h3>
            <p>Soporte IT</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;