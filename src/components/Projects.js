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
    <section className="projects-section" id="projects" aria-label="Nuestros Proyectos">
      <div className="section-header">
        <h2>NUESTROS <span className="highlight">PROYECTOS</span></h2>
        <p>Algunos de los trabajos que hemos realizado para nuestros clientes</p>
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
                <img src={project.imageUrl} alt={project.title} className="project-image" />
                <div className="project-overlay"></div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="tag">{tag}</span>
                  ))}
                </div>
                <motion.button 
                  className="project-button"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Ver Proyecto
                </motion.button>
              </div>
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;