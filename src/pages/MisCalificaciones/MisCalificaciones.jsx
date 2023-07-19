import { useState } from "react";
import Title from "../Login/components/Title/Title.jsx";
import Calificacion from "./components/Calificacion.jsx";

const MisCalificaciones = () => {
    const [listaCalificaciones, setListaCalificaciones] = useState([
        {
            name: 'Andres',
            date: '23 de abril de 2021',
            rating: 5,
            comment: 'El profesor fue fabuloso'
        },
        {
            name: 'Andres',
            date: '21 de abril de 2022',
            rating: 4,
            comment: 'El profesor fue muy bueno pero no me dedicaba tiempo'
        },

      ]);
    
      const MapCalificaciones = (listaCalificaciones) => {
        return listaCalificaciones.map((object) => {
          return (
            <div className="calificaciones-container">
                <Calificacion object={object}/>
            </div>
          );
        });
      }

      return (
        <div>
            <Title className="title-container" text="Mis Calificaciones" />
            <hr className="divide"/>
            {MapCalificaciones(listaCalificaciones)}
        </div>
    )
}

export default MisCalificaciones;