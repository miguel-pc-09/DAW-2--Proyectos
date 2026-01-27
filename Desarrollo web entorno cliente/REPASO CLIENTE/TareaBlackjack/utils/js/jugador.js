/* Clase jugador (mano, cálculo de puntos y tupo de jugador) */
class Jugador {
  constructor(nombre, esCrupier = false) {
    this.nombre = nombre;
    this.mano = [];
    this.esCrupier = esCrupier;
  }

  tomarCarta(carta) {
    this.mano.push(carta);
  }

  resetearMano() {
    this.mano = [];
  }

  valorMano() {
    let total = this.mano.reduce((acum, carta) => {
      (acum + carta.puntos, 0);
    });
    let ases = this.mano.filter((carta) => {
      carta.valor === "1";
    });
    return total;
  }

  toStrging() {
    const textoCartas = this.mano.map((carta) => {
      carta.toStrging().join(", ");
    });
    return `${this.nombre}: ${textoCartas} (valor: ${this.valorMano()})`;
  }
}
