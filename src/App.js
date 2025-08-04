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

// Componente para el botón de WhatsApp con efecto de notificación
const WhatsAppButton = () => {
  const [pulse, setPulse] = React.useState(true);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setPulse(prev => !prev);
    }, 8000); // Pulso cada 8 segundos
    
    return () => clearInterval(interval);
  }, []);

  const handleClick = () => {
    const message = encodeURIComponent("¡Hola DTECNO! Vi su página web y estoy interesado en sus servicios. ¿Podrían ayudarme?");
    window.open(`https://wa.me/1159097342?text=${message}`, '_blank');
  };

  return (
    <div className={`whatsapp-button ${pulse ? 'pulse' : ''}`} onClick={handleClick}>
      <FaWhatsapp size={28} />
      <span className="tooltip">¿Necesitas ayuda?<br/>¡Respondemos al instante!</span>
    </div>
  );
};

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* Navbar optimizada para conversión */}
        <Navbar />
        
        {/* Contenido principal con mejor flujo de conversión */}
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
        
        {/* Footer con más llamados a la acción */}
        <Footer />
        
        {/* Botones flotantes mejorados */}
        <div className="floating-buttons">
          <WhatsAppButton />
          
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