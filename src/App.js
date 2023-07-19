import './App.css';
import React, { useState } from 'react';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import ReservaEstudiante from './pages/Reservas/ReservaEstudiante';
import MisCalificaciones from './pages/MisCalificaciones/MisCalificaciones';
import Horarios from './pages/Horario/Horarios';
import MiPerfil from './pages/MiPerfil/MiPerfil';
import Citas from './pages/Citas/App';

function App() {
  const [pantallaValeria, setPantallaValeria] = useState(false);
  const [pantallaRodrigo, setPantallaRodrigo] = useState(false);

  const cambiarPantalla = () => {
    setPantallaValeria(!pantallaValeria);
  };

  const cambiarPantallaR = () => {
    setPantallaRodrigo(!pantallaRodrigo);
  };

  if (pantallaValeria) {
    return (
      <div>
        <MiPerfil />
      </div>
    );
  }
  
    return (
      <div className="App">
        <ReservaEstudiante></ReservaEstudiante>
        {/* <button onClick={cambiarPantalla}>Cambiar</button>
        <Register />
        <hr />
        <Login />
        <hr />
        <ReservaEstudiante />
        <hr />
        <MisCalificaciones />
        <hr />
        <Horarios></Horarios>
        <button onClick={cambiarPantalla}>Valeria</button> */}
      </div>
    );
  }

export default App;
