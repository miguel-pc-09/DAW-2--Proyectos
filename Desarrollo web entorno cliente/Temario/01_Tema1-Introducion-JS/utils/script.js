/*
  TEMA 1 - INTRODUCCIÓN A JAVASCRIPT
  --------------------------------
  Apuntes del profesor:
  - Qué es JavaScript
  - Dónde se ejecuta
  - Cómo se enlaza con HTML
  - Primeras instrucciones
  - alert, prompt y console.log
*/

/*
  JavaScript es un lenguaje de programación que se ejecuta
  principalmente en el navegador.
  Nos permite añadir lógica a las páginas web.
*/

/* =========================
   1) PRIMERA PRUEBA
   =========================
   Si este alert aparece, significa que el JS está bien enlazado.
*/

alert("JavaScript está funcionando correctamente");

/* =========================
   2) console.log()
   =========================
   Sirve para mostrar información en la consola del navegador.
   Es fundamental para depurar y comprobar valores.
*/

console.log("Mensaje mostrado en la consola");

/* =========================
   3) VARIABLES
   =========================
   En JavaScript puedo guardar información en variables.
*/

let mensaje = "Hola desde una variable";
console.log(mensaje);

/* =========================
   4) prompt()
   =========================
   prompt muestra una ventana donde el usuario puede escribir datos.
   Siempre devuelve texto (string) o null si se pulsa cancelar.
*/

let nombre = prompt("Introduce tu nombre");

/*
  El profesor explica que siempre hay que comprobar
  lo que devuelve prompt.
*/

if (nombre === null || nombre === "") {
  alert("No has introducido ningún nombre");
  console.log("El usuario no ha escrito nombre");
} else {
  alert("Bienvenido " + nombre);
  console.log("Nombre introducido:", nombre);
}

/* =========================
   5) COMENTARIOS
   =========================
   - // comentario de una línea
   - /* comentario de varias líneas */
