import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
// Aquí borramos los iconos que no se usaban para limpiar el error
import { FaDesktop, FaServer, FaShieldVirus, FaPhoneAlt } from 'react-icons/fa';
import './ItservicesPage.css';

const services = [
  {
    icon: <FaDesktop />,
    title: "Reparación PC & Notebooks",
    description: "Diagnóstico preciso y reparación de hardware/software.",
    details: ["Cambio de componentes", "Limpieza física", "Instalación Windows/Office", "Optimización de velocidad"],
    price: "Diagnóstico GRATIS"
  },
  {
    icon: <FaServer />,
    title: "Infraestructura & Redes",
    description: "Cableado estructurado y configuración de servidores.",
    details: ["Configuración Mikrotik/Cisco", "Servidores Windows/Linux", "Wi-Fi Empresarial", "Racks de comunicaciones"],
    price: "Presupuesto a medida"
  },
  {
    icon: <FaShieldVirus />,
    title: "Ciberseguridad Pyme",
    description: "Protege los datos de tu empresa contra ataques.",
    details: ["Firewall perimetral", "Antivirus corporativo", "Copias de seguridad (Backup)", "Recuperación de datos"],
    price: "Planes mensuales"
  }
];

const ItservicesPage = () => {
  return (
    <main className="itservices-page">
      <Helmet>
        <title>Servicios IT y Soporte Técnico | DTECNO</title>
        <meta name="description" content="Soporte técnico especializado para empresas y particulares. Reparación de PC, redes, servidores y seguridad informática en Buenos Aires." />
      </Helmet>

      {/* Hero Banner IT */}
      <section className="it-hero">
        <div className="it-hero-content">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }}
          >
            SOPORTE TÉCNICO <span className="highlight">ELITE</span>
          </motion.h1>
          <p>Tu departamento de sistemas externo. Resolvemos problemas, prevenimos fallas.</p>
          <motion.a 
            href="https://wa.me/1159097342?text=Tengo%20una%20urgencia%20técnica" 
            className="emergency-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaPhoneAlt /> URGENCIA TÉCNICA 24/7
          </motion.a>
        </div>
      </section>

      {/* Grid de Servicios */}
      <section className="it-services-grid container">
        {services.map((service, index) => (
          <motion.div 
            key={index}
            className="it-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="it-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p className="it-desc">{service.description}</p>
            <ul className="it-details">
              {service.details.map((det, i) => (
                <li key={i}>• {det}</li>
              ))}
            </ul>
            <div className="it-price">{service.price}</div>
            <a href="https://wa.me/1159097342" className="it-btn">Solicitar</a>
          </motion.div>
        ))}
      </section>

      {/* Banner de Garantía */}
      <section className="guarantee-banner">
        <FaShieldVirus size={40} style={{color: '#00d2ff'}} />
        <div>
          <h3>Garantía DTECNO</h3>
          <p>Todos nuestros trabajos cuentan con 90 días de garantía escrita.</p>
        </div>
      </section>
    </main>
  );
};

export default ItservicesPage;