/* Crea una aplicación que solicite al usuario dos números mediante prompt() y una operación (+, -, *, /).
 Utiliza alert() para mostrar el resultado de la operación. 
 Asegúrate de validar que los valores introducidos sean números válidos. */

function sumar(a, b) {
  return a + b;
}
function restar(a, b) {
  return a - b;
}
function multiplicar(a, b) {
  return a * b;
}
function dividir(a, b) {
  if (b == 0) {
    return "Error no se puede dividir";
  }
  return a / b;
}
// pedir ahora los numeros
let num1 = Number(prompt("Por favor introduce el primero numero:"));
let num2 = Number(prompt("Por favor introduce el segundo numero:"));
// Pedir la operacion
let operacion = prompt("Eligue la operacion: +  -  *  /");

// validamos que sean numeros
if (isNaN(num1) || isNaN(num2)) {
  alert("Introduce solo numeros");
} else if (operacion == "+") {
  alert(`El resultado de sumar ${num1} + ${num2} = ${+sumar(num1, num2)}`);
} else if (operacion == "-") {
  alert(`El resultado de restar ${num1} - ${num2} = ${restar(num1, num2)}`);
} else if (operacion == "*") {
  alert(
    `El resultado ed multiplicar ${num1} * ${num2} = ${multiplicar(num1, num2)}`
  );
} else if (operacion == "/") {
  alert(`El resultado de dividir ${num1} / ${num2} = ${dividi(num1, num2)}`);
} else {
  alert("Operacion no valida. Usar +  -  *  /");
}
