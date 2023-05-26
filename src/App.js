import './App.css';
import React, { useState } from 'react';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import ReservaEstudiante from './pages/Reservas/ReservaEstudiante';
import MisCalificaciones from './pages/MisCalificaciones/MisCalificaciones';
import Horarios from './pages/Horario/Horarios';
import MiPerfil from './pages/MiPerfil/MiPerfil';

function App() {
  const [pantallaValeria, setPantallaValeria] = useState(false);

  const cambiarPantalla = () => {
    setPantallaValeria(!pantallaValeria);
  };

  if (pantallaValeria) {
    return (
      <div>
        <MiPerfil />
      </div>
    );
  } else {
    return (
      <div className="App">
        <button onClick={cambiarPantalla}>Cambiar</button>
        <Register />
        <hr />
        <Login />
        <hr />
        <ReservaEstudiante />
        <hr />
        <MisCalificaciones />
        <hr />
        <Horarios></Horarios>
        <button onClick={cambiarPantalla}>Cambiar</button>
      </div>
    );
  }
}

export default App;
