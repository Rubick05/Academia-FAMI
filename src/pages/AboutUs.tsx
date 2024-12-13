// src/pages/AboutUs.tsx
import React from 'react';
import './AboutUs.css';

const AboutUs: React.FC = () => {
  return (
    <section id="about-us" className="about-section">
      <h1 className="about-title">Sobre Nosotros</h1>
      <p className="about-description">
        En la Academia de Danza FA-MI, nos apasiona la danza y nos dedicamos a enseñar una variedad de estilos para todas las edades y niveles. 
        Nuestro equipo de instructores profesionales está comprometido con tu crecimiento y desarrollo artístico. Creemos en la importancia de
        crear un ambiente donde la creatividad, el esfuerzo y la pasión se encuentren para formar bailarines excepcionales.
      </p>
      <p className="about-description">
        Únete a nuestra comunidad y descubre cómo la danza puede transformar tu vida. Ofrecemos clases personalizadas, eventos especiales y un
        ambiente inclusivo donde todos son bienvenidos.
      </p>
      <a href="#learn-more" className="about-btn">Conoce Más</a>

      <div className="about-gallery">
        <div className="about-photo-item">
          <img src="photo1.jpg" alt="Clase de Danza 1" className="about-photo" />
        </div>
        <div className="about-photo-item">
          <img src="photo2.jpg" alt="Clase de Danza 2" className="about-photo" />
        </div>
        <div className="about-photo-item">
          <img src="photo3.jpg" alt="Evento Especial" className="about-photo" />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
