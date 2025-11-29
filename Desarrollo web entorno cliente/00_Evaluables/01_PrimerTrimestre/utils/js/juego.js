// JUEGO CON FUNCIONES
let turnoBanca = false;
let turnoPlayer = false;
let finPartida = false;

let blackJack = new BlackJack();

let names = prompt("Introduce tu nombre");
if (names == "" || names === null) {
  names = "JUGADOR";
}

function limpiarTablero() {
  document.querySelector("#tapetePlayer").innerHTML = "";
  document.querySelector("#tapeteBanca").innerHTML = "";
  document.querySelector("#puntosPlayer").textContent = "0";
  document.querySelector("#puntosBanca").textContent = "0";

  const oneMoreButton = document.querySelector("#oneMore");
  const stopButton = document.querySelector("#stop");
  const partidaNueva = document.querySelector("#jugarMas");
  oneMoreButton.replaceWith(oneMoreButton.cloneNode(true));
  stopButton.replaceWith(stopButton.cloneNode(true));
  partidaNueva.replaceWith(partidaNueva.cloneNode(true));
}

function iniciarJuego() {
  limpiarTablero();
  blackJack.crearBaraja();
  blackJack.barajearMazo();

  banca = new Banca(blackJack.baraja);
  player = new Player(names, blackJack.baraja);

  jugarBanca();
}

function jugarBanca() {
  banca.sacarCartasBanca();
  jugarJugador();
}

function jugarJugador() {
  player.sacarCartasManual();
  player.plantarse();
  player.jugarOtra();
}

window.onload = function () {
  iniciarJuego();
};
