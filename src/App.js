import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { FaWhatsapp, FaFacebook, FaInstagram } from 'react-icons/fa';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ItservicesPage from './components/ItservicesPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* Navbar moderna y tecnológica */}
        <Navbar />
        
        {/* Contenido principal */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={
              <>
                <HeroSection />
                <Services />
                <Projects />
                <Contact />
              </>
            } />
            <Route path="/it-services" element={<ItservicesPage />} />
          </Routes>
        </main>
        
        {/* Footer completo */}
        <Footer />
        
        {/* Botones flotantes */}
        <div className="floating-buttons">
          <a
            href="https://wa.me/1159097342"
            className="whatsapp-button"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contactar por WhatsApp"
          >
            <FaWhatsapp size={24} />
            <span className="tooltip">¿Necesitas ayuda?</span>
          </a>
          
          <div className="social-buttons">
            <a
              href="https://facebook.com/dtecno_"
              className="social-button facebook"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ir a Facebook"
            >
              <FaFacebook size={20} />
            </a>
            <a
              href="https://www.instagram.com/dtecno_"
              className="social-button instagram"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ir a Instagram"
            >
              <FaInstagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;