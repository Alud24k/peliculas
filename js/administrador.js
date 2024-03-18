//Variables
const botonAgregarPelicula = document.querySelector("#btnCrearPelicula");
const modalPelicula = new bootstrap.Modal(
  document.getElementById("modalPelicula")
);

//Funciones
function mostrarModalPelicula() {
  modalPelicula.show();
}

//Logica
botonAgregarPelicula.addEventListener("click", mostrarModalPelicula);
