/* Crea un juego donde el programa genere un número aleatorio entre 1 y 100. 
El usuario debe adivinarlo usando prompt(). Utiliza operadores de comparación para dar pistas ("mayor" o "menor"). 
Cuenta los intentos y cuando adivine, muestra un mensaje de felicitación con SweetAlert indicando el número de intentos realizados. */

alert("Adivina el número (1 a 100)");
// Math.floor nos dara el numero entero redondeando a la baja.Tanbien pordia ser ROUND(redondeo al mas cercano), CEIL (redondea arriba)
const secreto = Math.floor(Math.random() * 100) + 1; // número entre 1 y 100

let intentos = 0;

while (true) {
  const entrada = prompt("Introduce un número entre 1 y 100:");

  if (entrada === null) {
    alert("Juego cancelado.");
    break;
  }
  // variable para guardar el numero introducido por el usuario, parseando a entero el texto,añadir , 10 al argumento si falla
  const numero = parseInt(entrada);

  // Validación básica
  if (isNaN(numero) || numero < 1 || numero > 100) {
    alert("Debes introducir un número válido entre 1 y 100.");
    continue; // no cuenta intento
  }

  intentos++; // contamos solo intentos válidos

  if (numero === secreto) {
    // Mensaje final con SweetAlert
    Swal.fire(`¡Correcto! El número era ${secreto}. Intentos: ${intentos}`);
    break;
  } else if (numero < secreto) {
    alert("Pista: el número secreto es MAYOR.");
  } else {
    alert("Pista: el número secreto es MENOR.");
  }
}
