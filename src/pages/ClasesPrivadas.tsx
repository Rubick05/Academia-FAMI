import React, { useState } from 'react';
import axios from 'axios'; // Importamos Axios
import './ClasesPrivadas.css';

const instructores = [
  { id: 1, nombre: 'Juan Pérez' },
  { id: 2, nombre: 'María Gómez' },
  { id: 3, nombre: 'Carlos Sánchez' },
  { id: 4, nombre: 'Ana López' },
];

const horariosDisponibles = [
  '09:00 - 10:00',
  '10:00 - 11:00',
  '11:00 - 12:00',
  '14:00 - 15:00',
  '15:00 - 16:00',
];

const ClasesPrivadas: React.FC = () => {
  const [instructor, setInstructor] = useState('');
  const [horario, setHorario] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [errors, setErrors] = useState({ instructor: false, horario: false, descripcion: false });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = {
      instructor: !instructor,
      horario: !horario,
      descripcion: !descripcion,
    };
    setErrors(newErrors);

    if (!Object.values(newErrors).some(Boolean)) {
      try {
        const response = await axios.post('http://localhost:5006/api/clases-privadas', {
          instructor,
          horario,
          descripcion,
        });
        alert(response.data.message);
      } catch (error) {
        console.error('Error al registrar la clase privada:', error);
        alert('Hubo un problema al registrar la clase privada.');
      }
    }
  };

  return (
    <section id="clases-privadas" className="clases-privadas-section">
      <h2>Registrar Clase Privada</h2>
      <p>Completa el formulario para agendar una clase privada con uno de nuestros instructores.</p>
      <form onSubmit={handleSubmit} className="clases-privadas-form">
        <div className="form-group">
          <label htmlFor="instructor">Selecciona un Instructor:</label>
          <select id="instructor" value={instructor} onChange={(e) => setInstructor(e.target.value)} required>
            <option value="">Selecciona un instructor</option>
            {instructores.map((inst) => (
              <option key={inst.id} value={inst.nombre}>{inst.nombre}</option>
            ))}
          </select>
          {errors.instructor && <span className="error">Este campo es obligatorio</span>}
        </div>

        <div className="form-group">
          <label htmlFor="horario">Selecciona un Horario:</label>
          <select id="horario" value={horario} onChange={(e) => setHorario(e.target.value)} required>
            <option value="">Selecciona un horario</option>
            {horariosDisponibles.map((hora, index) => (
              <option key={index} value={hora}>{hora}</option>
            ))}
          </select>
          {errors.horario && <span className="error">Este campo es obligatorio</span>}
        </div>

        <div className="form-group">
          <label htmlFor="descripcion">Descripción de la Lección:</label>
          <textarea
            id="descripcion"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            placeholder="Describe lo que deseas aprender"
            required
          />
          {errors.descripcion && <span className="error">Este campo es obligatorio</span>}
        </div>

        <button type="submit" className="submit-button">Registrar</button>
      </form>
    </section>
  );
};

export default ClasesPrivadas;
