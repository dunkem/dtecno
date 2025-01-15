import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

function Projects() {
  const projects = [
    { title: "Darom SA", description: "Visita el sitio", imageUrl: "darom.png", link: "https://daromsa.com.ar" },
    { title: "Dietetica San Rudecindo", description: "Visita el sitio", imageUrl: "dieteticasanrudecindo.png", link: "https://dieteticasanrudecindo.netlify.app/" },
    { title: "M y D Muebles", description: "Visita el sitio", imageUrl: "muebleria.png", link: "https://mydmuebles.netlify.app/" },
  ];

  return (
    <section className="projects section" id="proyectos" aria-label="Nuestros Proyectos">
      <h2>Nuestros Proyectos</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-item"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            aria-label={`Proyecto: ${project.title}`}
          >
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
              <img src={project.imageUrl} alt={project.title} className="project-image" />
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
