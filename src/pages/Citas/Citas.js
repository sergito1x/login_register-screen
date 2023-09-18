import React, { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import './Citas.css';

function Citas() {
  const [citas, setCitas] = useState([]);
  const [citasProgramadas, setCitasProgramadas] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://backend-prograweb-production-fff8.up.railway.app/mostrar-citas")
      .then(response => response.json())
      .then(data => setCitas(data))
      .catch(error => console.log(error));
  }, []);

  const handleCancelarCita = (id) => {
    fetch(`https://backend-prograweb-production-fff8.up.railway.app/eliminar-cita/${id}`)
      .then(response => response.text())
      .then(data => {
        console.log(data);
        // Actualizar la lista de citas después de eliminar la cita
        setCitas(citas.filter(cita => cita.CitasID !== id));
      })
      .catch(error => console.log(error));
  };

  const handleVerCitasProgramadas = () => {
    setCitasProgramadas(true);
  };

  const handleVerCitasPasadas = () => {
    setCitasProgramadas(false);
  };

  const handleProgramar = () => {
    navigate('/reserva');
  }

  return (
    <div className="app">
      <h1 className="title">Mis citas</h1>
      <h3 className="subtitle" style={{ color: "#283641" }}>Citas de asesorías reservadas:<br /></h3>

      {citas.length > 0 ? (
        citas
          .filter(cita => (citasProgramadas ? cita.Estado === "Programado" : cita.Estado === "Pasado"))
          .map(cita => (
            <div key={cita.CitasID} className="cita">
              <p>
                <strong>Profesor:</strong> {cita.Profesor}
                <br />
                <strong>Día de la semana:</strong> {cita.DiaSemana}
                <br />
                <strong>Hora de inicio:</strong> {cita.HoraInicio}
                <br />
                <strong>Curso:</strong> {cita.Curso}
                <br />
                <strong>Enlace de Zoom:</strong> {cita.Enlace}
                <br /><br />
              </p>
              {citasProgramadas ? (
                <button className="cancel-button" onClick={() => handleCancelarCita(cita.CitasID)}>Cancelar</button>
              ) : (
                <button className="calificar-button">Calificar</button>
              )}
            </div>
          ))
      ) : (
        <p className="no-citas">Actualmente no tienes citas de asesoría reservadas.</p>
      )}

      <div className="button-group">
        {citasProgramadas ? (
          <button className="toggle-button" onClick={handleVerCitasPasadas}>Ver Citas Pasadas</button>
        ) : (
          <button className="toggle-button" onClick={handleVerCitasProgramadas}>Ver Citas Programadas</button>
        )}
        <button className="programar-button" onClick={handleProgramar}>Programar Cita</button>
      </div>
    </div>
  );
}

export default Citas;
