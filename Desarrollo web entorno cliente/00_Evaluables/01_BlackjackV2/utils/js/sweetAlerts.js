function alertaDerrotaJugador() {
  Swal.fire({
    icon: "error",
    title: "PERDISTE",
    text: "Has perdido, gana la banca",
  });
}

function alertaVictoriaJugador() {
  Swal.fire({
    title: "FELICIDADES",
    text: "Ganaste a la banca",
    icon: "success",
    draggable: true,
  });
}

function alertaEmpate() {
  Swal.fire({
    title: "EMPATE",
    text: "Vuelve a jugar",
    icon: "question",
  });
}
