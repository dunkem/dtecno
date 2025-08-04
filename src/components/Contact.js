import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contacto" className="contact-section">
      <div className="container">
        <motion.div
  className="section-header"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
  <h2 className="contact-header-title">CONTACTO RÁPIDO</h2>
  <p>¿Listo para impulsar tu negocio? Escríbenos ahora</p>
</motion.div>

        <div className="contact-content">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3>Contacto Directo</h3>
            
            <div className="info-item">
              <div className="info-icon whatsapp">
                <FaWhatsapp />
              </div>
              <div className="info-content">
                <h4>WhatsApp</h4>
                <a href="https://wa.me/1159097342" className="highlight-link">
                  11 5909-7342
                </a>
                <small>Respuesta en minutos</small>
              </div>
            </div>

            <div className="contact-cta">
              <p>¿Necesitas ayuda inmediata con tu tecnología?</p>
              <motion.a
                href="https://wa.me/1159097342"
                className="whatsapp-cta"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaWhatsapp /> Chatear Ahora
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            className="contact-form"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3>Envíanos un mensaje</h3>
            <form 
              name="contact" 
              method="POST" 
              data-netlify="true"
              netlify-honeypot="bot-field"
            >
              <input type="hidden" name="form-name" value="contact" />
              
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Tu nombre completo"
                  required
                />
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Tu email"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Tu teléfono"
                  />
                </div>
              </div>
              
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="¿Cómo podemos ayudarte?"
                  required
                ></textarea>
              </div>
              
              <motion.button
                type="submit"
                className="submit-button"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                ENVIAR MENSAJE
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;