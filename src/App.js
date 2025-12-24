import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { FaWhatsapp, FaFacebook, FaInstagram } from 'react-icons/fa';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import TechStack from './components/TechStack';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ItservicesPage from './components/ItservicesPage';
import './App.css';

// Componente para el botón de WhatsApp (Optimizado)
const WhatsAppButton = () => {
  const [pulse, setPulse] = React.useState(true);

  React.useEffect(() => {
    const interval = setInterval(() => setPulse(p => !p), 4000);
    return () => clearInterval(interval);
  }, []);

  const handleClick = () => {
    const message = encodeURIComponent("¡Hola DTECNO! Vi su web y quiero impulsar mi negocio. 🚀");
    window.open(`https://wa.me/1159097342?text=${message}`, '_blank');
  };

  return (
    <div className={`whatsapp-button ${pulse ? 'pulse' : ''}`} onClick={handleClick}>
      <FaWhatsapp size={32} />
      <span className="tooltip">¿Dudas? Respondemos YA ⚡</span>
    </div>
  );
};

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <HeroSection />
                <TechStack />
                <Services />
                <Projects />
                <Contact />
              </>
            } />
            <Route path="/it-services" element={<ItservicesPage />} />
          </Routes>
        </main>
        <Footer />
        
        <div className="floating-buttons">
          <WhatsAppButton />
          <div className="social-buttons">
            <a href="https://facebook.com/dtecno_" target="_blank" rel="noreferrer" aria-label="Facebook">
              <FaFacebook size={22} />
            </a>
            <a href="https://www.instagram.com/dtecno_" target="_blank" rel="noreferrer" aria-label="Instagram">
              <FaInstagram size={22} />
            </a>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;