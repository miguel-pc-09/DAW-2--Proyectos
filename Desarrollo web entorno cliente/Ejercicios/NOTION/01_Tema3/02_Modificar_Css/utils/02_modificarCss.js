/* Crea un div con un color de fondo inicial. 
Añade un botón que, al pulsarlo, cambie el color de fondo del div utilizando la propiedad style. 
Experimenta cambiando también el tamaño de fuente y el color del texto del div. */

let caja = document.getElementById("caja");
let boton = document.getElementById("btnCambiar");

// Evento del clic
boton.addEventListener("click", function () {
  caja.style.backgroundColor = "red";

  caja.style.color = "white";

  caja.style.fontSize = "22px";
});
