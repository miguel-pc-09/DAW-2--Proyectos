/* Crea una aplicación que permita al usuario añadir tareas a un array. 
Utiliza prompt() para solicitar las tareas y un bucle para permitir añadir múltiples tareas.
Cuando el usuario cancele, muestra todas las tareas almacenadas en el array utilizando SweetAlert con formato de lista. */

alert("Bienvenido a tu gestor de tareas");

const tareas = [];

while (true) {
  const entrada = prompt("Que tarea desea añadir");

  if (entrada === null) {
    // podria ser tambien if (entrada == False)?
    break;
  }
  if (entrada.length === 0) {
    alert("Debes introducir una tarea");
  } else {
    tareas.push(entrada);
  }
}
if (tareas.length > 0) {
  let mensaje = "";
  tareas.forEach((t) => {
    mensaje += t + "\n";
  });
  Swal.fire(mensaje);
} else {
  alert("No añadiste tarea");
}
