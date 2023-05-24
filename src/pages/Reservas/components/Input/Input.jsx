import "./Input.css";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


const Input = ({ attribute, handleChange, param, children }) => {
    return (
        <div className="form-group has-search">
            <p className="form-control-feedback">
                <FontAwesomeIcon icon={faSearch} />
            </p>
            <input 
                type="text" 
                className="form-control"
                placeholder="Buscar"
                onClick={(e) => handleChange(e.target.name, e.target.value)}
            />
        </div>
    );
}

export default Input;
