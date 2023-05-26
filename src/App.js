
import './App.css';
import React from 'react';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import ReservaEstudiante from './pages/Reservas/ReservaEstudiante';
import MisCalificaciones from './pages/MisCalificaciones/MisCalificaciones';
import Horarios from './pages/Horario/Horarios'
import MiPerfil from './pages/MiPerfil/MiPerfil';

function App() {
  return (
    <div className="App">
      
     
      <Register />
      <Login />
      <hr/>
      <ReservaEstudiante />
      <hr/>
      <MisCalificaciones />
      <hr/>
      <Horarios></Horarios>
    </div>
  );
}

export default App;
