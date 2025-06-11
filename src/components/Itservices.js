import React from 'react';
import { motion } from 'framer-motion';
import './Itservices.css';

const Itservices = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "1159097342";
    const message = "Hola, estoy interesado en sus servicios informáticos. ¿Podrían ayudarme?";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  const services = [
    {
      title: "ARMADO DE PCs A MEDIDA",
      description: "Diseñamos y ensamblamos PCs personalizadas según tus necesidades. Ya sea para gaming, diseño gráfico, trabajo o uso diario, tenemos la solución perfecta para ti.",
      image: "/service1.jpg",
      features: [
        "Configuraciones optimizadas para cada uso",
        "Componentes de alta calidad",
        "Garantía por 12 meses",
        "Asesoramiento profesional"
      ]
    },
    {
      title: "MANTENIMIENTO PREVENTIVO Y CORRECTIVO",
      description: "Mantenemos tu equipo en óptimas condiciones para evitar fallos y prolongar su vida útil. Incluye limpieza interna, actualizaciones de software y diagnóstico completo.",
      image: "/service2.jpg",
      features: [
        "Limpieza profunda de componentes",
        "Optimización del sistema",
        "Diagnóstico exhaustivo",
        "Informe técnico detallado"
      ]
    },
    {
      title: "REPARACIÓN DE HARDWARE Y SOFTWARE",
      description: "Diagnosticamos y solucionamos problemas de hardware y software para que tu PC funcione como nueva. Reparamos pantallas, discos duros, placas madre y más.",
      image: "/service3.jpg",
      features: [
        "Diagnóstico gratuito",
        "Repuestos originales",
        "Soluciones rápidas",
        "Presupuesto sin cargo"
      ]
    }
  ];

  const additionalServices = [
    "Instalación de sistemas operativos (Windows, Linux, macOS)",
    "Optimización de rendimiento para PCs lentas",
    "Recuperación de datos perdidos o eliminados",
    "Configuración de redes domésticas y empresariales",
    "Asesoría en compra de componentes y accesorios",
    "Instalación y configuración de software especializado",
    "Migración de datos segura",
    "Protección contra malware y virus"
  ];

  return (
    <section className="it-services" style={{ backgroundColor: '#0a0a0a' }}>
      <div className="container">
        <motion.div
          className="service-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h1>SOLUCIONES IT <span className="highlight">A TU MEDIDA</span></h1>
          <p className="lead">
            Expertos en tecnología listos para resolver cualquier problema en la comodidad de tu hogar u oficina. 
            <span className="guarantee"> Garantía de satisfacción del 100%.</span>
          </p>
        </motion.div>

        <div className="service-grid">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card"
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="card-image-container">
                <img src={service.image} alt={service.title} loading="lazy" />
                <div className="card-overlay"></div>
              </div>
              <div className="card-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul className="feature-list">
                  {service.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
                <motion.button
                  className="service-button"
                  onClick={handleWhatsAppClick}
                  whileHover={{ scale: 1.05, boxShadow: "0 5px 15px rgba(10, 100, 255, 0.4)" }}
                  whileTap={{ scale: 0.98 }}
                >
                  SOLICITAR PRESUPUESTO
                  <span className="button-icon">→</span>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="additional-services"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h2>¿QUÉ MÁS PODEMOS HACER POR TI?</h2>
          <div className="service-list-container">
            <ul className="service-list">
              {additionalServices.map((service, index) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
            <div className="service-cta">
              <p>No encuentras lo que necesitas? <br /> Pregúntanos por soluciones personalizadas.</p>
              <button onClick={handleWhatsAppClick}>CONSULTAR AHORA</button>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="cta-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="cta-content">
            <h2>¿PROBLEMAS CON TU EQUIPO?</h2>
            <p className="cta-text">No pierdas tiempo ni dinero con soluciones temporales. Nuestros técnicos certificados ofrecen:</p>
            <div className="benefits">
              <div className="benefit-item">
                <div className="benefit-icon">⚡</div>
                <p>Servicio rápido y eficiente</p>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">🏠</div>
                <p>Atención a domicilio sin cargo adicional</p>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">🛡️</div>
                <p>Garantía por escrito en todas las reparaciones</p>
              </div>
            </div>
          </div>
          <motion.button
            className="cta-button"
            onClick={handleWhatsAppClick}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="whatsapp-icon">📱</span> CONTACTO INMEDIATO VÍA WHATSAPP
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Itservices;