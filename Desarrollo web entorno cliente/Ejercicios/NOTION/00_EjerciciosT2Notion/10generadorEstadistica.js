/* Desarrolla una aplicación que solicite al usuario introducir números mediante prompt() hasta que cancele. 
Almacena los números en un array y calcula: suma total, promedio, valor máximo y valor mínimo. 
Recorre el array para obtener estas estadísticas y muestra todos los resultados de forma clara y organizada utilizando SweetAlert. */
alert("Aplicación de estadísticas de números");

// Array donde guardaremos los números
const numeros = [];

// Pedimos números hasta que el usuario cancele
while (true) {
  const entrada = prompt("Introduce un número (Cancelar para terminar):");

  if (entrada === null) {
    // Usuario cancela → salir del bucle
    break;
  }

  const num = parseFloat(entrada);

  if (isNaN(num)) {
    alert("Debes introducir un valor numérico.");
  } else {
    numeros.push(num);
  }
}

// Si el array no está vacío, calculamos las estadísticas poniendo la suma a 0, y los arrays a la posicion 0
if (numeros.length > 0) {
  let suma = 0;
  let maximo = numeros[0];
  let minimo = numeros[0];

  // Recorremos con forEach para saber cual es el maximo y minimo. Se puede hacer con sort()
  numeros.forEach((n) => {
    suma = suma + n;
    if (n > maximo) {
      maximo = n;
    }
    if (n < minimo) {
      minimo = n;
    }
  });

  const promedio = suma / numeros.length;

  // Mostramos resultados con SweetAlert
  let lista = "Números introducidos:\n";
  numeros.forEach((n) => {
    lista += "- " + n + "\n";
  });

  let mensaje =
    "Resultados de la lista de números:\n\n" +
    lista +
    "-----------------------------\n" +
    "Suma total: " +
    suma +
    "\n" +
    "Promedio: " +
    promedio +
    "\n" +
    "Valor máximo: " +
    maximo +
    "\n" +
    "Valor mínimo: " +
    minimo;

  // Muestra final
  Swal.fire(mensaje);
} else {
  alert("No se introdujeron números.");
}
