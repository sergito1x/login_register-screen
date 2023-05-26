import React, { useState } from 'react';
import './Horarios.css';

const Horarios = () => {
  const [dia, setDia] = useState('');
  const [horaInicio, setHoraInicio] = useState('');
  const [horaFin, setHoraFin] = useState('');
  const [bloques, setBloques] = useState([]);

  const crearBloque = () => {
    const texto = `${dia} de: ${horaInicio} a ${horaFin}`;

    const bloque = (
      <div className="block" key={bloques.length}>
        <p>{texto}</p>
        <button onClick={() => eliminarBloque(bloques.length)}>Eliminar</button>
      </div>
    );

    setBloques([...bloques, bloque]);
  };

  const eliminarBloque = (index) => {
    const nuevosBloques = bloques.filter((_, i) => i !== index);
    setBloques(nuevosBloques);
  };

  return (
    <div>
      <div className="navbar">
        <h1 style={{ textAlign: 'center' }}>Atención de Citas</h1>
      </div>
      {/*
      <div className="sidebar">
        <ul>
          <li><a href="google.com">Principal</a></li>
          <li><a href="google.com">Mi perfil</a></li>
          <li><a href="google.com">Salir</a></li>
        </ul>
      </div>
      */}
      <div className="content"> 
        <h1>Mis Horarios</h1>
        <p>Agregue sus horarios de disponibilidad durante la semana</p>
        <form>
          <label htmlFor="dia">Día:</label>
          <input className="inputHorario" type="text" id="dia" name="dia" value={dia} onChange={(e) => setDia(e.target.value)} required />

          <label htmlFor="horaInicio">Hora de Inicio:</label>
          <input className="inputHorario" type="text" id="horaInicio" name="horaInicio" value={horaInicio} onChange={(e) => setHoraInicio(e.target.value)} required />

          <label htmlFor="horaFin">Hora de Fin:</label>
          <input className="inputHorario" type="text" id="horaFin" name="horaFin" value={horaFin} onChange={(e) => setHoraFin(e.target.value)} required />

          <input type="button" value="Agregar" onClick={crearBloque} />
        </form>
        <div id="bloques">{bloques}</div>
      </div>
    </div>
  );
};

export default Horarios;
