import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import './Services.css';

function Services() {
  return (
    <section className="services section" id="services">
      <h2>Nuestros Servicios</h2>
      <div className="services-container">
        <motion.div
          className="service-item"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <img src={`${process.env.PUBLIC_URL}/webdev.jpg`} alt="Desarrollo Web" className="service-image"/>
          <h3>Desarrollo Web</h3>
          <p>Creamos sitios web impresionantes y funcionales.</p>
        </motion.div>
        <motion.div
          className="service-item"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <img src={`${process.env.PUBLIC_URL}/uxui.jpg`} alt="Diseño UX/UI" className="service-image"/>
          <h3>Diseño UX/UI</h3>
          <p>Experiencias de usuario intuitivas y atractivas.</p>
        </motion.div>
        <motion.div
          className="service-item"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <img src={`${process.env.PUBLIC_URL}/seo.jpg`} alt="SEO" className="service-image"/>
          <h3>SEO</h3>
          <p>Optimización para motores de búsqueda para mayor visibilidad.</p>
        </motion.div>
      </div>

      <h2>Tené tu Sitio Web en 15 días hábiles</h2>
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
            <li>🌐 <strong>Web Hosting Premium - Gratis Por 1 Año!</strong></li>
            <li>📧 <strong>Cuentas de correo corporativas</strong></li>
            <li>💬 <strong>Integración con WhatsApp</strong></li>
          </ul>
        </div>
      </div>
      <a href="https://wa.me/xxxxxxxxxx" className="cta-button">
        <FaWhatsapp className="whatsapp-icon" /> Solicita Tu Presupuesto
      </a>
    </section>
  );
}

export default Services;
