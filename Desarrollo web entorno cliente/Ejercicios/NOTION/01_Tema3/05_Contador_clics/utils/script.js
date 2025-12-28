/* Implementa un contador que muestre el número de veces que se ha pulsado un botón. 
Crea un párrafo que muestre el contador inicializado en 0. 
Cada vez que se pulse el botón, incrementa el contador y actualiza el contenido del párrafo utilizando textContent. 
*/

// Inicializamos el contador en 0
let contador = 0;

// Obtenemos los elementos del DOM
let parrafo = document.getElementById("contador");
let boton = document.getElementById("btnContar");

// Evento click del botón
boton.addEventListener("click", function () {
  contador++; // incrementamos el contador
  parrafo.textContent = "Contador: " + contador; // Actualizamos el texto
});
