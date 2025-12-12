/*
  TEMA 5 - EVENTOS
  ----------------
  Apuntes del profesor:
  - Qué es un evento
  - addEventListener
  - Eventos de click
  - Eventos de input
  - Eventos de submit
  - Objeto event
  - preventDefault
*/

/* =========================
   1) ¿QUÉ ES UN EVENTO?
   =========================
   Un evento ocurre cuando el usuario interactúa
   con la página (click, escribir, enviar formulario, etc.)
*/

/* =========================
   2) SELECCIÓN DE ELEMENTOS
   ========================= */

const btnClick = document.getElementById("btnClick");
const inputTexto = document.getElementById("inputTexto");
const salidaTexto = document.getElementById("salidaTexto");
const formulario = document.getElementById("formulario");
const nombreInput = document.getElementById("nombre");

/* =========================
   3) EVENTO CLICK
   =========================
   Se ejecuta cuando el usuario hace click en un elemento
*/

btnClick.addEventListener("click", function () {
  alert("Has hecho click en el botón");
  console.log("Evento click ejecutado");
});

/*
  El profesor recalca:
  - addEventListener recibe el tipo de evento
  - y una función que se ejecuta cuando ocurre
*/

/* =========================
   4) EVENTO INPUT
   =========================
   Se ejecuta cada vez que el usuario escribe en un input
*/

inputTexto.addEventListener("input", function () {
  salidaTexto.textContent = "Texto introducido: " + inputTexto.value;
});

/* =========================
   5) EVENTO SUBMIT
   =========================
   Se ejecuta al enviar un formulario
*/

formulario.addEventListener("submit", function (evento) {
  /*
    preventDefault evita que el formulario
    recargue la página
  */
  evento.preventDefault();

  const nombre = nombreInput.value;

  if (nombre === "") {
    alert("El nombre no puede estar vacío");
    return;
  }

  alert("Formulario enviado. Nombre: " + nombre);
  console.log("Formulario enviado correctamente");

  nombreInput.value = "";
});

/* =========================
   6) OBJETO EVENT
   =========================
   El objeto event contiene información
   sobre el evento ocurrido
*/

btnClick.addEventListener("click", function (evento) {
  console.log("Tipo de evento:", evento.type);
  console.log("Elemento que lanza el evento:", evento.target);
});

/*
  El profesor insiste:
  - Los eventos permiten interactividad
  - Siempre se usan con DOM
  - Son clave para formularios y proyectos
*/
