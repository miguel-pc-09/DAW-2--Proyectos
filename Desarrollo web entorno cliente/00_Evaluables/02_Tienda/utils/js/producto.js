class Producto {
  imagen;
  nombre;
  precio;
  marca;

  /* constructor */
  constructor(imagen, nombre, precio, marca) {
    this.imagen = imagen;
    this.nombre = nombre;
    this.precio = precio;
    this.marca = marca;
  }

  /* getters */
  getImagen() {
    return this.imagen;
  }
  getNombre() {
    return this.nombre;
  }
  getPrecio() {
    return this.precio;
  }
  getMarca() {
    return this.marca;
  }

  /* setters */
  setImagen(imagen) {
    this.imagen = imagen;
  }
  setNombre(nombre) {
    this.nombre = nombre;
  }
  setPrecio(precio) {
    this.precio = precio;
  }
  setMarca(marca) {
    this.marca = marca;
  }
}
