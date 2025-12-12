/*
  TEMA 2 - VARIABLES Y FUNCIONES
  -----------------------------
  Apuntes del profesor:
  - Variables: let y const
  - Tipos de datos
  - typeof
  - Conversión de datos
  - Operadores
  - Funciones
*/

/* =========================
   1) VARIABLES
   =========================
   let -> variable que puede cambiar
   const -> constante (no se reasigna)
*/

let edad = 20;
console.log("Edad:", edad);

edad = 21;
console.log("Edad modificada:", edad);

const curso = "DAW";
console.log("Curso:", curso);

/*
  El profesor insiste en que const se use siempre
  que no se vaya a cambiar el valor.
*/

/* =========================
   2) TIPOS DE DATOS
   ========================= */

let nombre = "Miguel"; // string
let nota = 8.5; // number
let aprobado = true; // boolean
let sinDefinir; // undefined
let vacio = null; // null

console.log(nombre, typeof nombre);
console.log(nota, typeof nota);
console.log(aprobado, typeof aprobado);
console.log(sinDefinir, typeof sinDefinir);
console.log(vacio, typeof vacio);

/*
  Curiosidad explicada en clase:
  typeof null devuelve "object"
*/

/* =========================
   3) CONVERSIÓN DE DATOS
   =========================
   prompt siempre devuelve texto
*/

let numeroTexto = prompt("Introduce un número");
let numero = Number(numeroTexto);

console.log("Valor:", numero);
console.log("Tipo:", typeof numero);

/*
  isNaN comprueba si el valor NO es un número
*/

if (isNaN(numero)) {
  alert("No has introducido un número válido");
} else {
  alert("El número introducido es " + numero);
}

/* =========================
   4) OPERADORES
   ========================= */

let a = 10;
let b = 3;

console.log("Suma:", a + b);
console.log("Resta:", a - b);
console.log("Multiplicación:", a * b);
console.log("División:", a / b);
console.log("Resto:", a % b);

/*
  Comparaciones:
  ==  compara valor
  === compara valor y tipo
*/

console.log(5 == "5"); // true
console.log(5 === "5"); // false

/* =========================
   5) CONDICIONALES
   ========================= */

let puntos = 15;

if (puntos >= 18) {
  console.log("Aprobado");
} else {
  console.log("Suspenso");
}

/* =========================
   6) FUNCIONES
   =========================
   Bloques de código reutilizables
*/

/* Función normal */
function saludar(nombrePersona) {
  console.log("Hola " + nombrePersona);
}

saludar("Ana");
saludar(nombre);

/* Función con return */
function sumar(n1, n2) {
  return n1 + n2;
}

let resultado = sumar(4, 6);
console.log("Resultado suma:", resultado);

/* =========================
   7) FUNCIÓN FLECHA
   =========================
   La función flecha (=>) es una forma más corta de escribir funciones.
   No sustituye a las funciones normales, pero se usa mucho en JavaScript moderno.
   El profesor la introduce al final del tema
*/

/*
  Comparación entre función normal y función flecha
*/

/* Función normal */
function multiplicarNormal(n1, n2) {
  return n1 * n2;
}

/* Función flecha */
const multiplicarFlecha = (n1, n2) => {
  return n1 * n2;
};

console.log("Función normal:", multiplicarNormal(3, 4));
console.log("Función flecha:", multiplicarFlecha(3, 4));

/*
  Si la función flecha tiene SOLO una línea
  y devuelve un valor, se puede simplificar:
*/

const multiplicarSimplificada = (n1, n2) => n1 * n2;

console.log("Función flecha simplificada:", multiplicarSimplificada(5, 6));

/*
  El profesor recalca:
  - Las funciones flecha no tienen su propio this
  - Se usan mucho con eventos, arrays y promesas
*/
