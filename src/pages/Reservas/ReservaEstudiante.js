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
  const [selectedButton, setSelectedButton] = useState('porNombre');

  const handleChange = (buttonId) => {
    setSelectedButton(buttonId);
    // Realiza cualquier otra lógica que necesites cuando se cambia la selección del botón
    if(buttonId === 'porNombre'){
      console.log('por nombre');
    }
  };

  const nameFilter = useState(false);
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
    },
    {
      name: 'Valentina',
      university: 'Universidad de Lima',
      course: 'Programación Web'
    },
    {
      name: 'Random',
      university: 'Universidad de Lima',
      course: 'Random Course'
    },

  ]);

  const MapDocentes = (listaDocentes) => {
    return listaDocentes.map((docente) => {
      return (
        <div className="docentes-container">
            <DocentesDisponibles docente={docente}/>
        </div>
      );
    });
  };

  return (
    <div>
      <Title className='title-container' text='Reserva de Cita'/>
      <hr className='divider'/>
      <div className='search-container'>
        <Input handleChange={handleInputSearch} className="input-search" allowDateSelection={selectedButton==='porNombre'?false:true}/>
        <h1>&nbsp;</h1>
        <SwitchButton className="switch" selectedButton={selectedButton} handleChange={handleChange}/>
      </div>
      <br />
      {MapDocentes(listaDocentes)}
    </div>
  );
}

export default ReservaEstudiante;
