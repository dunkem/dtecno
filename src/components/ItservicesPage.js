import React, { useRef } from 'react'; // Importamos useRef
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
// Agregamos las flechas para el carrusel
import { FaServer, FaShieldVirus, FaPhoneAlt, FaMicrochip, FaTools, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './ItservicesPage.css';

const services = [
  {
    icon: <FaMicrochip />,
    title: "Armado de PC (Elite Builds)",
    description: "Equipos de alto rendimiento diseñados a medida. Máxima potencia y fiabilidad.",
    details: [
      "Workstations: Arquitectura/Render 3D",
      "Gaming Extremo: Máximos FPS",
      "Oficina: Multitasking fluido",
      "Asesoría + Armado profesional"
    ],
    price: "Cotización Personalizada",
    featured: true
  },
  {
    icon: <FaTools />,
    title: "Reparación y Optimización",
    description: "Devolvemos la vida a tu equipo. Diagnóstico rápido y soluciones definitivas.",
    details: ["Recuperación de datos", "Limpieza y pasta térmica", "Reinstalación Windows", "Upgrade SSD/RAM"],
    price: "Diagnóstico GRATIS"
  },
  {
    icon: <FaServer />,
    title: "Infraestructura & Redes",
    description: "Conectividad empresarial estable. Olvídate de los cortes en tu oficina.",
    details: ["Cableado estructurado", "Configuración Servidores", "Wi-Fi corporativo", "Racks de comunicaciones"],
    price: "Presupuesto a medida"
  },
  {
    icon: <FaShieldVirus />,
    title: "Ciberseguridad Pyme",
    description: "Blindamos tu negocio. Protege tu información contra ataques externos.",
    details: ["Firewall perimetral", "Antivirus gestionado", "Backups automáticos", "Auditoría de seguridad"],
    price: "Planes mensuales"
  }
];

const ItservicesPage = () => {
  // Referencia para controlar el carrusel
  const carouselRef = useRef(null);

  // Función para mover el carrusel
  const scroll = (direction) => {
    if(carouselRef.current) {
        const { current } = carouselRef;
        const scrollAmount = direction === 'left' ? -350 : 350; // Cantidad de desplazamiento
        current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <main className="itservices-page">
      <Helmet>
        <title>Armado de PC y Servicios IT | DTECNO Elite Tech</title>
        <meta name="description" content="Armado de PCs a medida para gaming y arquitectura. Soporte técnico especializado." />
      </Helmet>

      {/* Hero Banner IT */}
      <section className="it-hero">
        <div className="it-hero-overlay"></div>
        <div className="it-hero-content">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }}
          >
            TU SOCIO TECNOLÓGICO <span className="highlight">ELITE</span>
          </motion.h1>
          <p>Potencia, Velocidad y Seguridad. Elevamos tu estándar tecnológico.</p>
          <motion.a 
            href="https://wa.me/1159097342?text=Hola DTECNO, necesito asesoramiento técnico." 
            className="emergency-btn"
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(0, 123, 255, 0.6)" }}
            whileTap={{ scale: 0.95 }}
          >
            <FaPhoneAlt /> HABLAR CON UN EXPERTO
          </motion.a>
        </div>
      </section>

      {/* SECCIÓN DE CARRUSEL DE SERVICIOS */}
      <section className="container carousel-section">
        <div className="section-header" style={{marginTop: '60px'}}>
            <span className="section-subtitle">SOLUCIONES INTEGRALES</span>
            <h2>Nuestros Servicios <span className="highlight">Premium</span></h2>
        </div>

        {/* Contenedor relativo para posicionar flechas */}
        <div className="carousel-wrapper">
            {/* Botón Izquierda */}
            <button className="carousel-btn left" onClick={() => scroll('left')} aria-label="Anterior">
                <FaChevronLeft />
            </button>

            {/* El Carrusel Scrollable */}
            <div className="it-services-carousel" ref={carouselRef}>
                {services.map((service, index) => (
                <motion.div 
                    key={index}
                    className={`it-card ${service.featured ? 'featured-card' : ''}`}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                >
                    <div className="it-icon-wrapper">
                        <div className="it-icon">{service.icon}</div>
                    </div>
                    <h3>{service.title}</h3>
                    <p className="it-desc">{service.description}</p>
                    <ul className="it-details">
                        {service.details.map((det, i) => (
                            <li key={i}>{det}</li>
                        ))}
                    </ul>
                    <div className="card-footer">
                        <div className="it-price-tag">{service.price}</div>
                        <a 
                            href={`https://wa.me/1159097342?text=Hola, me interesa ${service.title}`}
                            className="it-btn"
                        >
                            {service.featured ? 'COTIZAR' : 'SOLICITAR'}
                        </a>
                    </div>
                </motion.div>
                ))}
            </div>

            {/* Botón Derecha */}
            <button className="carousel-btn right" onClick={() => scroll('right')} aria-label="Siguiente">
                <FaChevronRight />
            </button>
        </div>
      </section>

      {/* Banner de Garantía */}
      <section className="guarantee-banner container" style={{marginTop: '40px', marginBottom: '40px', borderRadius: '20px'}}>
        <div className="guarantee-icon-box">
            <FaShieldVirus size={35} />
        </div>
        <div>
          <h3>Garantía Total DTECNO</h3>
          <p>Compromiso de calidad. Todos nuestros trabajos cuentan con <strong>90 días de garantía escrita</strong>.</p>
        </div>
      </section>
    </main>
  );
};

export default ItservicesPage;