import React, { useState } from 'react';
import './Home.css';
import { Link } from 'react-router-dom'; // Si estás usando React Router para la navegación
import BailarinaInicio from '../assets/images/bailarina-Inicio.png'; // Importa la imagen directamente
import BailarinInicio from '../assets/images/bailarin-Inicio.png'; // Importa la imagen directamente
import Profesor1 from '../assets/images/profesor1.png'; // Imagen de profesor 1
import Profesor2 from '../assets/images/profesor2.png'; // Imagen de profesor 2
import Profesor3 from '../assets/images/profesor3.png'; // Imagen de profesor 3
import Profesor4 from '../assets/images/profesor4.png'; // Imagen de profesor 4
import { AiOutlineCaretRight, AiOutlineCaretLeft } from 'react-icons/ai'; // Para las flechas

// Actualizamos el array de profesores para incluir los 4 profesores
const profesores = [
  { id: 1, nombre: 'Profesor 1', imagen: Profesor1 },
  { id: 2, nombre: 'Profesor 2', imagen: Profesor2 },
  { id: 3, nombre: 'Profesor 3', imagen: Profesor3 },
  { id: 4, nombre: 'Profesor 4', imagen: Profesor4 },
];

const Home: React.FC = () => {
  const [currentProfesor, setCurrentProfesor] = useState(0);

  const nextProfesor = () => {
    setCurrentProfesor((prev) => (prev + 2) % profesores.length); // Avanza dos posiciones
  };

  const prevProfesor = () => {
    setCurrentProfesor((prev) => (prev - 2 + profesores.length) % profesores.length); // Retrocede dos posiciones
  };

  return (
    <section className="home-section">
      <div className="home-container">
        <h2 className="home-text">DESCUBRE TU PASION POR EL</h2>
        <h3 className="highlight">BAILE CON NOSOTROS</h3>
        <Link to="/inscribete" className="join-now-btn">
          UNETE AHORA
        </Link>
        <img
          src={BailarinaInicio}
          alt="Imagen decorativa"
          className="home-image"
        />
      </div>

      <div className="subtext-container">
        <p className="subtext">
          DESCUBRE TU TALENTO CON NUESTRA VARIEDAD DE ESTILOS DE BAILE, ¡PENSADOS ESPECIALMENTE PARA VOS!
        </p>
        <Link to="/inscribete" className="inscribete-btn">
          INSCRÍBETE
        </Link>
      </div>

      <div className="info-container">
        <h2 className="info-title">
          ¿Estás listo para descubrir el poder de la danza?
        </h2>
        <p className="info-content">
          Fami Dance Academy en Cochabamba es el lugar donde la creatividad y el ritmo se encuentran, brindando a todos, desde principiantes hasta avanzados, la oportunidad de brillar en la pista de baile.
          <br /><br />
          Con una emocionante combinación de clases de ballroom, Folclore, danzas Urbanas y más, te ofrecemos una experiencia de baile que te llenará de energía, te sorprenderá y te hará querer seguir aprendiendo. ¡Ven y sé parte de Fami, donde cada paso cuenta!
        </p>
        <img
          src={BailarinInicio}
          alt="Imagen decorativa"
          className="home-image2"
        />
        <Link to="/about-us" className="more-about-us">
          MORE ABOUT US
        </Link>
      </div>

      {/* Sección con la imagen de fondo y texto encima */}
      <div className="background-section">
        <div className="overlay-text">
          <h2 className="overlay-title">CLASES Y HORARIOS</h2>
          <p className="overlay-description">
            Fami Dance Academy se encuentra en Cochabamba, el lugar perfecto para desarrollar tu pasión por el baile.
            <br /><br />
            Contamos con 4 espacios de entrenamiento dedicados exclusivamente a clases de baile. Cada clase es impartida por instructores profesionales con experiencia en diversos estilos como ballroom, Folclore, danzas Urbanas y más.
            <br /><br />
            Haz clic en el botón a continuación para explorar nuestra gama completa de clases y horarios.
          </p>
          <Link to="/horarios" className="horario-btn">
            LEER MAS
          </Link>
        </div>
      </div>

      {/* Sección de Profesores */}
      <div className="professors-section">
        <div className="professors-text">
          <h2>CONOCE A NUESTROS PROFESORES DE BAILE</h2>
          <p>
            Todos nuestros instructores son cuidadosamente seleccionados. Tienen experiencia en la enseñanza y también trabajaron como bailarines profesionales en el estilo de baile enfocado de cada clase.
          </p>
          
        <Link to="/instructores" className="instructores-btn">
          VER TODOS
        </Link>
        </div>

        <div className="professors-container">
          <AiOutlineCaretLeft className="arrow left" onClick={prevProfesor} />

          <div className="professor-image-container">
            <img
              src={profesores[currentProfesor].imagen}
              alt={`Profesor ${profesores[currentProfesor].nombre}`}
              className="professor-image"
            />
            <img
              src={profesores[(currentProfesor + 1) % profesores.length].imagen}
              alt={`Profesor ${profesores[(currentProfesor + 1) % profesores.length].nombre}`}
              className="professor-image"
            />
          </div>

          <AiOutlineCaretRight className="arrow right" onClick={nextProfesor} />
        </div>
      </div>
    </section>
  );
};

export default Home;
