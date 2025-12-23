import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contacto" className="contact-section">
      <div className="contact-bg-glow"></div> {/* Fondo con brillo */}
      
      <div className="container contact-container">
        
        {/* Lado Izquierdo: Información */}
        <motion.div 
          className="contact-info-wrapper"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="contact-badge">HABLEMOS</span>
          <h2>Impulsa tu negocio hoy</h2>
          <p className="contact-desc">
            Ya sea que necesites una web nueva, soporte técnico o campañas de publicidad, estamos listos para ayudarte.
          </p>

          <div className="contact-methods">
            <div className="method-item">
              <div className="icon-box"><FaWhatsapp /></div>
              <div>
                <h4>WhatsApp</h4>
                <p>11 5909-7342</p>
              </div>
            </div>
            <div className="method-item">
              <div className="icon-box"><FaEnvelope /></div>
              <div>
                <h4>Email</h4>
                <p>info@dtecno.com.ar</p>
              </div>
            </div>
            <div className="method-item">
              <div className="icon-box"><FaMapMarkerAlt /></div>
              <div>
                <h4>Ubicación</h4>
                <p>Hudson, Buenos Aires</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Lado Derecho: Formulario */}
        <motion.div 
          className="contact-form-wrapper"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <form name="contact" method="POST" data-netlify="true">
            <input type="hidden" name="form-name" value="contact" />
            
            <div className="form-group">
              <label>Nombre Completo</label>
              <input type="text" name="name" placeholder="Ej. Juan Pérez" required />
            </div>

            <div className="form-group">
              <label>Email Corporativo</label>
              <input type="email" name="email" placeholder="juan@empresa.com" required />
            </div>

            <div className="form-group">
              <label>Servicio de Interés</label>
              <select name="service">
                <option value="web">Desarrollo Web</option>
                <option value="ads">Publicidad (Ads)</option>
                <option value="it">Soporte IT / Técnico</option>
                <option value="other">Otro</option>
              </select>
            </div>

            <div className="form-group">
              <label>Mensaje</label>
              <textarea name="message" rows="4" placeholder="Cuéntanos sobre tu proyecto..." required></textarea>
            </div>

            <motion.button 
              type="submit" 
              className="submit-btn"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              ENVIAR MENSAJE
            </motion.button>
          </form>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;