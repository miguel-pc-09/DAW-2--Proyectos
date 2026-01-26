// Creamos la clase y la llamamos como queramos
// Si queremos trabajar con la erencia, despues de Usuario metemos extends quedando class Usuario extends Algo{}
// Y si quiero trabajar con interfaces, despues de Usuario metemos implements quedando class Usuario implements Algo{}
class Usuario {
  // Para ponerlos privados se utiliza manglin metiendo _ delante de las variables ej: _nombre;
  nombre;
  apellido;
  correo;
  fecha;

  // Creamos los contructores, por defecto tenemos el vacio. Y solo podemos tener un constructor en JS. Si queremos varios jugamos con los getter y setter
  constructor(nombre, apellido, correo, fecha) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.correo = correo;
    this.fecha = fecha;
  }

  // Ahora los getter y setter. Aqui no hace falta la palabra reservada function. Por que si haces un metodo dentro de la clase, ese metodo es de la clase, por lo tanto es una funcion de la clase
  // Asi con cada uno de los elementos de la clase
  // Getter dame el.. Pero aqui en js aunque deje hacerlo, tenemos que decirle que es un getter poniendo delante => get getNombre(){}
  getNombre() {
    return this.nombre;
  }
  // SEtter cambia el..
  setNombre(nombre) {
    this.nombre = nombre;
  }
  getCorreo() {
    return this.correo;
  }
  setCorreo(correo) {
    this.correo = correo;
  }
  // Tienen una diferencia de ser un getter y un setter a un metodo.

  // Metodo mostrarDatos
  mostrarDatos() {
    return `${this.nombre} ${this.apellido}`;
  }

  // El dominio del correo que es lo que esta detras del @
  getDominio() {
    // return this.correo.split("@")[1];
    // o tambien y con truco. Para que salga el substring u otro creamos la variable y asi ya nos sale pero quitamos el this. Luego ya borramos cosa y metemos this.correo
    // let cosa = "asdad@gmail.com";
    // IndexOf busca el @ y nos devuelve la posicion de ej: dasdf@gmail.com nos devuelve del @gmail.com
    return this.correo.substring(this.correo.indexOf("@"));
  }
}
