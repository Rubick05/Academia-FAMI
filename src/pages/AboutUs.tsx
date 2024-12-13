import React, { useEffect } from 'react'; 
import './AboutUs.css';
import Fundador from '../assets/images/fundador.png';

const AboutUs: React.FC = () => {
  useEffect(() => {
    // Aplica la clase de fondo rojo al cuerpo al montar el componente
    document.body.classList.add('about-us-body');
    return () => {
      // Limpia la clase al desmontar
      document.body.classList.remove('about-us-body');
    };
  }, []);

  return (
    <div>
      {/* Sección principal con la imagen */}
      <div className="fondo-Cochabamba">
        <div className="hero-section">
          <h1>BIENVENIDO A</h1>
          <h2 className="academy-name">FAMI DANCE ACADEMY</h2>
          <p className="overlay-description">
            UN LUGAR VIBRANTE EN COCHABAMBA DONDE EL AMOR POR EL BAILE Y LA
            CREATIVIDAD SE ENCUENTRAN PARA HACERTE BRILLAR EN CADA CLASE.
          </p>
        </div>
      </div>
      {/* Nueva sección "El principio" que aparece más abajo */}
      <div className="info-fundador">
        <h2 className="info-title">
          Carlos Mendoza
        </h2>
        <h3 className="description-fundador">
          Fundador
        </h3>
        <p className="info-content">
        Carlos es un apasionado del movimiento y la expresión urbana. Con más de 10 años de experiencia en el mundo del hip hop y el breakdance, ha competido en campeonatos nacionales y ha perfeccionado su técnica en distintos estilos de danza urbana. Su enfoque como instructor es no solo enseñar los pasos, sino también transmitir la cultura y la creatividad que definen estos géneros. 
          <br /><br />
          En Fami Dance Academy, Carlos inspira a sus estudiantes a liberar su estilo único y a ganar confianza en cada movimiento.
        </p>
        <img
          src={Fundador}
          alt="Imagen decorativa"
          className="fundadorImage"
        />
      
      </div>
      {/* Nueva sección "El principio" que aparece más abajo */}
      <div className="principio-section">
        <h3 className="principio-title">El principio</h3>
        <p className="principio-text">
          Hace unos siete años, Carlos Mendoza siguió su sueño en Cochabamba y, con
          mucha determinación, dio vida a su visión. Su pasión y dedicación rápidamente
          lo convirtieron en una figura reconocida en la comunidad de la danza en Bolivia.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
