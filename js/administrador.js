import Pelicula from "./classPelicula.js";

//Variables
const botonAgregarPelicula = document.querySelector("#btnCrearPelicula");
const modalPelicula = new bootstrap.Modal(
  document.getElementById("modalPelicula")
);
let crearPelicula = true;
const formularioPelicula = document.querySelector("#formPelicula");
const codigo = document.querySelector("#codigo");
const titulo = document.querySelector("#titulo");
const descripcion = document.querySelector("#descripcion");
const anio = document.querySelector("#anio");
const reparto = document.querySelector("#reparto");
const director = document.querySelector("#director");
const imagen = document.querySelector("#imagen");
const genero = document.querySelector("#genero");
const pais = document.querySelector("#pais");
const duracion = document.querySelector("#duracion");
const pelis = JSON.parse(localStorage.getItem("listaPeliculasKey")) || [];

//Funciones
function mostrarModalPelicula() {
  crearPelicula = true;
  modalPelicula.show();
}

function administrarFormularioPelicula(e) {
  e.preventDefault();

  if (crearPelicula) {
    creandoPelicula();
  } else {
  }
}

function creandoPelicula() {
  const peliculaNueva = new Pelicula(
    titulo.value,
    descripcion.value,
    imagen.value,
    genero.value,
    anio.value,
    duracion.value,
    pais.value,
    reparto.value,
    director.value
  );
  console.log(peliculaNueva);
  pelis.push(peliculaNueva);
  guardarLocalStorage();
  limpiarFormulario();
}

function guardarLocalStorage() {
  localStorage.setItem("listaPeliculasKey", JSON.stringify(pelis));
}

function limpiarFormulario() {
  formularioPelicula.reset();
}

//Logica
botonAgregarPelicula.addEventListener("click", mostrarModalPelicula);
formularioPelicula.addEventListener("submit", administrarFormularioPelicula);
