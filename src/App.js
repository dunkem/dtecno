import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { FaWhatsapp, FaFacebook, FaInstagram } from 'react-icons/fa';
import './App.css';

function App() {
  const appStyle = {
    background: `url(${process.env.PUBLIC_URL + '/portada.jpg'}) no-repeat center center fixed`,
    backgroundSize: 'cover',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column'
  };

  const whatsappButtonStyle = {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    background: '#25D366',
    color: 'white',
    borderRadius: '50%',
    width: '60px',
    height: '60px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    transition: 'transform 0.3s, background-color 0.3s',
    zIndex: '1000',
  };

  const whatsappIconStyle = {
    width: '30px',
    height: '30px',
  };

  const socialMediaStyle = {
    position: 'fixed',
    bottom: '100px',
    right: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  };

  return (
    <div className="App" style={appStyle}>
      <Navbar />
      <HeroSection />
      <Services />
      <Projects />
      <Contact />
      <Footer />
      <a
        href="https://wa.me/1159097342"
        style={whatsappButtonStyle}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={(e) => e.currentTarget.style.background = '#128C7E'}
        onMouseLeave={(e) => e.currentTarget.style.background = '#25D366'}
        aria-label="Contactar por WhatsApp"
      >
        <FaWhatsapp style={whatsappIconStyle} />
      </a>
      <div style={socialMediaStyle}>
        <a href="https://facebook.com/dtecno1" target="_blank" rel="noopener noreferrer" style={{ color: '#3b5998' }} aria-label="Ir a Facebook">
          <FaFacebook size={30} />
        </a>
        <a href="https://www.instagram.com/dtecno1" target="_blank" rel="noopener noreferrer" style={{ color: '#C13584' }} aria-label="Ir a Instagram">
          <FaInstagram size={30} />
        </a>
      </div>
    </div>
  );
}

export default App;