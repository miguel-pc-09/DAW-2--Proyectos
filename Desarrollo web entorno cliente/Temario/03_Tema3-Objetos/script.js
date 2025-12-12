/*
  TEMA 3 - OBJETOS
  ----------------
  Aquí practico:
  - Qué es un objeto
  - Objetos literales
  - Propiedades y métodos
  - Uso de this
  - Funciones constructoras
  - Arrays de objetos
*/

/* =========================
   1) ¿QUÉ ES UN OBJETO?
   =========================
   Un objeto agrupa información relacionada.
   Se compone de:
   - Propiedades (datos)
   - Métodos (funciones)
*/

/* =========================
   2) OBJETO LITERAL
   ========================= */

const persona = {
  nombre: "Miguel",
  edad: 21,
  ciudad: "Guadalajara",
  mayorEdad: true,

  // Método dentro del objeto
  saludar: function () {
    console.log("Hola, me llamo " + this.nombre);
  },
};

console.log(persona);
console.log("Nombre:", persona.nombre);
console.log("Edad:", persona.edad);

// Llamo al método
persona.saludar();

/*
  this hace referencia al propio objeto.
  En este caso this.nombre es persona.nombre
*/

/* =========================
   3) MODIFICAR PROPIEDADES
   ========================= */

persona.edad = 22;
persona.ciudad = "Madrid";

console.log("Edad actualizada:", persona.edad);
console.log("Ciudad actualizada:", persona.ciudad);

/*
  También puedo añadir propiedades nuevas
*/
persona.email = "miguel@email.com";
console.log("Email añadido:", persona.email);

/* =========================
   4) ACCESO CON CORCHETES
   =========================
   Útil cuando el nombre de la propiedad es variable
*/

const propiedad = "nombre";
console.log("Acceso con corchetes:", persona[propiedad]);

/* =========================
   5) FUNCIÓN CONSTRUCTORA
   =========================
   Sirve para crear varios objetos del mismo tipo
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
  Uso new para crear objetos a partir del constructor
*/

const alumno1 = new Alumno("Ana", 20, "DAW");
const alumno2 = new Alumno("Carlos", 22, "DAW");

alumno1.mostrarInfo();
alumno2.mostrarInfo();

/* =========================
   6) ARRAYS DE OBJETOS
   =========================
   Muy común para listas de usuarios, productos, etc.
*/

const alumnos = [
  new Alumno("Lucía", 19, "DAW"),
  new Alumno("Mario", 21, "DAW"),
  new Alumno("Sofía", 23, "DAW"),
];

console.log(alumnos);

/*
  Recorro el array con un bucle
*/
for (let i = 0; i < alumnos.length; i++) {
  alumnos[i].mostrarInfo();
}

/* =========================
   7) EJEMPLO PRÁCTICO
   =========================
   Buscar alumnos mayores de 20 años
*/

console.log("Alumnos mayores de 20:");

for (let i = 0; i < alumnos.length; i++) {
  if (alumnos[i].edad > 20) {
    console.log(alumnos[i].nombre);
  }
}
