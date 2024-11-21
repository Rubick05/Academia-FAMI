import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom'; // Si estás usando React Router para la navegación
import BailarinaInicio from '../assets/images/bailarina-Inicio.png'; // Importa la imagen directamente
import BailarinInicio from '../assets/images/bailarin-Inicio.png'; // Importa la imagen directamente

const Home: React.FC = () => {
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
    </section>
  );
};

export default Home;
