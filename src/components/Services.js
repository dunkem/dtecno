import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      title: "Armado y Reparación de PC",
      description: "PCs a medida para gaming, diseño y productividad. Reparación de hardware y software.",
      icon: "🖥️",
      features: ["Garantía", "Presupuesto sin cargo", "Asesoramiento técnico"]
    },
    {
      title: "Desarrollo Web Profesional",
      description: "Landing pages y sitios web optimizados para conversiones y posicionamiento SEO.",
      icon: "🌐",
      features: ["Diseño responsive", "Optimización SEO", "Integración con redes"]
    },
    {
      title: "Marketing Digital",
      description: "Campañas en Google Ads y Meta Ads para aumentar tus ventas y clientes potenciales.",
      icon: "📈",
      features: ["Segmentación avanzada", "Analítica de resultados", "ROI medible"]
    },
    {
      title: "Servicio Técnico Integral",
      description: "Soporte técnico remoto y presencial para empresas y particulares.",
      icon: "🔧",
      features: ["Respuesta rápida", "Técnicos certificados", "Solución garantizada"]
    }
  ];

  return (
    <section id="services" className="services-section">
      <div className="section-header">
        <h2>NUESTROS <span className="highlight">SERVICIOS</span></h2>
        <p>Soluciones tecnológicas completas para particulares y empresas</p>
      </div>
      
      <div className="services-grid">
        {services.map((service, index) => (
          <div 
            key={index} 
            className={`service-card animate-fade-in delay-${index * 100}`}
          >
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <ul className="service-features">
              {service.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            <a href="#contact" className="service-button">Consultar</a>
          </div>
        ))}
      </div>
      
      <div className="offer-banner">
        <div className="offer-content">
          <h3>¡OFERTA ESPECIAL!</h3>
          <p>Mantenimiento anual para empresas con <strong>30% de descuento</strong></p>
          <a href="#contact" className="offer-button">Aprovechar Oferta</a>
        </div>
      </div>
    </section>
  );
};

export default Services;