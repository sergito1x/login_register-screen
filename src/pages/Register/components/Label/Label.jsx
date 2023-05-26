import React from 'react';
import './Label.css';

    const Label = ({text}) => {
        return (
            <div className="label-container">
                <label className="label" >{text}</label>
            </div>
        );
    }
    
    export default Label; 
