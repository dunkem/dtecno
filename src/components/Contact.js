import React from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact-section" style={{ backgroundColor: '#000' }}>
      <div className="container">
        <div className="contact-header">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            TRANSFORMA TU PRESENCIA <span className="highlight">DIGITAL HOY</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="section-subtitle"
          >
            ¿Listo para llevar tu negocio al siguiente nivel? Completa el formulario y recibe una consultoría gratuita.
          </motion.p>
        </div>

        <div className="contact-grid">
          {/* Columna de información */}
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="value-proposition">
              <h3>Por qué elegirnos</h3>
              <ul className="benefits-list">
                <li> +5 años potenciando negocios digitales</li>
                <li> Soluciones personalizadas para cada cliente</li>
                <li> Resultados medibles y garantizados</li>
                <li> Soporte técnico 24/7</li>
                <li> Asesoramiento continuo post-implementación</li>
              </ul>
            </div>

            <div className="info-grid">
              <div className="info-item">
                <div className="info-icon">📞</div>
                <div>
                  <h4>Contacto directo</h4>
                  <p>011-5909-7342</p>
                  <p>011-2489-2490</p>
                  <p className="small-note">Líneas rotativas para atención inmediata</p>
                </div>
              </div>
              
              <div className="info-item">
                <div className="info-icon">✉️</div>
                <div>
                  <h4>Email prioritario</h4>
                  <p>info.dtecno@gmail.com</p>
                  <p className="small-note">Respuesta en menos de 4 horas hábiles</p>
                </div>
              </div>
              
              <div className="info-item">
                <div className="info-icon">🕒</div>
                <div>
                  <h4>Horario extendido</h4>
                  <p>Lunes a Viernes: 9am - 6pm</p>
                  <p>Sábados: 10am - 2pm</p>
                  <p className="small-note">Consultas urgentes fuera de horario via WhatsApp</p>
                </div>
              </div>
            </div>

            <div className="trust-badges">
              <div className="badge">🔒 Datos 100% seguros</div>
              <div className="badge">📈 +150 clientes satisfechos</div>
              <div className="badge">💡 Primer diagnóstico gratuito</div>
            </div>
          </motion.div>

          {/* Columna del formulario */}
          <motion.div 
            className="contact-form"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="form-header">
              <h3>SOLICITA TU <span className="highlight">ANÁLISIS GRATUITO</span></h3>
              <p>Completa este formulario y recibe en 24hs:</p>
              <ul>
                <li>Diagnóstico de tu situación actual</li>
                <li> Plan de acción personalizado</li>
                <li> Presupuesto sin compromiso</li>
              </ul>
            </div>

            <form name="contact" method="POST" data-netlify="true" aria-label="Formulario de contacto" className="persuasive-form">
              <input type="hidden" name="form-name" value="contact" />
              
              <div className="form-group">
                <label htmlFor="name">Nombre completo*</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  placeholder="Ej: Juan Pérez" 
                  required 
                  className="modern-input"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email*</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  placeholder="Ej: contacto@minempresa.com" 
                  required 
                  className="modern-input"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="phone">WhatsApp/Teléfono*</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  placeholder="Ej: 11 2345-6789" 
                  required 
                  className="modern-input"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="business">Nombre de tu negocio/emprendimiento</label>
                <input 
                  type="text" 
                  id="business" 
                  name="business" 
                  placeholder="Ej: Mi Tienda Online" 
                  className="modern-input"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="service">¿Qué necesitas potenciar?*</label>
                <select id="service" name="service" required className="modern-select">
                  <option value="">Selecciona una opción</option>
                  <option value="web">Sitio Web/tienda online</option>
                  <option value="seo">Posicionamiento en Google</option>
                  <option value="ads">Campañas publicitarias digitales</option>
                  <option value="branding">Identidad de marca</option>
                  <option value="social">Redes sociales</option>
                  <option value="other">Otro (especificar en mensaje)</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Cuéntanos sobre tu proyecto*</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="4" 
                  placeholder="Ej: Necesito un sitio web para mi negocio de ropa con catálogo online y sistema de pagos..." 
                  required 
                  className="modern-textarea"
                ></textarea>
              </div>
              
              <motion.button 
                type="submit"
                className="submit-button"
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: "0 5px 15px rgba(0, 47, 255, 0.4)"
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                QUIERO MI ANÁLISIS GRATIS
              </motion.button>

              <p className="form-footer">*Recibirás nuestra respuesta en menos de 24 horas hábiles. No spam, solo soluciones.</p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;