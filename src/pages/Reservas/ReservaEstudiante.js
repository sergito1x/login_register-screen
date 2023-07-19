import React, { useState, useEffect } from "react";
import Title from "../Login/components/Title/Title.jsx";
import Input from "./components/Input/Input.jsx";
import SwitchButton from "./components/SwitchButton/SwitchButton.jsx";
import DocentesDisponibles from "./components/DocentesDisponibles/DocentesDisponibles.jsx";
import { format, isValid } from 'date-fns';
import { es } from "date-fns/locale";

import './ReservaEstudiante.css';

const ReservaEstudiante = () => {
  const [selectedButton, setSelectedButton] = useState('porNombre');
  const [inputValue, setInputValue] = useState("");
  const [listaDocentes, setListaDocentes] = useState([])

  useEffect(() => {
    handleServer(); // Realiza el fetch cuando el componente se monta
  }, []);

  useEffect(() => {
    handleServer(); // Realiza el fetch cuando el valor de inputValue cambie
  }, [inputValue]);
  
  const handleChange = (buttonId) => {
    setSelectedButton(buttonId);
  };
  
  const handleServer = () => {
    if (selectedButton === 'porNombre') {
      // Realiza la llamada al servidor solo cuando se busca por nombre
      fetch(`https://backend-prograweb-production-fff8.up.railway.app/docentes-disponibles`,
        {
          method: 'POST', 
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify({ search: inputValue })
        })
        .then(check)
        .then(response => response.json())
        .then(showData)
        .catch(handleError)
    }
  }

  const handleServerByDate = (dayOfWeek) => {
    // Realiza la llamada al servidor solo cuando se busca por fecha
    fetch(`https://backend-prograweb-production-fff8.up.railway.app/docentes-disponibles`,
      {
        method: 'POST', 
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ fecha: dayOfWeek })
      })
      .then(check)
      .then(response => response.json())
      .then(showData)
      .catch(handleError)
  }
  
  const check = (response) => { 
    if(!response.ok) throw Error("Error: " + response.statusText) 
    return response;
  }
  
  const showData = (data) => {
    setListaDocentes(data)
  }
  
  const handleError = (error) => {
    console.log(error)
  }  
  
  const handleInputSearch = (name, value) => {
    setInputValue(value);
    if (selectedButton === 'porFecha') {
      // Verifica si el valor es una fecha válida antes de formatearlo
      const selectedDate = new Date(value);
      const currentDate = new Date();

      if (isValid(selectedDate)) {
        if (selectedDate < currentDate) {
          alert('Error: La fecha seleccionada debe ser posterior a la fecha actual.');
          return; // No realizar la búsqueda si hay un error
        }
        selectedDate.setDate(selectedDate.getDate() + 1)
        // Convierte la fecha seleccionada en el día de la semana (en español)
        const dayOfWeek = format(selectedDate, 'EEEE', { locale: es });
        // Realiza la llamada al servidor por fecha
        alert(dayOfWeek)
        handleServerByDate(dayOfWeek);
      } else {
        // Si el valor no es una fecha válida, realiza la búsqueda por nombre
        handleServer();
      }
    }
  }

  const MapDocentes = () => {
    return listaDocentes.map((docente) => {
      return (
        <div className="docentes-container" key={docente.id}>
          <DocentesDisponibles docente={docente} />
        </div>
      );
    });
  };

  return (
    <div>
      <Title className='title-container' text='Reserva de Cita' />
      <hr className='divider' />
      <div className='search-container'>
        <Input
          attribute={{ id: 'search' }}
          handleChange={handleInputSearch}
          value={inputValue}
          className="input-search"
          allowDateSelection={selectedButton === 'porNombre' ? false : true} />
        <h1>&nbsp;</h1>
        <SwitchButton className="switch" selectedButton={selectedButton} handleChange={handleChange} />
      </div>
      <br />
      {MapDocentes()}
    </div>
  );
}

export default ReservaEstudiante;
