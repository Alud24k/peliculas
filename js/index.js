function cargaInicial() {
  const peliculasGuardadas = JSON.parse(
    localStorage.getItem("listaPeliculasKey")
  );

  if (peliculasGuardadas && peliculasGuardadas.length > 0) {
    peliculasGuardadas.forEach((peli) => dibujarGrilla(peli));
  }
}

function dibujarGrilla(peli) {
  const grilla = document.getElementById("grilla");

  const cardDiv = document.createElement("div");
  cardDiv.classList.add("col-md-4", "col-lg-3", "mb-3");

  cardDiv.innerHTML = `
    <div class="card h-100">
      <img
        src="${peli.imagen}"
        class="card-img-top"
        alt="${peli.titulo}"
      />
      <div class="card-body">
        <h5 class="card-title">${peli.titulo}</h5>
      </div>
      <div class="card-footer text-end">
        <a class="btn btn-primary" href="../pages/detalle.html">Ver detalle</a>
      </div>
    </div>
  `;

  grilla.appendChild(cardDiv);
}

document.addEventListener("DOMContentLoaded", function () {
  cargaInicial();
});
