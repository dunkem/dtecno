import React from 'react';
import { motion } from 'framer-motion';
// Importamos los nuevos iconos de tecnologías
import { 
  SiReact, SiJavascript, SiHtml5, SiCss3, SiWordpress, 
  SiMeta, SiGoogleads, SiNodedotjs, SiMongodb, SiFirebase, SiGit, SiTailwindcss 
} from 'react-icons/si';
import { FaCode, FaServer, FaBullhorn } from 'react-icons/fa';
import './TechStack.css';

// Lista completa de tecnologías Full Stack y Marketing
const technologies = [
  // Front-End
  { icon: <SiReact size={50} color="#61DAFB" />, name: "React JS" },
  { icon: <SiJavascript size={50} color="#F7DF1E" />, name: "JavaScript" },
  { icon: <SiTailwindcss size={50} color="#38B2AC" />, name: "Tailwind CSS" },
  { icon: <SiHtml5 size={50} color="#E34F26" />, name: "HTML5" },
  { icon: <SiCss3 size={50} color="#1572B6" />, name: "CSS3" },
  // Back-End & Base de Datos
  { icon: <SiNodedotjs size={50} color="#339933" />, name: "Node.js" },
  { icon: <SiMongodb size={50} color="#47A248" />, name: "MongoDB" },
  { icon: <SiFirebase size={50} color="#FFCA28" />, name: "Firebase" },
  // CMS & Herramientas
  { icon: <SiWordpress size={50} color="#21759B" />, name: "WordPress" },
  { icon: <SiGit size={50} color="#F05032" />, name: "Git" },
  // Marketing
  { icon: <SiMeta size={50} color="#0080FB" />, name: "Meta Ads" },
  { icon: <SiGoogleads size={50} color="#4285F4" />, name: "Google Ads" },
];

// Duplicamos el array para lograr el efecto de carrusel infinito
const carouselItems = [...technologies, ...technologies];

const TechStack = () => {
  return (
    <section className="tech-stack-section">
      <div className="container">
        <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
        >
            <span className="section-subtitle">NUESTRO ARSENAL</span>
            <h2>Tecnología <span className="highlight">Full Stack & Growth</span></h2>
        </motion.div>

        {/* Carrusel Infinito de Logos */}
        <div className="tech-carousel-container">
             <motion.div 
                className="tech-carousel-track"
                // Ajustamos el valor de X negativo según el ancho total de los nuevos iconos
                animate={{ x: [0, -2400] }} 
                transition={{
                    x: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 40, // Más lento para que se aprecien los iconos
                        ease: "linear",
                    },
                }}
             >
                {carouselItems.map((tech, index) => (
                    <div key={index} className="tech-icon-card">
                        {tech.icon}
                        <span>{tech.name}</span>
                    </div>
                ))}
             </motion.div>
        </div>

        {/* Explicación Resumida en 3 Pilares */}
        <motion.div 
            className="tech-summary"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
        >
            {/* Pilar 1: Front-End */}
            <div className="summary-box frontend">
                <FaCode className="summary-icon"/>
                <h3>Front-End Ultrarrápido</h3>
                <p>Creamos interfaces dinámicas con <strong>React JS y Tailwind CSS</strong>. Garantizamos una experiencia de usuario (UX) fluida, como una app nativa, con tiempos de carga instantáneos y diseño 100% adaptado a móviles.</p>
            </div>

            {/* Pilar 2: Back-End & Datos */}
            <div className="summary-box backend">
                <FaServer className="summary-icon"/>
                <h3>Back-End Robusto & Datos</h3>
                <p>Desarrollamos la lógica de negocio con <strong>Node.js</strong> y gestionamos datos complejos con bases de datos modernas como <strong>MongoDB y Firebase</strong>, asegurando escalabilidad y seguridad para tu aplicación.</p>
            </div>

            {/* Pilar 3: Marketing */}
            <div className="summary-box ads">
                <FaBullhorn className="summary-icon"/>
                <h3>Crecimiento & Publicidad</h3>
                <p>No solo construimos tu plataforma, la impulsamos. Conectamos tu web con estrategias de <strong>Meta y Google Ads</strong> para atraer tráfico calificado y convertir visitantes en clientes reales.</p>
            </div>
        </motion.div>

      </div>
    </section>
  );
};

export default TechStack;