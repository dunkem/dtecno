import React from 'react';
import { motion } from 'framer-motion';
import { FaDesktop, FaServer, FaShieldVirus, FaNetworkWired, FaDatabase, FaCloud } from 'react-icons/fa';
import './ItservicesPage.css';

const services = [
  {
    icon: <FaDesktop />,
    title: "Reparación y Mantenimiento",
    description: "Soluciones rápidas y garantizadas para tus equipos",
    details: [
      "Diagnóstico gratuito",
      "Repuestos originales",
      "Garantía por escrito",
      "Servicio a domicilio"
    ],
    price: "Desde $28.000/mes"
  },
  {
    icon: <FaServer />,
    title: "Infraestructura IT",
    description: "Soluciones empresariales completas",
    details: [
      "Servidores dedicados",
      "Virtualización",
      "Almacenamiento NAS/SAN",
      "Respaldos automáticos"
    ],
    price: "Consultar presupuesto"
  },
  {
    icon: <FaShieldVirus />,
    title: "Ciberseguridad",
    description: "Protección avanzada para tu negocio",
    details: [
      "Firewalls empresariales",
      "Protección contra ransomware",
      "Monitoreo 24/7",
      "Auditorías de seguridad"
    ],
    price: "Desde $25.000/mes"
  }
];

const additionalServices = [
  { icon: <FaNetworkWired />, name: "Redes empresariales" },
  { icon: <FaDatabase />, name: "Recuperación de datos" },
  { icon: <FaCloud />, name: "Migración a la nube" }
];

const ItservicesPage = () => {
  return (
    <section className="itservices-page">
      <div className="hero-banner">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1>SOPORTE TÉCNICO <span className="highlight">ESPECIALIZADO</span></h1>
            <p className="subtitle">
              Soluciones IT rápidas, efectivas y con garantía de satisfacción. 
              Atención las 24 horas para emergencias.
            </p>
            <motion.a
              href="tel:1159097342"
              className="emergency-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>🚨</span> EMERGENCIA TÉCNICA
            </motion.a>
          </motion.div>
        </div>
      </div>

      <div className="services-section">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            NUESTROS <span className="highlight">SERVICIOS IT</span>
          </motion.h2>

          <div className="services-grid">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="service-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                viewport={{ once: true }}
              >
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                
                <ul className="service-details">
                  {service.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
                
                <div className="price-badge">{service.price}</div>
                
                <motion.a
                  href={`https://wa.me/1159097342?text=Consulta sobre ${service.title}`}
                  className="service-button"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  SOLICITAR SERVICIO
                </motion.a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="additional-services">
        <div className="container">
          <h3>OTROS SERVICIOS DISPONIBLES</h3>
          <div className="services-list">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                className="service-item"
                whileHover={{ scale: 1.05 }}
              >
                <div className="service-icon">{service.icon}</div>
                <span>{service.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="guarantee-section">
        <div className="container">
          <motion.div
            className="guarantee-card"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3>NUESTRA GARANTÍA</h3>
            <p>
              Si no quedas satisfecho con nuestro servicio, te devolvemos tu dinero. 
              Sin preguntas, sin complicaciones.
            </p>
            <div className="guarantee-badge">100% SATISFACCIÓN</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ItservicesPage;