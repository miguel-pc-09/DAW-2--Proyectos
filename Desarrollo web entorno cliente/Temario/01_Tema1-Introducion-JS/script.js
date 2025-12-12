/*
  TEMA 1 - INTRODUCCIÓN A JAVASCRIPT
  --------------------------------
  En este archivo practico los conceptos básicos de JavaScript:
  - Qué es JavaScript
  - Cómo mostrar mensajes
  - Uso de alert, prompt y console.log
*/

/*
  JavaScript es un lenguaje de programación que se ejecuta en el navegador
  y permite que las páginas web sean interactivas.
*/

/* =========================
   1) alert()
   =========================
   alert muestra un mensaje emergente en pantalla.
   Se suele usar para pruebas o mensajes simples.
*/

alert("Hola, esto es JavaScript funcionando en el navegador");

/* =========================
   2) console.log()
   =========================
   console.log muestra información en la consola del navegador.
   Es muy útil para depurar y ver valores.
*/

console.log("Este mensaje se muestra en la consola");

/* =========================
   3) prompt()
   =========================
   prompt muestra una ventana donde el usuario puede escribir un valor.
   El valor que devuelve siempre es un texto (string).
*/

const nombre = prompt("Introduce tu nombre");

/*
  Compruebo si el usuario ha escrito algo.
  Si pulsa cancelar, prompt devuelve null.
*/

if (nombre !== null && nombre !== "") {
  alert("Bienvenido " + nombre);
  console.log("El usuario se llama: " + nombre);
} else {
  alert("No has introducido ningún nombre");
  console.log("El usuario no ha introducido nombre");
}

/* =========================
   4) Comentarios
   =========================
   - // comentario de una línea
   - /* comentario de varias líneas */
