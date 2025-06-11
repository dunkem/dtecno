import React from 'react';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaChartLine, FaTools } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './Services.css';

const Services = () => {
  const navigate = useNavigate();

  const handleServiceClick = (serviceId) => {
    navigate(`/servicios-it#${serviceId}`);
  };

  const services = [
    {
      id: "desarrollo-web",
      title: "Desarrollo Web Profesional",
      description: "Creamos sitios web de alto rendimiento optimizados para conversiones y posicionamiento SEO, con diseños modernos y adaptables a todos los dispositivos.",
      icon: <FaLaptopCode className="service-icon-svg" />,
      features: [
        "Diseño 100% responsive",
        "Optimización SEO avanzada",
        "Tiendas online con pasarelas de pago",
        "Integración con redes sociales",
        "Panel de administración intuitivo",
        "Rendimiento ultra rápido"
      ],
      buttonText: "VER SERVICIOS WEB"
    },
    {
      id: "marketing-digital",
      title: "Potenciamiento Digital",
      description: "Campañas estratégicas en Google Ads y Meta Ads para maximizar tu visibilidad y conversiones, con seguimiento constante y optimización.",
      icon: <FaChartLine className="service-icon-svg" />,
      features: [
        "Auditoría digital gratuita",
        "Segmentación por buyer persona",
        "Reportes mensuales detallados",
        "A/B testing constante",
        "Optimización semanal",
        "Retorno de inversión medible"
      ],
      buttonText: "POTENCIAR MI NEGOCIO"
    },
    {
      id: "servicio-tecnico",
      title: "Servicio Técnico Integral",
      description: "Soporte técnico completo para empresas y particulares, con respuesta inmediata y soluciones garantizadas para todos tus equipos informáticos.",
      icon: <FaTools className="service-icon-svg" />,
      features: [
        "Reparación de hardware y software",
        "Armado de PCs a medida",
        "Mantenimiento preventivo",
        "Respuesta en menos de 2 horas",
        "Técnicos certificados",
        "Planes mensuales para empresas"
      ],
      buttonText: "SOLICITAR SERVICIO TÉCNICO"
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
    <section id="services" className="dtecno-services-section">
      <div className="dtecno-container">
        <div className="dtecno-section-header">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="dtecno-section-title"
          >
            SOLUCIONES <span className="dtecno-highlight">TECNOLÓGICAS</span> INTEGRALES
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="dtecno-section-subtitle"
          >
            Potenciamos tu negocio con servicios digitales completos y soporte técnico especializado
          </motion.p>
        </div>
        
        <div className="dtecno-services-grid">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="dtecno-service-card"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="dtecno-service-icon-circle">
                {service.icon}
              </div>
              <h3 className="dtecno-service-title">{service.title}</h3>
              <p className="dtecno-service-description">{service.description}</p>
              <ul className="dtecno-service-features">
                {service.features.map((feature, i) => (
                  <li key={i} className="dtecno-feature-item">
                    <span className="dtecno-feature-icon">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <motion.button 
                className="dtecno-service-button"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 5px 15px rgba(10, 132, 255, 0.4)"
                }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleServiceClick(service.id)}
              >
                {service.buttonText}
              </motion.button>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="dtecno-offer-banner"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="dtecno-offer-content">
            <h3 className="dtecno-offer-title">¿NECESITAS UNA SOLUCIÓN PERSONALIZADA?</h3>
            <p className="dtecno-offer-text">Obtén un <strong>diagnóstico gratuito</strong> de tus necesidades tecnológicas y un plan de acción detallado sin compromiso</p>
            <motion.button 
              className="dtecno-offer-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleServiceClick('contacto')}
            >
              CONTACTAR A UN EXPERTO
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;