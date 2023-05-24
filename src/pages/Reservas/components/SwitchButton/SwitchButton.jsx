import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const SwitchButton = () => {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (buttonId) => {
    setSelectedButton(buttonId === selectedButton ? null : buttonId);
  };

  return (
    <div className="btn-group" role="group" aria-label="Basic checkbox toggle button group">
      <input
        type="checkbox"
        className="btn-check"
        id="porNombre"
        autoComplete="off"
        checked={selectedButton === 'porNombre'}
        onChange={() => handleButtonClick('porNombre')}
      />
      <label className={`btn btn-outline-primary ${selectedButton === 'porNombre' ? 'active' : ''}`} htmlFor="porNombre">
        Por Nombre
      </label>

      <input
        type="checkbox"
        className="btn-check"
        id="porFecha"
        autoComplete="off"
        checked={selectedButton === 'porFecha'}
        onChange={() => handleButtonClick('porFecha')}
      />
      <label className={`btn btn-outline-primary ${selectedButton === 'porFecha' ? 'active' : ''}`} htmlFor="porFecha">
        Por Fecha
      </label>
    </div>
  );
};


export default SwitchButton;
