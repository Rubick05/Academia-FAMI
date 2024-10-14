// src/pages/Inscribete.tsx
import React from 'react';
import './Inscribete.css';

const Inscribete: React.FC = () => {
  return (
    <section id="inscribete" className="inscribete-section">
      <h2>Inscribete</h2>
      <p>
        ¡Únete a nuestra comunidad de danza! Completa el formulario a continuación para inscribirte en nuestras clases.
      </p>
      <form className="inscribete-form">
        <div className="form-group">
          <label htmlFor="name">Nombre Completo:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Correo Electrónico:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="class">Clase de Interés:</label>
          <select id="class" name="class" required>
            <option value="">Selecciona una clase</option>
            <option value="ballet">Ballet</option>
            <option value="hip-hop">Hip-Hop</option>
            <option value="salsa">Salsa</option>
            <option value="modern">Danza Moderna</option>
          </select>
        </div>
        <button type="submit" className="submit-button">Enviar</button>
      </form>
    </section>
  );
};

export default Inscribete;
