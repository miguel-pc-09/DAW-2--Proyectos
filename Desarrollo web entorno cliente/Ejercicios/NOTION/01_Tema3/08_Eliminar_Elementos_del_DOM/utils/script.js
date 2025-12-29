// Seleccionamos todos los botones de eliminar
const botones = document.querySelectorAll(".btnEliminar");

// Recorremos cada botón
botones.forEach((boton) => {
  // Evento click usando función flecha
  boton.addEventListener("click", () => {
    // Accedemos al elemento padre del botón → <li>
    const li = boton.parentNode;

    // Eliminamos directamente el <li> del DOM
    li.remove();
  });
});
