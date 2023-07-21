import React, { useState } from 'react';
import './MiPerfil.css';
import axios from 'axios';

function MiPerfil() {
  const [opcionSeleccionada, setOpcionSeleccionada] = useState('');
  const [barraVisible, setBarraVisible] = useState(true);

  const mostrarOpcion = (opcion) => {
    // Restaurar el color de letra y el borde del botón inicial al seleccionar otra opción
    const opciones = document.querySelectorAll('th');
    opciones.forEach((elemento) => {
      elemento.style.color = 'initial';
      elemento.style.borderBottom = 'none';
    });

    // Cambiar el color de letra y borde del botón al seleccionar una opción
    const opcionSeleccionada = document.querySelector(`th[data-opcion="${opcion}"]`);
    opcionSeleccionada.style.color = 'purple';
    opcionSeleccionada.style.borderBottom = '2px solid purple';

    // Ocultar todos los cuadros de texto al seleccionar otra opción
    const cTexto = document.getElementsByClassName('grupo2');
    for (let i = 0; i < cTexto.length; i++) {
      cTexto[i].style.display = 'none';
    }

    // Mostrar el cuadro de texto que pertenece a la opción seleccionada
    const cuadroTexto = document.getElementById(opcion);
    cuadroTexto.style.display = 'block';

    // Actualizar el estado con la opción seleccionada
    setOpcionSeleccionada(opcion);
  };

  const adjuntarFoto = () => {
    const fotoInput = document.getElementById('fotoInput');
    fotoInput.click();
  };
  const handleFotoChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      const foto = reader.result;
      setFoto(foto);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };
  const [foto, setFoto] = useState('');
  //Boton guardar
  function handleClick() {
    const nombres = document.getElementById('nombres').value;
    const apellidos = document.getElementById('apellidos').value;
    const tipoDocumento = document.getElementById('tipoDocumento').value;
    const rol = document.getElementById('rol').value;
    const numeroDocumento = document.getElementById('numeroDocumento').value;
    const fotoInput = document.getElementById('fotoInput').value;
    const cursos = document.getElementById('curso').value;
    const universidad = document.getElementById('uni').value;
    const carrera= document.getElementById('carrera').value;
    const titulo= document.getElementById('titulo').value;
    const descripcion= document.getElementById('descripcion').value;

    const usuario = document.getElementById('usuario').value;
    const contraseñaActual = document.getElementById('contraseñaActual').value;
    const contraseñaNueva = document.getElementById('contraseñaNueva').value;
    const contraseñaRepetir = document.getElementById('contraseñaRepetir').value;

    const data = {
      nombres,
      apellidos,
      tipoDocumento,
      rol,
      numeroDocumento,
      fotoInput,
      cursos,
      universidad,
      carrera,
      titulo,
      descripcion,
      usuario,
      contraseñaActual,
      contraseñaNueva,
      contraseñaRepetir,
    };

    let url;
    if (rol === 'docente') {
      url = 'https://trabajofinal-production-d65e.up.railway.app/guardar-actualizar-docente';
    } else if (rol === 'alumno') {
      url = 'https://trabajofinal-production-d65e.up.railway.app/guardar-actualizar-alumno';
    }

    axios.post(url, data)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }


  const toggleBarra = () => {
    setBarraVisible(!barraVisible);
  };
  
  return (
    <div className="contenedorPrincipal">
      
      {/* <div className={`barraIzquierda${barraVisible ? '' : ' oculta'}`}>        
      <ul>
        <li>
          <br></br>
          <p>Principal</p>
        </li>
        <li>
          <p>Perfil</p>
        </li>
        <li>
          <p>Horario</p>
        </li>
      </ul>
      </div> */}

      <div>
        {/* <button className="botonMostrarOcultar" onClick={toggleBarra}>
        <span><hr className="lineaBoton" /></span>
        <span><hr className="lineaBoton" /></span>
        <span><hr className="lineaBoton" /></span>
        </button> */}


        <div className={`barraSuperior${barraVisible ? '' : ' sinBarraIzquierda'}`}>
          <h1>Atención de Citas</h1>
        </div>


      </div>
      <div class="contenidoPagina">
        <h1>Mi Perfil</h1>
        <button onClick={handleClick} class="botonGuardar">Guardar</button>

        <hr className="linea" />
        <h2>Información Personal</h2>
        <table className="grupo">
          <tr>
            <td>
              <p>Nombres</p>
              <input type="text" id="nombres" required />
            </td>
            <td>
              <p>Apellidos</p>
              <input type="text" id="apellidos" required />
            </td>

            <td>
              <p>Tipo de Documento</p>
              <input type="text" id="tipoDocumento" required />
            </td>
            <td rowSpan="2">
              <div className="contenedor-imagen">
                <input type="file" id="fotoInput" accept="image/*" style={{ display: 'none' }} onChange={handleFotoChange} />
                {foto && <img src={foto} alt="Foto adjuntada" />}<br></br>
                <button className="botonAdjuntar" onClick={adjuntarFoto}>Adjuntar Foto</button>

              </div>
            </td>
          </tr>

          <tr>
            <td>
              <p>Rol</p>
              <input type="text" id="rol" required />
            </td>

            <td>
            </td>

            <td>
              <p>Número de Documento</p>
              <input type="number" id="numeroDocumento" required />
            </td>
          </tr>
        </table>

        <br />
        <hr className="linea" />

        <table className="opciones">
          <thead>
            <tr>
              <th data-opcion="datosUsuario"
                onClick={() => mostrarOpcion('datosUsuario')}>
                Datos de Usuario
              </th>
              <th data-opcion="universidad"
                onClick={() => mostrarOpcion('universidad')}>
                Universidad
              </th>
              <th data-opcion="presentacion"
                onClick={() => mostrarOpcion('presentacion')}>
                Presentación
              </th>
            </tr>
          </thead>
        </table>

        <hr className="linea" />

        <div className="grupo2" id="datosUsuario">
          <table className="grupo">
            <tr>
              <td>
                <p>Usuario</p>
                <input type="text" id="usuario" required />
              </td>
            </tr>

            <tr>
              <td>
                <p>Contraseña Actual</p>
                <input type="password" id="contraseñaActual" required />
              </td>

              <td>
                <p>Nueva Contraseña</p>
                <input type="password" id="contraseñaNueva" required />
              </td>

              <td>
                <p>Repetir Contraseña</p>
                <input type="password" id="contraseñaRepetir" required />
              </td>
            </tr>
          </table>
        </div>

        <div className="grupo2" id="universidad">
          <table className="grupo">
            <tr>
              <td>
                <p>Universidad</p>
                <input type="text" id="uni" required />
              </td>
              <td id="cursoEspecialidad">
                <p>Cursos</p>
                <input type="text" id= "curso" required />
              </td>
            </tr>

            <tr>
              <td>
                <p>Carrera</p>
                <input type="text" id="carrera" required />
              </td>
            </tr>

          </table>
        </div>

        <div className="grupo2" id="presentacion">
          <p>Título</p>
          <textarea required id="titulo"></textarea>

          <p>Descripción</p>
          <textarea required id="descripcion"></textarea>
        </div>

      </div>
    </div>

  );
}

export default MiPerfil;