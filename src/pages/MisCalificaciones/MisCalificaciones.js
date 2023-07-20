import { useState } from "react";
import Title from "../Login/components/Title/Title.jsx";
import Calificacion from "./components/Calificacion.jsx";

const MisCalificaciones = () => {
    const [listaCalificaciones, setListaCalificaciones] = useState([]);
      const check = (response) => { 
        if(!response.ok) throw Error("Error: " + response.statusText) 
        return response;
      }

      window.onload = () => {
        fetch('https://backend-prograweb-production-fff8.up.railway.app/calificaciones')
          .then(check)
          .then((response) => response.json())
          .then((data) => {setListaCalificaciones(data)})
          .catch((error) => console.log(error));
      }
    
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