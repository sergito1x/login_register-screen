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
          name: 'Pepe',
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
          <div className="calificaciones-container">
            <Title className="title-container" text="Mis Calificaciones" />
            <hr className="divide" />
            <div className="row">
              {MapCalificaciones(listaCalificaciones)}
            </div>
          </div>
        </div>
    )
}

export default MisCalificaciones;