import "./Input.css";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Input = ({ attribute, handleChange, param, children }) => {
    return (
        <fieldset>
            <legend>Búsqueda</legend>
            <div className="form-group has-search">
                <span className="form-control-feedback">
                    <FontAwesomeIcon icon={faSearch} />
                </span>
                <input 
                    type="text" 
                    className="form-control"
                    placeholder="Buscar"
                    onClick={(e) => handleChange(e.target.name, e.target.value)}
                />
            </div>
        </fieldset>
    );
}

export default Input;
