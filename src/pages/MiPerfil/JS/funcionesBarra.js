function verPagina(nombrePagina) {
    var paginas = document.getElementsByClassName('pagina');
    for (var i = 0; i < paginas.length; i++) {
        paginas[i].style.display = 'none';
    }

    var paginaSeleccionada = document.getElementById(nombrePagina);
    paginaSeleccionada.style.display = 'block';
}
