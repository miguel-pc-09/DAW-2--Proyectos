/* Clase Baraja (genera, baraja y reparte el mazo) */
class Baraja {
  constructor() {
    this.cartas = [];
    this.crearBaraja();
    this.barajar();
  }

  crearBaraja() {
    const valores = [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K",
    ];
    const palos = [
      { nombre: "Corazones", codigo: "C" },
      { nombre: "Diamantes", codigo: "D" },
      { nombre: "Picas", codigo: "P" },
      { nombre: "Treboles", codigo: "T" },
    ];

    this.cartas = [];

    for (const palo of palos) {
      for (const valor of valores) {
        let puntos;

        if (valor === "1") {
          puntos = 11;
        } else if (["J", "Q", "K", "10"].includes(valor)) {
          puntos = 10;
        } else {
          puntos = Number(valor);
        }

        const ruta = `./utils/img/${valor}${palo.codigo}.png`;
        const carta = new Carta(valor, palo.nombre, puntos, ruta);
        this.cartas.push(carta);
      }
    }
  }
  bajarar() {
    this.cartas = _.suffle(this.cartas);
  }

  sacarCarta() {
    if (this.cartas.length === 0) {
      return null;
    }
    return this.cartas.shift();
  }
}
