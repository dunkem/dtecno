import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

function Projects() {
  const projects = [
    { title: "Proyecto 1", description: "Descripción del proyecto 1", imageUrl: "URL_de_tu_imagen_1", link: "https://tusitio1.netlify.app" },
    { title: "Proyecto 2", description: "Descripción del proyecto 2", imageUrl: "URL_de_tu_imagen_2", link: "https://tusitio2.netlify.app" },
    { title: "Proyecto 3", description: "Descripción del proyecto 3", imageUrl: "URL_de_tu_imagen_3", link: "https://tusitio3.netlify.app" },
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