import React from 'react';
import { Helmet } from 'react-helmet'; // Opcional para SEO
import ITServices from './Itservices';
import './ItservicesPage.css';

const ItservicesPage = () => {
  return (
    <main className="it-services-page" aria-label="Página de servicios IT">
      {/* Opcional: Metadatos para SEO */}
      <Helmet>
        <title>DTECNO - Servicios IT Profesionales | Reparación y Soporte Técnico</title>
        <meta 
          name="description" 
          content="Servicios técnicos especializados en IT. Reparación de equipos, mantenimiento preventivo, seguridad informática y soluciones empresariales." 
        />
      </Helmet>
      
      <ITServices />
    </main>
  );
};

export default ItservicesPage;