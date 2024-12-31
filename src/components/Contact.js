import React from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

function Contact() {
  return (
    <section className="contact section" id="contacto" aria-label="Sección de Contacto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="contact-container"
      >
        <h2>Contacto</h2>
        <p>¿Interesado en nuestros servicios? ¡Ponte en contacto con nosotros!</p>
        <form name="contact" method="POST" data-netlify="true" aria-label="Formulario de contacto">
          <input type="hidden" name="form-name" value="contact" />
          <div className="form-group">
            <input type="text" name="name" placeholder="Nombre" required aria-label="Nombre" />
          </div>
          <div className="form-group">
            <input type="email" name="email" placeholder="Email" required aria-label="Email" />
          </div>
          <div className="form-group">
            <textarea name="message" placeholder="Mensaje" required aria-label="Mensaje"></textarea>
          </div>
          <motion.button 
            type="submit"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="submit-button"
            aria-label="Enviar mensaje"
          >
            Enviar
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
}

export default Contact;