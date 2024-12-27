import React from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

function Contact() {
  return (
    <section className="contact section" id="contact">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="contact-container"
      >
        <h2>Contacto</h2>
        <p>¿Interesado en nuestros servicios? ¡Ponte en contacto con nosotros!</p>
        <form name="contact" method="POST" data-netlify="true">
          <input type="hidden" name="form-name" value="contact" />
          <div className="form-group">
            <input type="text" name="name" placeholder="Nombre" required />
          </div>
          <div className="form-group">
            <input type="email" name="email" placeholder="Email" required />
          </div>
          <div className="form-group">
            <textarea name="message" placeholder="Mensaje" required></textarea>
          </div>
          <motion.button 
            type="submit"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="submit-button"
          >
            Enviar
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
}

export default Contact;
