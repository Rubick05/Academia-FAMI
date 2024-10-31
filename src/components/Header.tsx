// src/components/Header.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../assets/logos/logo-fami.png'; // Asegúrate de tener el logo en esta ruta

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <Link to="/">
          <img src={logo} alt="Logo Academia FAMI" className="logo" />
        </Link>
      </div>
      <nav className="navigation">
        <Link to="/" className="header-button">Home</Link>
        <Link to="/about-us" className="header-button">About Us</Link>
        <Link to="/inscribete" className="header-button">Inscribete</Link>
        <Link to="/horarios" className="header-button">Horarios</Link>
      </nav>
    </header>
  );
};

export default Header;
