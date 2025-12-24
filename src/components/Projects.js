import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';
// Importa tus imagenes reales aquí
// import daromImg from '../assets/darom.png';
import './Projects.css';

const projects = [
  {
    title: "Darom SA",
    category: "Desarrollo Full Stack + Ads 360°",
    desc: "Transformación digital integral. Desarrollo web de alto rendimiento combinado con una estrategia agresiva en Google y Meta Ads. Resultados: Aumento exponencial de ventas y dominio del posicionamiento SEO en su sector.",
    link: "https://daromsa.com.ar",
    image: "/logodarom.png"
  },
  {
    title: "Iobella Hudson",
    category: "Diseño Web + Google Ads",
    desc: "Ecosistema digital enfocado en la conversión. Sitio web estético y veloz, potenciado por campañas de búsqueda en Google Ads que captan leads calificados diariamente, llenando la agenda de turnos.",
    link: "https://iobellahudson.com",
    image: "/logoiobellahudson.png"
  },
  {
    title: "M y D Muebles",
    category: "E-commerce & SEO Técnico",
    desc: "Showroom digital optimizado. Implementación de arquitectura SEO avanzada que posicionó a la marca en búsquedas clave, aumentando drásticamente el tráfico orgánico y las consultas de presupuesto.",
    link: "https://mydmuebles.netlify.app/",
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