import React from 'react';
import './Itservices.css';

const Itservices = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "1159097342"; // Tu número de WhatsApp
    const message = "Hola, estoy interesado en sus servicios informáticos. ¿Podrían ayudarme?";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <section className="it-services">
      <meta name="description" content="Servicio informático a domicilio. Resolvemos cualquier problema relacionado con PCs: armado, mantenimiento, reparación de hardware y software, instalación de sistemas operativos y optimización de rendimiento." />
      <meta name="keywords" content="servicio informático, reparación de PCs, mantenimiento de computadoras, armado de PCs, optimización de rendimiento, PC gamer, PC para diseño, PC para hogar" />
      <meta name="author" content="Tu Empresa" />

      <div className="it-services-content">
        <h1>SERVICIO INFORMÁTICO A DOMICILIO</h1>
        <p className="lead">Ofrecemos soluciones integrales para tus problemas tecnológicos. Nuestros expertos están listos para ayudarte en la comodidad de tu hogar.</p>

        <div className="service-grid">
          <div className="service-card">
            <img src="/service1.jpg" alt="Armado de PCs a medida" />
            <h3>ARMADO DE PCs A MEDIDA</h3>
            <p>Diseñamos y ensamblamos PCs personalizadas según tus necesidades. Ya sea para <strong>gaming</strong>, <strong>diseño gráfico</strong>, <strong>trabajo</strong> o <strong>uso diario</strong>, tenemos la solución perfecta para ti.</p>
            <button className="service-button button-primary" onClick={handleWhatsAppClick}>SOLICITAR PRESUPUESTO</button>
          </div>

          <div className="service-card">
            <img src="/service2.jpg" alt="Mantenimiento de computadoras" />
            <h3>MANTENIMIENTO PREVENTIVO Y CORRECTIVO</h3>
            <p>Mantenemos tu equipo en óptimas condiciones para evitar fallos y prolongar su vida útil. Incluye limpieza interna, actualizaciones de software y diagnóstico completo.</p>
            <button className="service-button button-secondary" onClick={handleWhatsAppClick}>SOLICITAR PRESUPUESTO</button>
          </div>

          <div className="service-card">
            <img src="/service3.jpg" alt="Reparación de hardware y software" />
            <h3>REPARACIÓN DE HARDWARE Y SOFTWARE</h3>
            <p>Diagnosticamos y solucionamos problemas de hardware y software para que tu PC funcione como nueva. Reparamos pantallas, discos duros, placas madre y más.</p>
            <button className="service-button button-tertiary" onClick={handleWhatsAppClick}>SOLICITAR PRESUPUESTO</button>
          </div>
        </div>

        <div className="additional-services">
          <h2>OTROS SERVICIOS</h2>
          <ul className="service-list">
            <li>Instalación de sistemas operativos (Windows, Linux, macOS)</li>
            <li>Optimización de rendimiento para PCs lentas</li>
            <li>Recuperación de datos perdidos o eliminados</li>
            <li>Configuración de redes domésticas y empresariales</li>
            <li>Asesoría en compra de componentes y accesorios</li>
            <li>Instalación y configuración de software especializado (diseño, programación, etc.)</li>
          </ul>
        </div>

        <div className="cta-section">
          <h2>¿NECESITAS AYUDA CON TU PC?</h2>
          <p>No importa si es para tu hogar, tu trabajo o tu pasión por el gaming. ¡Nosotros lo resolvemos! Contáctanos ahora mismo.</p>
          <button className="cta-button" onClick={handleWhatsAppClick}>CONTACTAR POR WHATSAPP</button>
        </div>
      </div>
    </section>
  );
};

export default Itservices;