
import './App.css';
import React from 'react';
import Login from './pages/Login/Login';
import ReservaEstudiante from './pages/Reservas/ReservaEstudiante';
import MisCalificaciones from './pages/MisCalificaciones/MisCalificaciones';
import Horarios from './pages/Horario/Horarios'

function App() {
  return (
    <div className="App">
      
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
