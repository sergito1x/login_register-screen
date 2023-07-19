import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import './Input.css'

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
          id={attribute.search}
          name={attribute.search}
          type="date"
          className="form-control"
          placeholder="Seleccionar fecha"
          onChange={(e) => handleChange(e.target.name, e.target.value)}
        />
      ) : (
        <input
          id={attribute.id}
          name={attribute.id}
          type="text"
          className="form-control"
          placeholder="Buscar"
          onChange={(e) => handleChange(e.target.name, e.target.value)}
        />
      )}
    </div>
  );
};

export default Input;
