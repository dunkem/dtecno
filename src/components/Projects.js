import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';
// Importa tus imagenes reales aquí
// import daromImg from '../assets/darom.png';
import './Projects.css';

const projects = [
{
    title: "Darom SA",
    category: "Web Corporativa + SEO",
    desc: "Rediseño completo para empresa líder. Mejora de velocidad del 300% y posicionamiento en primera página.",
    link: "https://daromsa.com.ar",
    image: "/logodarom.png" // React busca esto automáticamente en la carpeta public
  },
  {
    title: "Iobella Hudson",
    category: "Estética & Ads",
    desc: "Sitio web elegante + Campañas de Meta Ads generando +100 leads mensuales.",
    link: "https://iobellahudson.com",
    image: "/logoiobellahudson.png"
  },
  {
    title: "M y D Muebles",
    category: "Showroom Virtual + AR",
    desc: "Experiencia inmersiva con galería 3D y realidad aumentada para visualizar productos en el hogar.",
    link: "https://mydmuebles.netlify.app/",
    // ⚠️ IMPORTANTE: Asegúrate de que la imagen en tu carpeta 'public' se llame así:
    image: "/logomydmuebles.png"
  }
];

const Projects = () => {
  return (
    <section id="proyectos" className="projects-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">PORTAFOLIO</span>
          <h2>Casos de <span className="highlight">Éxito</span></h2>
        </div>

        <div className="projects-grid">
          {projects.map((proj, index) => (
            <motion.div 
              key={index} 
              className="project-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <div className="project-image" style={{backgroundImage: `url(${proj.image})`}}>
                <div className="project-overlay">
                  <a href={proj.link} target="_blank" rel="noreferrer" className="view-btn">
                    Visitar Sitio <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
              <div className="project-info">
                <span className="project-cat">{proj.category}</span>
                <h3>{proj.title}</h3>
                <p>{proj.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;