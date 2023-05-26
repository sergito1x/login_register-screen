//OPCIONES SI SE ELIGE "DOCENTE"
var alumno = document.getElementById('alumno');
var docente = document.getElementById('docente');
var gradosDocente = document.getElementById('gradosDocente');
var cuadroCursos = document.getElementById('cursoEspecialidad');
var seleccionPresentacion = document.getElementById('presentacionID');

alumno.addEventListener('change', function () {
    gradosDocente.style.display = 'none'; // AL SELECCIONAR "ALUMNO" SE BORRA LAS OPCIONES DE "MAYOR GRADO"
    cuadroCursos.style.display = 'none'; // AL SELECCIONAR "ALUMNO" SE BORRA EL CUADRO DE TEXTO "AGREGAR CURSO"
    seleccionPresentacion.style.display = 'none'; //AL SELECCIONAR "ALUMNO" SE BORRA LA OPCION "PRESENTACION"

});

docente.addEventListener('change', function () {
    gradosDocente.style.display = 'block'; // AL SELECCIONAR "DOCENTE" SE ACTIVA LAS OPCIONES DE "MAYOR GRADO"
    cuadroCursos.style.display = 'block'; //AL SELECCIONAR "DOCENTE" SE ACTIVA EL CUADRO DE TEXTO "AGREGAR CURSO" 
    seleccionPresentacion.style.display = 'block'; //AL SELECCIONAR "DOCENTE" SE ACTIVA LA OPCION "PRESENTACION"

});


//ADJUNTAR FOTO
function adjuntarFoto() {
    document.getElementById("foto").click();
}

function mostrarImagen(event) {
    var archivo = event.target.files[0];
    var reader = new FileReader();

    reader.onload = function (e) {
        var imagenPreview = document.getElementById("fotoPrevia");
        imagenPreview.src = e.target.result;
    };

    reader.readAsDataURL(archivo);
}


//MOSTRAR OPCIONES SEGUN LO QUE SELECCIONAS
function mostrarOpcion(opcion) {
    // Obtener todas las opciones de la tabla
    var opciones = document.querySelectorAll('th');

    // Restaurar el color de letra y el borde del boton inicial al seleccionar otra opcion
    opciones.forEach(function (elemento) {
        elemento.style.color = 'initial';
        elemento.style.borderBottom = 'none';
    });

    // Cambiar el color de letra y borde del boton al seleccionar una opcion
    var opcionSeleccionada = document.querySelector('th[data-opcion="' + opcion + '"]');
    opcionSeleccionada.style.color = 'purple';
    opcionSeleccionada.style.borderBottom = '2px solid purple';

    // Ocultar todos los cuadros de texto al seleccionar otra opcion
    var cuadrosTexto = document.getElementsByClassName('form-group2');
    for (var i = 0; i < cuadrosTexto.length; i++) {
        cuadrosTexto[i].style.display = 'none';
    }

    // Mostrar el cuadro de texto que pertenece a la opcion seleccionada
    var cuadroTexto = document.getElementById(opcion);
    cuadroTexto.style.display = 'block';

}


//CAMBIAR EL FONDO Y COLOR DE TEXTO DEL BOTON "GUARDAR" AL MOMENTO DE PASAR EL MOUSE Y LUEGO VUELVE A SU COLOR NATURAL
function cambiarColorGuardar(colorFondo, colorTexto) {
    var boton = document.querySelector('button');
    boton.style.backgroundColor = colorFondo;
    boton.style.color = colorTexto;
}

//ALERT DEL BOTON GUARDAR 
function guardarAlert() {
    alert("Se ha guardado correctamente");
}