import React, { useState, useEffect } from 'react';
import './Horarios.css';

function Horarios() {
  const [horarios, setHorarios] = useState([]);
  const [dia, setDia] = useState('');
  const [horaInicio, setHoraInicio] = useState('');
  const [horaFin, setHoraFin] = useState('');
  const [enlace, setEnlace] = useState('');
  const [resultado, setResultado] = useState('');

  useEffect(() => {
    obtenerHorarios();
  }, []);

  function obtenerHorarios() {
    fetch('http://localhost:3001/listar-horarios')
      .then(response => response.json())
      .then(data => setHorarios(data))
      .catch(error => console.log(error));
  }

  function procesarDato(data) {
    setResultado(data);
    obtenerHorarios();
  }

  function handleClick() {
    const URL = `http://localhost:3001/guardar-horario/${dia}/${horaInicio}/${horaFin}/${enlace}`;

    fetch(URL)
      .then(response => response.text())
      .then(procesarDato)
      .catch(error => console.log(error));
  }

  function eliminarHorario(horarioId) {
    const URL = `http://localhost:3001/eliminar-horario/${horarioId}`;

    fetch(URL)
      .then(response => response.text())
      .then(procesarDato)
      .catch(error => console.log(error));
  }

  return (
    <div className="container">
      <h1 className="title">Mis Horarios</h1>
      <p className="subtitle">Agregue sus horarios de disponibilidad durante la semana</p>
      <div className="form-container">
        <div className="form-group">
          <label htmlFor="dia">Día:</label>
          <input type="text" id="dia" value={dia} onChange={e => setDia(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="horaInicio">Hora Inicio:</label>
          <input type="time" id="horaInicio" value={horaInicio} onChange={e => setHoraInicio(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="horaFin">Hora Fin:</label>
          <input type="time" id="horaFin" value={horaFin} onChange={e => setHoraFin(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="enlace">Enlace:</label>
          <input type="text" id="enlace" value={enlace} onChange={e => setEnlace(e.target.value)} />
        </div>
        <button className="btn" onClick={handleClick}>Guardar</button>
        <span className="resultado">{resultado}</span>
      </div>

      <h3 className="horarios-title">Horarios disponibles</h3>
      <table className="horarios-table">
        <thead>
          <tr>
            <th>Día</th>
            <th>Hora Inicio</th>
            <th>Hora Fin</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {horarios.map(horario => (
            <tr key={horario.horarioId}>
              <td>{horario.dia}</td>
              <td>{horario.horaInicio}</td>
              <td>{horario.horaFin}</td>
              <td>
                <button className="btn-eliminar" onClick={() => eliminarHorario(horario.horarioId)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Horarios;
