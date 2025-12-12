/*
  TEMA 2 - VARIABLES Y FUNCIONES
  -----------------------------
  Aquí practico:
  - Variables (let, const)
  - Tipos de datos básicos
  - Operadores
  - Funciones (declaradas y flecha)
  - Parámetros y return
*/

/* =========================
   1) VARIABLES: let y const
   =========================
   - let: variable que puede cambiar su valor
   - const: constante (no se puede reasignar)
*/

let edad = 20;
console.log("Edad inicial:", edad);

edad = 21; // con let sí puedo cambiar el valor
console.log("Edad actualizada:", edad);

const dni = "12345678A";
console.log("DNI:", dni);

// Esto daría error porque const no se puede reasignar:
// dni = "00000000Z";

/* =========================
   2) TIPOS DE DATOS
   =========================
   En JS los tipos más comunes son:
   - string  (texto)
   - number  (números)
   - boolean (true/false)
   - null    (valor vacío intencionado)
   - undefined (sin valor asignado)
*/

const nombre = "Miguel";
const nota = 8.5;
const aprobado = true;

console.log("Nombre:", nombre, "- Tipo:", typeof nombre);
console.log("Nota:", nota, "- Tipo:", typeof nota);
console.log("Aprobado:", aprobado, "- Tipo:", typeof aprobado);

let sinValor;
console.log("sinValor:", sinValor, "- Tipo:", typeof sinValor);

const vacio = null;
console.log("vacio:", vacio, "- Tipo:", typeof vacio); // curiosidad: typeof null sale "object"

/* =========================
   3) OPERADORES
   =========================
   - Aritméticos: + - * / %
   - Comparación: == === != !== > < >= <=
   - Lógicos: && || !
*/

const a = 10;
const b = 3;

console.log("Suma:", a + b);
console.log("Resta:", a - b);
console.log("Multiplicación:", a * b);
console.log("División:", a / b);
console.log("Resto:", a % b);

/*
  IMPORTANTE:
  - == compara "parecido" (convierte tipos si hace falta)
  - === compara "estricto" (mismo valor y mismo tipo)
*/

console.log("5 == '5' =>", 5 == "5"); // true (convierte)
console.log("5 === '5' =>", 5 === "5"); // false (tipo distinto)

/* =========================
   4) CONDICIONALES (if / else)
   ========================= */

const puntos = 17;

if (puntos >= 18) {
  console.log("Eres mayor de edad");
} else {
  console.log("Eres menor de edad");
}

/* =========================
   5) FUNCIONES
   =========================
   Una función es un bloque de código reutilizable.
*/

/* 5.1) Función declarada */
function saludar(persona) {
  // persona es un parámetro
  console.log("Hola " + persona);
}

saludar("Ana");
saludar(nombre);

/* 5.2) Función que devuelve un valor (return) */
function sumar(n1, n2) {
  return n1 + n2;
}

const resultadoSuma = sumar(7, 5);
console.log("Resultado suma:", resultadoSuma);

/* 5.3) Función flecha (arrow function)
   Es otra forma de escribir funciones.
*/
const restar = (n1, n2) => {
  return n1 - n2;
};

console.log("Resultado resta:", restar(10, 4));

/*
  Si es una sola línea, se puede simplificar:
*/
const multiplicar = (n1, n2) => n1 * n2;
console.log("Resultado multiplicar:", multiplicar(3, 6));

/* =========================
   6) EJEMPLO COMPLETO SIMPLE
   =========================
   Pido dos números por prompt, los convierto y saco resultados.
*/

const num1Texto = prompt("Introduce el primer número");
const num2Texto = prompt("Introduce el segundo número");

/*
  prompt devuelve texto, así que convierto a número.
  Number("5") => 5
*/
const num1 = Number(num1Texto);
const num2 = Number(num2Texto);

if (isNaN(num1) || isNaN(num2)) {
  alert("Tienes que introducir números válidos");
  console.log("Error: valores no numéricos");
} else {
  alert(
    "Suma: " +
      sumar(num1, num2) +
      "\nResta: " +
      restar(num1, num2) +
      "\nMultiplicación: " +
      multiplicar(num1, num2)
  );
}
