import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content animate-fade-in">
        <h1>SOLUCIONES TECNOLÓGICAS QUE <span className="highlight">IMPULSAN</span> TU NEGOCIO</h1>
        <p className="subtitle">Expertos en resolver tus problemas informáticos con soluciones rápidas, efectivas y a precios competitivos</p>
        
        <div className="hero-buttons">
          <a href="#contact" className="cta-button primary">Solicitar Servicio</a>
          <a href="#services" className="cta-button secondary">Ver Servicios</a>
        </div>
        
        <div className="trust-badges">
          <div className="badge">
            <div className="stars">
              {[...Array(5)].map((_, i) => <span key={i}>★</span>)}
            </div>
            <span>4.9/5 en Google</span>
          </div>
          <div className="badge">
            <span>+1000</span>
            <span>Clientes satisfechos</span>
          </div>
          <div className="badge">
            <span>24/7</span>
            <span>Soporte técnico</span>
          </div>
        </div>
      </div>
      
      <div className="hero-image animate-fade-in delay-100">
        <img src="/hero.jpg" alt="Servicios tecnológicos" />
      </div>
    </section>
  );
};

export default HeroSection;