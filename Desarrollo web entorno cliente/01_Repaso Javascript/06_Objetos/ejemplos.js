// ===============================
// 1. CREAR UN OBJETO
// ===============================

let persona = {
  nombre: "Miguel",
  edad: 25,
};

// -> Creo un objeto con dos propiedades

// ===============================
// 2. ACCEDER A PROPIEDADES
// ===============================

console.log(persona.nombre);
// -> Accedo a "Miguel"

console.log(persona.edad);
// -> Accedo a 25

// ===============================
// 3. MODIFICAR PROPIEDADES
// ===============================

persona.edad = 30;
// -> Cambio la edad

console.log(persona.edad);

// ===============================
// 4. AÑADIR NUEVA PROPIEDAD
// ===============================

persona.ciudad = "Madrid";
// -> Añado una nueva propiedad

console.log(persona);

// ===============================
// 5. OBJETO CON MÉTODO
// ===============================

let usuario = {
  nombre: "Ana",
  saludar: function () {
    console.log("Hola soy " + this.nombre);
    // -> this.nombre hace referencia al propio objeto
  },
};

usuario.saludar();

// ===============================
// 6. ARRAY DE OBJETOS (MUY IMPORTANTE)
// ===============================

let alumnos = [
  { nombre: "Miguel", nota: 8 },
  { nombre: "Ana", nota: 6 },
  { nombre: "Luis", nota: 4 },
];

// -> Lista de objetos

// ===============================
// 7. RECORRER OBJETOS
// ===============================

for (let alumno of alumnos) {
  console.log(alumno.nombre);
  console.log(alumno.nota);
}

// ===============================
// 8. OBJETO + CONDICIONAL
// ===============================

for (let alumno of alumnos) {
  if (alumno.nota >= 5) {
    console.log(alumno.nombre + " aprobado");
  } else {
    console.log(alumno.nombre + " suspenso");
  }
}

// ===============================
// 9. OBJETO DENTRO DE OBJETO
// ===============================

let coche = {
  marca: "Seat",
  motor: {
    potencia: 120,
    tipo: "gasolina",
  },
};

console.log(coche.motor.potencia);
// -> Accedo a un objeto dentro de otro

// ===============================
// 10. DESTRUCTURING (más avanzado)
// ===============================

let { nombre, edad } = persona;

console.log(nombre);
console.log(edad);
