import React from 'react';
import { motion } from 'framer-motion';
import { FaDesktop, FaCode, FaChartLine, FaTools, FaCheckCircle } from 'react-icons/fa';
import './Services.css';

const Services = () => {
  const services = [
    {
      title: "Armado y Reparación de PC",
      description: "PCs a medida optimizadas para gaming, diseño y productividad. Reparación de hardware y software con componentes de alta calidad.",
      icon: <FaDesktop className="service-icon-svg" />,
      features: ["Garantía escrita de 1 año", "Presupuesto sin cargo", "Asesoramiento técnico personalizado", "Limpieza profunda incluida"]
    },
    {
      title: "Desarrollo Web Profesional",
      description: "Sitios web a medida con enfoque en performance, conversiones y posicionamiento SEO.",
      icon: <FaCode className="service-icon-svg" />,
      features: ["Diseño 100% responsive", "Optimización SEO avanzada", "Integración con redes sociales", "Panel de administración fácil de usar"]
    },
    {
      title: "Marketing Digital",
      description: "Campañas estratégicas en Google Ads y Meta Ads para maximizar tu ROI.",
      icon: <FaChartLine className="service-icon-svg" />,
      features: ["Segmentación por buyer persona", "Reportes mensuales detallados", "A/B testing constante", "Optimización semanal de campañas"]
    },
    {
      title: "Servicio Técnico Integral",
      description: "Soporte técnico remoto y presencial con respuesta inmediata las 24/7.",
      icon: <FaTools className="service-icon-svg" />,
      features: ["Respuesta en menos de 2 horas", "Técnicos certificados", "Solución garantizada o no pagas", "Planes mensuales para empresas"]
    }
  ];

  const cardVariants = {
    offscreen: {
      y: 50,
      opacity: 0
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };

  return (
    <section id="services" className="services-section">
      <div className="section-header">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          NUESTROS <span className="highlight">SERVICIOS</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="section-subtitle"
        >
          Soluciones tecnológicas completas diseñadas para impulsar tu negocio
        </motion.p>
      </div>
      
      <div className="services-grid">
        {services.map((service, index) => (
          <motion.div 
            key={index}
            className="service-card"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, margin: "-50px" }}
            variants={cardVariants}
            transition={{ delay: index * 0.1 }}
          >
            <div className="service-icon-circle">
              {service.icon}
            </div>
            <h3>{service.title}</h3>
            <p className="service-description">{service.description}</p>
            <ul className="service-features">
              {service.features.map((feature, i) => (
                <li key={i}>
                  <FaCheckCircle className="feature-icon" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <motion.a 
              href="#contact" 
              className="service-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Más información
            </motion.a>
          </motion.div>
        ))}
      </div>
      
      <motion.div 
        className="offer-banner"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="offer-content">
          <h3>¡PLANES EMPRESARIALES CON DESCUENTO!</h3>
          <p>Contrata nuestro <strong>servicio técnico anual</strong> y obtén un <strong>30% de descuento</strong> + mantenimiento preventivo mensual</p>
          <motion.a 
            href="#contact" 
            className="offer-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Solicitar Presupuesto
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default Services;