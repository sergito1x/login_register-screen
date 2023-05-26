import React,{useState} from 'react';
import './Calificacion.css'
import { faRankingStar } from '@fortawesome/free-solid-svg-icons';

const Calificacion = ({object}) => {
    return (
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">{object.name}</h5>
                <h6 class="card-text">{object.date}</h6>
                <p className='comment'>{object.comment}</p>
                <a>{object.rating} estrellas</a>
            </div>
        </div>
    )
}

export default Calificacion;