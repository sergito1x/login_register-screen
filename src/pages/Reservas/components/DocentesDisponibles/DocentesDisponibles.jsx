import React from 'react';
import './DocentesDisponibles.css'
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const DocentesDisponibles = ({docente}) => {
    return (
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">{docente.name}</h5>
                <p class="card-text">{docente.university} - {docente.course}</p>
                <a href="#" class="btn btn-primary"> &gt; </a>
            </div>
        </div>
    )
}

export default DocentesDisponibles