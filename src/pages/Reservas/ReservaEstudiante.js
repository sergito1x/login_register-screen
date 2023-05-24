import React,{ useState } from "react";
import Title from "./components/Title/Title.jsx";
import Input from "./components/Input/Input.jsx";
import SwitchButton from "./components/SwitchButton/SwitchButton.jsx";

import './ReservaEstudiante.css';

const ReservaEstudiante = () => {
    return (
        <div>
            <Title className='title-container' text='Reserva de Cita'/>
            <hr className='divider'/>
            <div>
                <Input/><SwitchButton/>
            </div>
        </div>
    )
}

export default ReservaEstudiante;