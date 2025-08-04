import React from 'react';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaChartLine, FaShieldAlt } from 'react-icons/fa';
import './Services.css';

const services = [
  {
    icon: <FaLaptopCode />,
    title: "Desarrollo Web Premium",
    description: "Sitios web rápidos, seguros y optimizados para conversiones con diseño exclusivo.",
    features: [
      "Diseño 100% responsive",
      "SEO integrado",
      "Tiendas online con pagos",
      "Panel administrativo",
      "Backup diario",
      "Soporte 24/7"
    ],
    cta: "Quiero mi web profesional"
  },
  {
    icon: <FaChartLine />,
    title: "Marketing Digital Estratégico",
    description: "Campañas que generan clientes reales con retorno medible.",
    features: [
      "Análisis de competencia",
      "Segmentación avanzada",
      "Landing pages convertibles",
      "Reportes mensuales",
      "Optimización constante",
      "ROI garantizado"
    ],
    cta: "Potenciar mis ventas"
  },
  {
    icon: <FaShieldAlt />,
    title: "Seguridad IT Integral",
    description: "Protección completa para tu infraestructura tecnológica.",
    features: [
      "Antivirus empresarial",
      "Firewall personalizado",
      "Backup en la nube",
      "Monitoreo 24/7",
      "Respuesta inmediata",
      "Auditorías periódicas"
    ],
    cta: "Proteger mi negocio"
  }
];

const Services = () => {
  return (
    <section id="servicios" className="services-section">
      <div className="container">
        <motion.h2 
  className="dtecno-section-title"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
  NUESTROS <span className="dtecno-highlight">SERVICIOS</span>
</motion.h2>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              viewport={{ once: true }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              
              <ul className="features-list">
                {service.features.map((feature, i) => (
                  <li key={i}>
                    <span className="check-icon">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <motion.a
                href={`https://wa.me/1159097342?text=Me interesa el servicio de ${service.title}`}
                className="service-cta"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                {service.cta}
              </motion.a>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="offer-banner"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="offer-content">
            <h3>¿NO ENCUENTRAS LO QUE BUSCAS?</h3>
            <p>Tenemos soluciones personalizadas para cada necesidad</p>
            <motion.a
              href="https://wa.me/1159097342"
              className="offer-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              HABLAR CON UN ASESOR
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;