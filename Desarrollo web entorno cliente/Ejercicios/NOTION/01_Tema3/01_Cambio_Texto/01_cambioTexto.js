/* Crea una página HTML con un párrafo que contenga un texto inicial. 
Añade un botón que, al hacer clic, cambie el contenido del párrafo utilizando textContent o innerHTML. 
Practica el uso de getElementById() o querySelector() para acceder al elemento.*/

const parrafo = document.getElementById("parrafo");
const boton = document.getElementById("boton");

boton.addEventListener("click", () => {
  parrafo.textContent = "Texto cambiado";
});
