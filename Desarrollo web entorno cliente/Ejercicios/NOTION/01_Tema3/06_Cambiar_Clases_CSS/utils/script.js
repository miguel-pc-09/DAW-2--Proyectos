/* Crea un elemento div con una clase CSS que defina un estilo específico. 
Añade un botón que, al hacer clic, añada o elimine una clase CSS diferente al div utilizando classList.add(), classList.remove() o classList.toggle(). 
Observa cómo cambia el estilo del elemento. 
*/

// Obtener los elementos
let caja = document.getElementById("caja");
let boton = document.getElementById("btnCambiar");

// Evento click
boton.addEventListener("click", function () {
  // Añade o elemina la clase
  caja.classList.toggle("caja-activa");
});
