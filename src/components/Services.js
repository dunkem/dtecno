import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaBullhorn, FaTools, FaCheckCircle } from 'react-icons/fa';
import './Services.css';

const servicesList = [
  {
    icon: <FaCode />,
    title: "Desarrollo Web & React",
    desc: "Sitios ultra rápidos con React JS. Diseño moderno, adaptado a móviles y optimizado para SEO.",
    features: ["Landing Pages", "E-commerce", "Web Apps"]
  },
  {
    icon: <FaBullhorn />,
    title: "Meta & Google Ads",
    desc: "Campañas publicitarias que convierten. Maximizamos tu presupuesto para conseguir clientes reales.",
    features: ["Segmentación precisa", "ROI Positivo", "Reportes mensuales"]
  },
  {
    icon: <FaTools />,
    title: "Soporte & WordPress",
    desc: "Mantenimiento de sitios, actualizaciones, seguridad y gestión de contenido en WordPress.",
    features: ["Seguridad", "Backups", "Optimización"]
  }
];

const Services = () => {
  return (
    <section id="servicios" className="services-section">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-subtitle">LO QUE HACEMOS</span>
          <h2>Soluciones <span className="highlight">360°</span></h2>
        </motion.div>

        <div className="services-grid">
          {servicesList.map((item, index) => (
            <motion.div 
              key={index} 
              className="service-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              viewport={{ once: true }}
            >
              <div className="icon-wrapper">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <ul className="feature-list">
                {item.features.map((feat, i) => (
                  <li key={i}><FaCheckCircle className="check-icon"/> {feat}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;