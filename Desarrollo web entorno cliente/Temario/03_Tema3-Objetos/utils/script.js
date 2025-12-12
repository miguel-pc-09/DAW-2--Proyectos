/*
  TEMA 3 - OBJETOS
  ----------------
  Apuntes del profesor:
  - Qué es un objeto
  - Propiedades y métodos
  - Objeto literal
  - Uso de this
  - Modificar objetos
  - Función constructora
  - Arrays de objetos
*/

/* =========================
   1) ¿QUÉ ES UN OBJETO?
   =========================
   Un objeto es una estructura que permite agrupar datos
   relacionados bajo un mismo nombre.

   Un objeto está formado por:
   - Propiedades: datos
   - Métodos: funciones
*/

/*
  Ejemplo de objeto de la vida real:
  Una persona tiene nombre, edad y puede saludar.
*/

/* =========================
   2) OBJETO LITERAL
   =========================
   Es la forma más simple de crear un objeto.
*/

const persona = {
  nombre: "Miguel",
  edad: 21,
  ciudad: "Guadalajara",
  mayorEdad: true,

  saludar: function () {
    console.log("Hola, me llamo " + this.nombre);
  },
};

console.log(persona);

/*
  Acceso a propiedades:
  - objeto.propiedad
*/

console.log("Nombre:", persona.nombre);
console.log("Edad:", persona.edad);

/*
  Llamada a método
*/
persona.saludar();

/* =========================
   3) THIS
   =========================
   this hace referencia al objeto que está usando el método.
   El profesor insiste mucho en esto.
*/

console.log("Uso de this:", persona.nombre);

/* =========================
   4) MODIFICAR OBJETOS
   =========================
   Las propiedades se pueden modificar y añadir.
*/

persona.edad = 22;
persona.email = "miguel@email.com";

console.log("Edad modificada:", persona.edad);
console.log("Email añadido:", persona.email);

/*
  También se pueden borrar propiedades con delete
*/

delete persona.mayorEdad;
console.log(persona);

/* =========================
   5) ACCESO CON CORCHETES
   =========================
   Se usa cuando el nombre de la propiedad es variable.
*/

let propiedad = "ciudad";
console.log("Ciudad:", persona[propiedad]);

/* =========================
   6) FUNCIÓN CONSTRUCTORA
   =========================
   Sirve para crear varios objetos del mismo tipo.
   Se usa la palabra clave new.
*/

function Alumno(nombre, edad, curso) {
  this.nombre = nombre;
  this.edad = edad;
  this.curso = curso;

  this.mostrarInfo = function () {
    console.log(
      "Alumno: " +
        this.nombre +
        " | Edad: " +
        this.edad +
        " | Curso: " +
        this.curso
    );
  };
}

/*
  Creación de objetos a partir del constructor
*/

const alumno1 = new Alumno("Ana", 20, "DAW");
const alumno2 = new Alumno("Carlos", 22, "DAW");

alumno1.mostrarInfo();
alumno2.mostrarInfo();

/* =========================
   7) ARRAYS DE OBJETOS
   =========================
   Muy usados para listas de usuarios, productos, etc.
*/

const alumnos = [
  new Alumno("Lucía", 19, "DAW"),
  new Alumno("Mario", 21, "DAW"),
  new Alumno("Sofía", 23, "DAW"),
];

/*
  Recorro el array con un bucle
*/

for (let i = 0; i < alumnos.length; i++) {
  alumnos[i].mostrarInfo();
}

/* =========================
   8) EJEMPLO PRÁCTICO (EXAMEN)
   =========================
   Buscar alumnos mayores de 20 años
*/

console.log("Alumnos mayores de 20:");

for (let i = 0; i < alumnos.length; i++) {
  if (alumnos[i].edad > 20) {
    console.log(alumnos[i].nombre);
  }
}

/*
  El profesor recalca:
  - Los objetos organizan mejor el código
  - Permiten trabajar con estructuras más reales
  - Son clave para proyectos grandes
*/
