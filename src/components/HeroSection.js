import React from 'react';
import { motion } from 'framer-motion';
import './HeroSection.css';

function HeroSection() {
  return (
    <section className="hero" id="hero">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>Desarrollo de Páginas Web Modernas</h1>
        <p>Diseños atractivos y funcionales que destacan en el mercado.</p>
        <button className="cta-button">Descubre Más</button>
      </motion.div>
    </section>
  );
}

export default HeroSection;
