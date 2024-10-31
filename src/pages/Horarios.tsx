
import { useState } from 'react';

type Clase = {
    horario: string;
    profesor: string;
    salon: string;
    estilo: string;
    reglas: string;
    nivel: string;
  };

  const horariosData: { [dia: string]: Clase[] } = {
    Lunes: [
      { horario: '10:00 - 11:00', profesor: 'Profesor A', salon: 'Salón 1', estilo: 'Ballet', reglas: 'Puntualidad y respeto', nivel: 'Básico' },
      { horario: '14:00 - 15:00', profesor: 'Profesor B', salon: 'Salón 2', estilo: 'Jazz', reglas: 'Traer botella de agua', nivel: 'Intermedio' },
    ],
    Martes: [
      { horario: '09:00 - 10:00', profesor: 'Profesor C', salon: 'Salón 3', estilo: 'Hip-hop', reglas: 'Calzado adecuado', nivel: 'Avanzado' },
      { horario: '15:00 - 16:00', profesor: 'Profesor D', salon: 'Salón 4', estilo: 'Bachata', reglas: 'Puntualidad y respeto', nivel: 'Básico' },
    ],
    // Añade más días con sus horarios correspondientes
  };

function Horarios() {
    const [diaSeleccionado, setDiaSeleccionado] = useState<string>('Lunes');
    const [detalleClase, setDetalleClase] = useState<string>('');
  
    const handleDiaChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      setDiaSeleccionado(e.target.value);
      setDetalleClase(''); // Limpiar detalles al cambiar de día
    };
  
    const handleHorarioClick = (horario: Clase) => {
      setDetalleClase(
        `Horario: ${horario.horario}\nProfesor: ${horario.profesor}\nSalón: ${horario.salon}\nEstilo: ${horario.estilo}\nNivel: ${horario.nivel}\nReglas: ${horario.reglas}`
      );
    };
  
    // Función para obtener la abreviatura del nivel
    const getNivelAbreviado = (nivel: string) => {
      switch (nivel) {
        case 'Básico':
          return 'Bas';
        case 'Intermedio':
          return 'Int';
        case 'Avanzado':
          return 'Ava';
        default:
          return nivel;
      }
    };
  
    return (
      <div style={{ padding: '20px' }}>
        <h2>Horarios de Clases</h2>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', marginBottom: '20px' }}>
          <label htmlFor="diaSelect">Selecciona un día:</label>
          <select id="diaSelect" value={diaSeleccionado} onChange={handleDiaChange} style={{ margin: '10px 0', padding: '5px' }}>
            {Object.keys(horariosData).map((dia) => (
              <option key={dia} value={dia}>
                {dia}
              </option>
            ))}
          </select>
        </div>
  
        <div style={{ display: 'flex' }}>
          <div style={{ marginRight: '20px', width: '250px' }}>
            {horariosData[diaSeleccionado].map((horario, index) => (
              <button
                key={index}
                onClick={() => handleHorarioClick(horario)}
                style={{
                  display: 'block',
                  width: '100%',
                  marginBottom: '10px',
                  padding: '15px',
                  backgroundColor: '#007bff',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  textAlign: 'left',
                }}
              >
                <strong>{horario.horario}</strong> - {horario.estilo} ({getNivelAbreviado(horario.nivel)})
              </button>
            ))}
          </div>
          <div>
            <h3>Detalles de la Clase</h3>
            <textarea
              value={detalleClase}
              readOnly
              style={{
                width: '300px',
                height: '150px',
                padding: '10px',
                border: '1px solid #ccc',
                borderRadius: '5px',
              }}
            />
          </div>
        </div>
      </div>
    );
  }
  
  export default Horarios;
  