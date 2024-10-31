import { useState } from 'react';

type Clase = {
    horario: string;
    profesor: string;
    salon: string;
    estilo: string;
    reglas: string;
    nivel: string;
    videoUrl: string;
};

const horariosData: { [dia: string]: Clase[] } = {
    Lunes: [
        { horario: '10:00 - 11:00', profesor: 'Profesor A', salon: 'Salón 1', estilo: 'Ballet', reglas: 'Puntualidad y respeto', nivel: 'Básico', videoUrl: '/videos/ballet.mp4' },
        { horario: '14:00 - 15:00', profesor: 'Profesor B', salon: 'Salón 2', estilo: 'Jazz', reglas: 'Traer botella de agua', nivel: 'Intermedio', videoUrl: '/videos/jazz.mp4' },
    ],
    // Añade más días y horarios...
};

function Horarios() {
    const [diaSeleccionado, setDiaSeleccionado] = useState<string>('Lunes');
    const [detalleClase, setDetalleClase] = useState<string>('');
    const [videoUrl, setVideoUrl] = useState<string>('');

    const handleDiaChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setDiaSeleccionado(e.target.value);
        setDetalleClase('');
        setVideoUrl('');
    };

    const handleHorarioClick = (horario: Clase) => {
        setDetalleClase(
            `Horario: ${horario.horario}\nProfesor: ${horario.profesor}\nSalón: ${horario.salon}\nEstilo: ${horario.estilo}\nNivel: ${horario.nivel}\nReglas: ${horario.reglas}`
        );
        setVideoUrl(horario.videoUrl); // Establecer el video correspondiente
    };

    return (
        <div className="horarios-container">
            <h2 className="horarios-header">Horarios de Clases</h2>
            <div className="select-container">
                <label htmlFor="diaSelect">Selecciona un día:</label>
                <select id="diaSelect" value={diaSeleccionado} onChange={handleDiaChange}>
                    {Object.keys(horariosData).map((dia) => (
                        <option key={dia} value={dia}>
                            {dia}
                        </option>
                    ))}
                </select>
            </div>

            <div className="content-wrapper">
                <div className="horarios-list">
                    {horariosData[diaSeleccionado].map((horario, index) => (
                        <button key={index} onClick={() => handleHorarioClick(horario)} className="horario-button">
                            <strong>{horario.horario}</strong> - {horario.estilo}
                        </button>
                    ))}
                </div>

                <div className="detalle-container">
                    <h3 className="detalle-header">Detalles de la Clase</h3>
                    <textarea value={detalleClase} readOnly className="detalle-textarea" />

                    {videoUrl && (
                        <div className="video-container">
                            <video controls src={videoUrl}></video>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Horarios;
