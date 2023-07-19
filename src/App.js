import './App.css';
import React, { useState } from 'react';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReservaEstudiante from './pages/Reservas/ReservaEstudiante';
import MisCalificaciones from './pages/MisCalificaciones/MisCalificaciones';
import Horarios from './pages/Horarios/Horarios';
import MiPerfil from './pages/MiPerfil/MiPerfil';
import Citas from './pages/Citas/Citas';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registro" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
