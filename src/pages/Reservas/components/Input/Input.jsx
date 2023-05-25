import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

const Input = ({ attribute, handleChange, param, allowDateSelection, children }) => {
  return (
    <div className="input-group">
      <span className="input-group-text">
        {allowDateSelection ? (
          <FontAwesomeIcon icon={faCalendarAlt}/>
        ) : (
          <FontAwesomeIcon icon={faSearch} />
        )}
      </span>
      {allowDateSelection ? (
        <input
          type="date"
          className="form-control"
          placeholder="Seleccionar fecha"
          name={attribute}
          onChange={(e) => handleChange(e.target.name, e.target.value)}
        />
      ) : (
        <input
          type="text"
          className="form-control"
          placeholder="Buscar"
          name={attribute}
          onChange={(e) => handleChange(e.target.name, e.target.value)}
        />
      )}
    </div>
  );
};

export default Input;
