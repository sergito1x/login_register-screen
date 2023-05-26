import React, { useState } from 'react';
import './MiPerfil.css';

function MiPerfil() {
  const [opcionSeleccionada, setOpcionSeleccionada] = useState('');

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


  
  //Boton guardar
  function guardar() {
    alert('Se ha guardado correctamente');
  }

  return (
    <div>
      <div class="barraSuperior">
          <h1>Atención de Citas</h1>
      </div>
      <div class="barraIzquierda">
        <ul>
          <li>
            <p>Principal</p>
          </li>
          <li>
            <p>Perfil</p>
          </li>
          <li>
            <p>Horario</p>
          </li>
        </ul>
      </div>

      <div class="contenidoPagina">
      <h1>Mi Perfil</h1>
      <button onClick={guardar} class="botonGuardar">Guardar</button>

      <hr className="linea" />
      <h2>Información Personal</h2>
      <table className="grupo">
        <tr>
          <td>
            <p>Nombres</p>
            <input type="text" id="nombre" required />
          </td>
          <td>
            <p>Apellidos</p>
            <input type="text" id="apellido" required />
          </td>

          <td>
            <p>Tipo de Documento</p>
            <input type="text" id="tipoDocumento" required />
          </td>
          <td rowSpan="2">
            <div className="contenedor-imagen">
              <br/>
              <button class="botonAdjuntar">Adjuntar Foto</button>
            </div>
          </td>
        </tr>

        <tr>
          <td>
            <p>Rol</p>
            <input type="text" id="Rol" required />
          </td>

          <td>
          </td>
          
          <td>
            <p>Número de Documento</p>
            <input type="text" id="numero" required />
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
              <p>Agregar Cursos</p>
              <input type="text" required />
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
        <textarea required></textarea>

        <p>Descripción</p>
        <textarea required></textarea>
      </div>

    </div>
    </div>

  );
}

export default MiPerfil;
