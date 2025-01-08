import React from 'react';
import { motion } from 'framer-motion';
import './HeroSection.css';

function HeroSection() {
  return (
    <section className="hero section" id="inicio" aria-label="Sección de héroe">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="text-content">
          <h1>Transforma Tu Presencia en Línea</h1>
          <p>Impulsamos tu negocio con sitios web que atraen, convierten y destacan en el mercado.</p>
          <ul className="hero-points">
            <li>💻 <strong>Diseño Web Profesional:</strong> Creados desde cero, sin plantillas.</li>
            <li>🎯 <strong>Garantía de Satisfacción:</strong> Nuestro compromiso es que estés 100% satisfecho.</li>
            <li>✨ <strong>Orgullo en Tu Página Web:</strong> Te sentirás orgulloso de tu presencia en línea.</li>
            <li>📞 <strong>Comunícate por WhatsApp:</strong> Estamos aquí para ayudarte en cada paso.</li>
          </ul>
          <motion.button 
            className="cta-button"
            whileHover={{ scale: 1.1, backgroundColor: "#0056b3" }}
            transition={{ type: "spring", stiffness: 300 }}
            onClick={() => window.location.href = '#contacto'}
            aria-label="Descubre más sobre nuestros servicios"
          >
            Descubre Más
          </motion.button>
        </div>
        <div className="image-content">
          <img 
            src={`${process.env.PUBLIC_URL}/hero.jpg`} 
            alt="Diseño web moderno y atractivo" 
            className="hero-image large-image" 
            loading="lazy" // Mejora el rendimiento al cargar la imagen
          />
        </div>
      </motion.div>
    </section>
  );
}

export default HeroSection;