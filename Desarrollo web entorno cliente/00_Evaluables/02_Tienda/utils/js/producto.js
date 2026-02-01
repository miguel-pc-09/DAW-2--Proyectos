class Producto {
  id;
  imagen;
  nombre;
  precio;
  marca;

  /* constructor */
  constructor(id, imagen, nombre, precio, marca) {
    this.id = id;
    this.imagen = imagen;
    this.nombre = nombre;
    this.precio = precio;
    this.marca = marca;
  }

  /* getters */
  getId() {
    return this.id;
  }
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
  setId(id) {
    this.id = id;
  }
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
