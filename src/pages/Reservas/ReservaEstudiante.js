import React, { useState } from "react";
import Title from "../Login/components/Title/Title.jsx";
import Input from "./components/Input/Input.jsx";
import SwitchButton from "./components/SwitchButton/SwitchButton.jsx";
import DocentesDisponibles from "./components/DocentesDisponibles/DocentesDisponibles.jsx";

import './ReservaEstudiante.css';

const handleInputSearch = () => {
  // Lógica para manejar la búsqueda del input
}

const ReservaEstudiante = () => {
  const [listaDocentes, setListaDocentes] = useState([
    {
        name: 'Pepe',
        university: 'Universidad de Lima',
        course: 'Ingeniería de Sistemas'
    },
    {
        name: 'Steven',
        university: 'Universidad de Lima',
        course: 'Programación Web'
    },
    {
        name: 'Sergio',
        university: 'Universidad de Ibagué',
        course: 'Programación Móvil'
    }
  ]);

  const MapDocentes = (listaDocentes) => {
    return listaDocentes.map((docente) => {
      return (
        <div>
            <DocentesDisponibles docente={docente} className="docentes-container"/>
        </div>
      );
    });
  };

  return (
    <div>
      <Title className='title-container' text='Reserva de Cita'/>
      <hr className='divider'/>
      <div className='search-container'>
        <Input handleChange={handleInputSearch} className="input-search" />
        <h1></h1>
        <SwitchButton className="switch" />
      </div>
      <br />
      {MapDocentes(listaDocentes)}
    </div>
  );
}

export default ReservaEstudiante;
