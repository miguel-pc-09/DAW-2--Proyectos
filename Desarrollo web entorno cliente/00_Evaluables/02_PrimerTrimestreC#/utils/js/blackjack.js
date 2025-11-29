/* Clase Blackjack (controla la partida y el DOM) */
class Blackjack {
  constructor() {
    this.baraja = null;
    this.jugador = null;
    this.crupier = null;
    this.turnoJugador = false;

    this.tapeteBanca = document.getElementById("tapeteBanca");
    this.tapeteJugador = document.getElementById("tapeteJugador");
    this.puntosBancaSpan = document.getElementById("puntosBanca");
    this.puntosJugadorSpan = document.getElementById("puntosJugador");
    this.nombreJugadorSpan = document.getElementById("nombreJugador");

    this.botonPedir = document.getElementById("botonPedirCarta");
    this.botonPlantarse = document.getElementById("botonMePlanto");
    this.botonNuevaPartida = document.getElementById("botonOtraPartida");

    this.configurarEventos();
  }

  configurarEventos() {
    this.botonPedir.addEventListener("click", () => this.pedirCarta());
    this.botonPlantarse.addEventListener("click", () => this.plantarse());
    this.botonNuevaPartida.addEventListener("click", () => this.nuevaPartida());
  }

  iniciar() {
    const nombre = prompt("Introduce tu nombre") || "Jugador";
    this.nombreJugadorSpan.textContent = nombre.toUpperCase();

    this.jugador = new Jugador(nombre);
    this.crupier = new Jugador("Banca", true);

    this.nuevaPartida();
  }

  nuevaPartida() {
    this.baraja = new Baraja();
    this.jugador.resetearMano();
    this.crupier.resetearMano();

    this.limpiarTapetes();
    this.actualizarMarcadores();

    this.turnoJugador = false;
    this.turnoCrupier();
  }

  turnoCrupier() {
    const carta = this.baraja.sacarCarta();
    if (!carta) {
      return;
    }

    this.crupier.tomarCarta(carta);
    this.pintarCarta(carta, this.tapeteBanca);
    this.actualizarMarcadores();

    if (this.crupier.valorMano() < 17) {
      setTimeout(() => this.turnoCrupier(), 1000);
    } else {
      this.turnoJugador = true;
    }
  }

  pedirCarta() {
    if (!this.turnoJugador) {
      return;
    }

    const carta = this.baraja.sacarCarta();
    if (!carta) {
      return;
    }

    this.jugador.tomarCarta(carta);
    this.pintarCarta(carta, this.tapeteJugador);
    this.actualizarMarcadores();

    if (this.jugador.valorMano() > 21) {
      this.turnoJugador = false;
      this.comprobarResultado();
    }
  }

  plantarse() {
    if (!this.turnoJugador) {
      return;
    }

    this.turnoJugador = false;
    this.comprobarResultado();
  }

  comprobarResultado() {
    const puntosJugador = this.jugador.valorMano();
    const puntosCrupier = this.crupier.valorMano();

    let titulo;
    let texto;
    let icono;

    if (puntosJugador > 21) {
      titulo = "PERDISTE";
      texto = "Te pasaste de 21.";
      icono = "error";
    } else if (puntosCrupier > 21 || puntosJugador > puntosCrupier) {
      titulo = "GANASTE";
      texto = "Has ganado a la banca.";
      icono = "success";
    } else if (puntosJugador === puntosCrupier) {
      titulo = "EMPATE";
      texto = "Habéis quedado igual.";
      icono = "question";
    } else {
      titulo = "PERDISTE";
      texto = "La banca tiene más puntos.";
      icono = "error";
    }

    Swal.fire({
      title: titulo,
      text: texto,
      icon: icono,
    });
  }

  actualizarMarcadores() {
    this.puntosJugadorSpan.textContent = this.jugador.valorMano();
    this.puntosBancaSpan.textContent = this.crupier.valorMano();
  }

  limpiarTapetes() {
    this.tapeteBanca.innerHTML = "";
    this.tapeteJugador.innerHTML = "";
  }

  pintarCarta(carta, tapete) {
    const img = document.createElement("img");
    img.src = carta.rutaImagen;
    tapete.appendChild(img);
  }
}

/* entrada (equivalente a Program.Main en C#) */
document.addEventListener("DOMContentLoaded", () => {
  const juego = new Blackjack();
  juego.iniciar();
});
