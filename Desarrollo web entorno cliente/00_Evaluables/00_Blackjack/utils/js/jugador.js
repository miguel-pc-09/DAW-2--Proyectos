/* Clase Jugador (mano, cálculo de puntos y tipo de jugador) */
class Jugador {
  constructor(nombre, esCrupier = false) {
    this.nombre = nombre;
    this.esCrupier = esCrupier;
    this.mano = [];
  }

  tomarCarta(carta) {
    this.mano.push(carta);
  }

  resetearMano() {
    this.mano = [];
  }

  valorMano() {
    let total = this.mano.reduce((acum, carta) => acum + carta.puntos, 0);
    let ases = this.mano.filter((carta) => carta.valor === "1").length;

    while (total > 21 && ases > 0) {
      total -= 10;
      ases--;
    }

    return total;
  }

  toString() {
    const textoCartas = this.mano.map((carta) => carta.toString()).join(", ");
    return `${this.nombre}: ${textoCartas} (Valor: ${this.valorMano()})`;
  }
}
