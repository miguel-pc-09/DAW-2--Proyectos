/* Desarrolla una aplicación que solicite al usuario introducir 5 calificaciones usando prompt(). 
Almacena las calificaciones en un array, calcula el promedio recorriendo el array, y determina si el estudiante ha aprobado (promedio >= 5). 
Muestra el resultado con SweetAlert incluyendo el promedio y el estado (aprobado/suspendido). */

alert("Promedio de calificaciones");

// Array donde guardaremos las 5 notas
const notas = [];

//  Función para calcular el promedio con forEach
function calcularPromedio(lista) {
  let suma = 0;
  lista.forEach((n) => {
    suma = suma + n; // acumulamos
  });
  return suma / lista.length;
}

// Pedimos 5 calificaciones (0 a 10)
while (notas.length < 5) {
  const entrada = prompt("Introduce una calificación (0 - 10):");

  if (entrada === null) {
    alert("Operación cancelada.");
    break;
  }

  // Convertimos a número y validamos rango 0..10
  const nota = parseFloat(entrada);
  // si es numero y mayor o igual a cero y menoro o igual a 10 se guarda
  if (!isNaN(nota) && nota >= 0 && nota <= 10) {
    notas.push(nota);
  } else {
    alert("Debes introducir un número entre 0 y 10."); // En caso de no ser numero
  }
}

// Si hay al menos una nota, calculamos y mostramos
if (notas.length > 0) {
  const promedio = calcularPromedio(notas);
  let estado;
  if (promedio >= 5) {
    estado = "APROBADO";
  } else {
    estado = "SUSPENDIDO";
  }

  // Mensaje con detalle (sin SweetAlert)
  let mensaje = "Notas:\n";
  notas.forEach((n) => {
    mensaje += "- " + n + "\n";
  });
  mensaje += "-------------------\n";
  mensaje += "Promedio: " + promedio + "\n";
  mensaje += "Estado: " + estado;

  alert(mensaje);
} else {
  alert("No se introdujeron calificaciones.");
}
