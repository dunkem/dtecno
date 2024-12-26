import React from 'react';
import { motion } from 'framer-motion';
import './Services.css';

function Services() {
  const services = [
    { title: "Desarrollo Web", description: "Creamos sitios web impresionantes y funcionales." },
    { title: "Diseño UX/UI", description: "Experiencias de usuario intuitivas y atractivas." },
    { title: "SEO", description: "Optimización para motores de búsqueda para mayor visibilidad." },
  ];

  return (
    <section className="services" id="services">
      <h2>Nuestros Servicios</h2>
      <div className="services-container">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="service-card"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Services;
