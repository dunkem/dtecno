import React from 'react';
import './HeroSection.css';
import fondoHero from './fondohero.png'; // Asegúrate de que la ruta sea correcta

const HeroSection = () => {
  const heroStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '80vh',
    padding: '80px 5%',
    position: 'relative',
    overflow: 'hidden',
    background: `url(${fondoHero}) no-repeat center center`,
    backgroundSize: 'cover'
  };

  return (
    <section className="hero-section" style={heroStyle}>
      <div className="hero-overlay"></div>
      <div className="hero-content animate-fade-in">
        <h1>SOLUCIONES TECNOLÓGICAS QUE <span className="highlight">IMPULSAN</span> TU NEGOCIO</h1>
        <p className="subtitle">Expertos en resolver tus problemas informáticos con soluciones rápidas, efectivas y a precios competitivos</p>
        
        <div className="hero-buttons">
          <a href="https://api.whatsapp.com/send/?phone=1159097342&text&type=phone_number&app_absent=0" className="cta-button primary">Solicitar Servicio</a>
          <a href="#services" className="cta-button secondary">Ver Servicios</a>
        </div>
        
        <div className="trust-badges">
          <div className="badge">
            <div className="stars">★★★★★</div>
            <span>4.9/5 en Google</span>
          </div>
          <div className="badge">
            <span>+100</span>
            <span>Clientes satisfechos</span>
          </div>
          <div className="badge">
            <span>24/7</span>
            <span>Soporte técnico</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;