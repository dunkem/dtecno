import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

const projects = [
  {
    title: "Darom SA",
    description: "Sistema integral de gestión para empresa de seguridad",
    image: "/darom.png",
    link: "https://daromsa.com.ar",
    results: [
      "+40% leads generados",
      "Tiempo de carga 1.2s",
      "100% mobile friendly"
    ]
  },
  {
    title: "Dietética San Rudecindo",
    description: "E-commerce con integración de pagos y gestión de stock",
    image: "/dieteticasanrudecindo.png",
    link: "https://dieteticasanrudecindo.netlify.app/",
    results: [
      "+120% en ventas online",
      "Checkout en 3 pasos",
      "Integración con Mercado Pago"
    ]
  },
  {
    title: "M y D Muebles",
    description: "Showroom virtual con realidad aumentada",
    image: "/muebleria.png",
    link: "https://mydmuebles.netlify.app/",
    results: [
      "Tasa de conversión 8.5%",
      "Galería 3D interactiva",
      "Sistema de cotización online"
    ]
  }
];

const Projects = () => {
  return (
    <section id="proyectos" className="projects-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>CASOS DE <span className="highlight">ÉXITO</span></h2>
          <p>Resultados reales que hemos logrado para nuestros clientes</p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              viewport={{ once: true }}
            >
              <div className="project-image">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  loading="lazy"
                />
                <div className="project-overlay">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="view-button"
                  >
                    Ver Proyecto
                  </a>
                </div>
              </div>
              
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                
                <div className="project-results">
                  {project.results.map((result, i) => (
                    <div key={i} className="result-item">
                      <div className="result-icon">✓</div>
                      <span>{result}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="cta-section"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3>¿QUIERES RESULTADOS SIMILARES PARA TU NEGOCIO?</h3>
          <motion.a
            href="https://wa.me/1159097342"
            className="cta-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            ¡Quiero mi proyecto exitoso!
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;