import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

function Projects() {
  const projects = [
    { 
      title: "Darom SA", 
      description: "Sitio web corporativo para empresa de seguridad", 
      imageUrl: "darom.png", 
      link: "https://daromsa.com.ar",
      tags: ["WordPress", "Diseño Responsivo", "SEO"]
    },
    { 
      title: "Dietética San Rudecindo", 
      description: "E-commerce para dietética con catálogo de productos", 
      imageUrl: "dieteticasanrudecindo.png", 
      link: "https://dieteticasanrudecindo.netlify.app/",
      tags: ["React", "E-commerce", "Pagos Online"]
    },
    { 
      title: "M y D Muebles", 
      description: "Landing page para mueblería con galería de productos", 
      imageUrl: "muebleria.png", 
      link: "https://mydmuebles.netlify.app/",
      tags: ["HTML5/CSS3", "JavaScript", "Diseño Moderno"]
    },
  ];

  return (
    <section className="projects-section" id="projects" aria-label="Nuestros Proyectos" style={{ backgroundColor: '#000' }}>
      <div className="container">
        <div className="section-header">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            NUESTROS <span className="highlight">PROYECTOS</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="section-subtitle"
          >
            Algunos de los trabajos que hemos realizado para nuestros clientes
          </motion.p>
        </div>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              aria-label={`Proyecto: ${project.title}`}
            >
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                <div className="project-image-container">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="project-image" 
                    loading="lazy"
                  />
                  <div className="project-overlay">
                    <motion.span 
                      className="view-project-text"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    >
                      Ver Proyecto
                    </motion.span>
                  </div>
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag, i) => (
                      <motion.span 
                        key={i} 
                        className="tag"
                        whileHover={{ scale: 1.1 }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;