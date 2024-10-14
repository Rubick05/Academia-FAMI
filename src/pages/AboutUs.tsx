// src/pages/AboutUs.tsx
import React from 'react';
import './AboutUs.css';
import aboutImage from '../assets/images/about.jpg'; // Asegúrate de tener esta imagen

const AboutUs: React.FC = () => {
  return (
    <section id="about-us" className="about-us-section">
      <h2>Sobre Nosotros</h2>
      <div className="about-content">
        <img src={aboutImage} alt="Sobre la Academia FAMI" className="about-image" />
        <p>
          En la Academia de Danza FA-MI, nos apasiona la danza y nos dedicamos a enseñar una variedad de estilos para todas las edades y niveles. Nuestro equipo de instructores profesionales está comprometido con tu crecimiento y desarrollo artístico.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
