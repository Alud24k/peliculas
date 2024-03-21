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

function cargaInicial() {
  if (pelis.length > 0) {
    pelis.map((pelicula) => dibujarFila());
  }
}

function dibujarFila() {
  const tbody = document.querySelector("#tablaPelicula");
  tbody.innerHTML += `<tr>
                <th scope="row">1</th>
                <td>Kung Fu Panda 4</td>
                <td class="col-descripcion">
                  Po, quien se convertirá en el Maestro Espiritual del Valle de
                  la Paz, busca a su sucesor como el nuevo Guerrero Dragón
                  mientras lucha contra una nueva enemiga llamada "La Camaleona"
                </td>
                <td>
                  <img
                    class="img-thumbnail rounded img-fluid thumbnail"
                    src="https://pics.filmaffinity.com/kung_fu_panda_4-159494298-large.jpg"
                  />
                </td>
                <td>Animación</td>
                <td>
                  <button
                    class="btn btn-warning"
                    onclick=""
                  >
                    <i class="bi bi-pencil-square fs-4"></i>
                  </button>
                  <button
                    class="btn btn-danger"
                    onclick=""
                  >
                    <i class="bi bi-x-square fs-4"></i>
                  </button>
                </td>
              </tr>`;
}

//Logica
botonAgregarPelicula.addEventListener("click", mostrarModalPelicula);
formularioPelicula.addEventListener("submit", administrarFormularioPelicula);
cargaInicial();
