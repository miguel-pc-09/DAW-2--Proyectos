// ===============================
// 1. FUNCIÓN SIMPLE SIN PARÁMETROS
// ===============================

// Declaro una función
function saludar() {
  console.log("Hola");
  // -> Cuando se ejecute, mostrará "Hola"
}

// Llamo a la función
saludar();
// -> Aquí es cuando realmente se ejecuta

// ===============================
// 2. FUNCIÓN CON PARÁMETROS
// ===============================

// Declaro una función que recibe un dato
function saludarPersona(nombre) {
  console.log("Hola " + nombre);
  // -> nombre es un dato que llega desde fuera
}

// Llamo a la función pasando un valor
saludarPersona("Miguel");
// -> nombre = "Miguel"

saludarPersona("Ana");
// -> nombre = "Ana"

// ===============================
// 3. FUNCIÓN CON RETURN
// ===============================

// Declaro una función que devuelve algo
function sumar(a, b) {
  return a + b;
  // -> Devuelve el resultado
}

// Guardo el resultado en una variable
let resultado = sumar(5, 3);

// Muestro el resultado
console.log(resultado);
// -> 8

// ===============================
// 4. FUNCIÓN + INPUT REAL (muy examen)
// ===============================

let numero1 = 10;
let numero2 = 20;

function multiplicar(x, y) {
  return x * y;
}

let resultadoMultiplicacion = multiplicar(numero1, numero2);

console.log(resultadoMultiplicacion);
// -> 200

// ===============================
// 5. FUNCIÓN FLECHA (arrow function)
// ===============================

// Forma moderna de escribir funciones
const restar = (a, b) => {
  return a - b;
};

console.log(restar(10, 4));
// -> 6

// ===============================
// 6. FUNCIÓN FLECHA SIMPLIFICADA
// ===============================

const doble = (numero) => numero * 2;
// -> Si solo hay una línea, no hace falta return

console.log(doble(5));
// -> 10
