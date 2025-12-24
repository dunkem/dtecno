import React from 'react';
import { motion } from 'framer-motion';
// Agregamos FaArrowRight para el botón
import { FaCode, FaBullhorn, FaTools, FaCheckCircle, FaArrowRight } from 'react-icons/fa';
import './Services.css';

const servicesList = [
  {
    icon: <FaCode />,
    title: "Desarrollo Web de Alto Rendimiento",
    desc: "No solo diseñamos webs, creamos activos digitales ultrarrápidos con React JS optimizados para convertir visitantes en clientes.",
    features: ["Landing Pages que venden", "E-commerce escalable", "Web Apps a medida", "SEO Técnico incluido"],
    ctaMsg: "Hola DTECNO, me interesa cotizar un Desarrollo Web de alto rendimiento."
  },
  {
    icon: <FaBullhorn />,
    title: "Growth Marketing & Publicidad",
    desc: "Dejá de gastar y empezá a invertir. Gestionamos campañas en Meta y Google Ads con estrategias de segmentación láser para maximizar tu ROI.",
    features: ["Estrategia de embudos", "Segmentación avanzada", "Creativos de alto impacto", "Reportes de ROI claros"],
    ctaMsg: "Hola DTECNO, quiero escalar mis ventas con Publicidad online."
  },
  {
    icon: <FaTools />,
    title: "Soporte Técnico & Evolución WP",
    desc: "Tu socio tecnológico a largo plazo. Mantenemos, aseguramos y optimizamos tu sitio WordPress para que siempre esté operativo y actualizado.",
    features: ["Seguridad blindada", "Backups diarios", "Optimización de velocidad", "Soporte prioritario"],
    ctaMsg: "Hola DTECNO, necesito soporte y mantenimiento para mi sitio web."
  }
];

const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.15, duration: 0.5 }
    }),
    hover: {
        y: -10,
        boxShadow: "0 20px 40px rgba(0, 123, 255, 0.2)", /* Glow azul más intenso */
        borderColor: "rgba(0, 123, 255, 0.5)",
        transition: { duration: 0.3 }
    }
};

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
          <span className="section-subtitle">POTENCIAMOS TU NEGOCIO</span>
          <h2>Soluciones Digitales <span className="highlight">360°</span></h2>
        </motion.div>

        <div className="services-grid">
          {servicesList.map((item, index) => (
            <motion.div 
              key={index} 
              className="service-card"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              custom={index}
              viewport={{ once: true, amount: 0.2 }}
            >
              {/* Icono con animación propia al hover del padre */}
              <motion.div 
                className="icon-wrapper"
                variants={{ hover: { rotate: [0, -10, 10, 0], scale: 1.1 } }}
                transition={{ duration: 0.5 }}
              >
                  {item.icon}
              </motion.div>
              
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              
              <ul className="feature-list">
                {item.features.map((feat, i) => (
                  <li key={i}><FaCheckCircle className="check-icon"/> {feat}</li>
                ))}
              </ul>

              {/* Nuevo Botón CTA específico por tarjeta */}
              <div className="card-cta-container">
                  <a 
                    href={`https://wa.me/1159097342?text=${encodeURIComponent(item.ctaMsg)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="service-card-btn"
                  >
                    Cotizar esto <FaArrowRight className="btn-arrow"/>
                  </a>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;