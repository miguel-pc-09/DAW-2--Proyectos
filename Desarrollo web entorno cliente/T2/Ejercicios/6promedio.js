/* Desarrolla una aplicación que solicite al usuario introducir 5 calificaciones usando prompt(). 
Almacena las calificaciones en un array, calcula el promedio recorriendo el array, y determina si el estudiante ha aprobado (promedio >= 5). 
Muestra el resultado con SweetAlert incluyendo el promedio y el estado (aprobado/suspendido). */

alert("Promedio de calificaciones");

// Array donde guardaremos las 5 notas
const notas = [];

// --- Función para calcular el promedio con forEach ---
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

  if (!isNaN(nota) && nota >= 0 && nota <= 10) {
    notas.push(nota);
  } else {
    alert("Debes introducir un número entre 0 y 10.");
  }
}

// Si hay al menos una nota, calculamos y mostramos
if (notas.length > 0) {
  const promedio = calcularPromedio(notas);
  const estado = promedio >= 5 ? "APROBADO" : "SUSPENDIDO";

  // Mensaje con detalle (sin SweetAlert)
  let mensaje = "Notas:\n";
  notas.forEach((n) => {
    mensaje += "- " + n + "\n";
  });
  mensaje += "-------------------\n";
  mensaje += "Promedio: " + promedio + "\n";
  mensaje += "Estado: " + estado;

  alert(mensaje);

  // Si quieres usar SweetAlert sencillo:
  // Swal.fire("Promedio: " + promedio + "\nEstado: " + estado);
} else {
  alert("No se introdujeron calificaciones.");
}
