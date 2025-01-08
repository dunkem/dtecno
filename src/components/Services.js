import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import './Services.css';

function Services() {
  return (
    <section className="services section" id="servicios" aria-label="Nuestros Servicios">
      <h2>Nuestros Servicios</h2>
      <div className="services-container">
        {[
          { img: 'webdev.jpg', title: 'Desarrollo Web', desc: 'Creamos sitios web impresionantes y funcionales.' },
          { img: 'uxui.jpg', title: 'Diseño UX/UI', desc: 'Experiencias de usuario intuitivas y atractivas.' },
          { img: 'seo.jpg', title: 'SEO', desc: 'Optimización para motores de búsqueda para mayor visibilidad.' }
        ].map((service, index) => (
          <motion.div
            key={index}
            className="service-item"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 + index * 0.2 }}
            aria-label={`Servicio de ${service.title}`}
          >
            <img 
              src={`${process.env.PUBLIC_URL}/${service.img}`} 
              alt={`Servicio de ${service.title}`} 
              className="service-image" 
              loading="lazy" // Mejora el rendimiento
            />
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </motion.div>
        ))}
      </div>

      <h2>Tené tu Sitio Web en 15 Días Hábiles</h2>
      <p>Optimizado para obtener clientes. Experiencia óptima para el usuario.</p>
      <p>Nos apasiona desarrollar páginas web únicas, intuitivas, y que generan resultados. Personalizada para tu empresa, segura, y optimizada para convertir visitantes en clientes.</p>

      <div className="highlights">
        <div className="column">
          <ul>
            <li>💻 <strong>Diseños web a medida para cada empresa</strong></li>
            <li>🔍 <strong>Navegación intuitiva y accesible para todos</strong></li>
            <li>📱 <strong>Adaptabilidad total a dispositivos móviles</strong></li>
            <li>⚡ <strong>Optimización de la velocidad de carga de la página</strong></li>
            <li>📞 <strong>Integración de sistemas de contacto directo</strong></li>
          </ul>
        </div>
        <div className="column">
          <ul>
            <li>🎨 <strong>Creación de contenido visual impactante</strong></li>
            <li>🔒 <strong>Seguridad web avanzada</strong></li>
            <li>🔧 <strong>Sitio Web Autoadministrable (Panel para agregar y modificar información)</strong></li>
            <li>🔄 <strong>Cambios y Revisiones Ilimitadas</strong></li>
            <li>🌐 <strong>Web Hosting Premium - Gratis por 1 Año!</strong></li>
            <li>📧 <strong>Cuentas de correo corporativas</strong></li>
            <li>💬 <strong>Integración con WhatsApp</strong></li>
          </ul>
        </div>
      </div>

      <a href="https://wa.me/1159097342" className="cta-button" aria-label="Solicitar presupuesto por WhatsApp">
        <FaWhatsapp className="whatsapp-icon" /> Solicita Tu Presupuesto
      </a>
    </section>
  );
}

export default Services;