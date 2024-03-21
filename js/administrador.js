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
  dibujarFila(peliculaNueva);
  Swal.fire({
    title: `Pelicula creada!`,

    text: `La pelicula '${peliculaNueva.titulo}' fue creada correctamente`,

    icon: "success",
  });
}

function guardarLocalStorage() {
  localStorage.setItem("listaPeliculasKey", JSON.stringify(pelis));
}

function limpiarFormulario() {
  formularioPelicula.reset();
}

function cargaInicial() {
  if (pelis.length > 0) {
    pelis.map((peli) => dibujarFila(peli));
  }
}

function dibujarFila(peli) {
  const tbody = document.querySelector("#tablaPelicula");
  tbody.innerHTML += `<tr>
                <th scope="row">${peli.id}</th>
                <td>${peli.titulo}</td>
                <td>${peli.descripcion}</td>
                <td><img class="img-fluid rounded thumbnail img-thumbnail" src="${peli.imagen}">
                </td>
                <td>${peli.genero}</td>
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
