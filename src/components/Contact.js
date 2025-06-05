import React from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-info animate-fade-in">
          <h2>CONTÁCTANOS</h2>
          <p className="subtitle">Estamos listos para resolver tus problemas tecnológicos</p>
          
          <div className="info-grid">
            <div className="info-item">
              <div className="info-icon">📞</div>
              <div>
                <h4>Teléfono</h4>
                <p>011-5909-7342</p>
                <p>011-2489-2490</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon">✉️</div>
              <div>
                <h4>Email</h4>
                <p>info.dtecno@gmail.com</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon">🕒</div>
              <div>
                <h4>Horario</h4>
                <p>Lunes a Viernes: 9am - 6pm</p>
                <p>Sábados: 10am - 2pm</p>
              </div>
            </div>
          </div>
        </div>
        
        <motion.div 
          className="contact-form animate-fade-in delay-100"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3>Solicita tu presupuesto</h3>
          <form name="contact" method="POST" data-netlify="true" aria-label="Formulario de contacto">
            <input type="hidden" name="form-name" value="contact" />
            
            <div className="form-group">
              <label htmlFor="name">Nombre completo</label>
              <input type="text" id="name" name="name" placeholder="Ingresa tu nombre" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="Ingresa tu email" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="phone">Teléfono</label>
              <input type="tel" id="phone" name="phone" placeholder="Ingresa tu teléfono" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="service">Servicio de interés</label>
              <select id="service" name="service" required>
                <option value="">Selecciona un servicio</option>
                <option value="repair">Reparación de PC</option>
                <option value="build">Armado de PC</option>
                <option value="web">Desarrollo Web</option>
                <option value="marketing">Marketing Digital</option>
                <option value="other">Otro servicio</option>
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Mensaje</label>
              <textarea id="message" name="message" rows="4" placeholder="Describe tu requerimiento" required></textarea>
            </div>
            
            <motion.button 
              type="submit"
              className="submit-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Enviar Consulta
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;