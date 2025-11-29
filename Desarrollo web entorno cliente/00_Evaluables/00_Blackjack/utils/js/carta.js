/* Clase Carta  */
class Carta {
  constructor(valor, palo, puntos, rutaImagen) {
    this.valor = valor;
    this.palo = palo;
    this.puntos = puntos;
    this.rutaImagen = rutaImagen;
  }

  toString() {
    return `${this.valor} de ${this.palo}`;
  }
}
