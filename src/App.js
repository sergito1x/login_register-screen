import './App.css';
import React, { useState } from 'react';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import ReservaEstudiante from './pages/Reservas/ReservaEstudiante';
import MisCalificaciones from './pages/MisCalificaciones/MisCalificaciones';
import Horarios from './pages/Horarios/Horarios';
import Citas from './pages/Citas/Citas';
import TopBar from './pages/TopBar/TopBar'; // Importamos la TopBar aquí

const App = () => {
  return (
    <Router>
      <TopBar hideOnPaths={["/", "/registro"]}/> {/* Aquí incluimos la TopBar para que esté presente en todas las páginas */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/reserva" element={<ReservaEstudiante />} />
        <Route path="/registro" element={<Register />} />
        <Route path="/calificaciones" element={<MisCalificaciones />} />
        <Route path="/horarios" element={<Horarios />} />
        <Route path="/citas" element={<Citas />} />
      </Routes>
    </Router>
  );
};

export default App;
