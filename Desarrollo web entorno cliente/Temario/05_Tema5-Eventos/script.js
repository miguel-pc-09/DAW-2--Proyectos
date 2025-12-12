/*
  TEMA 5 - EVENTOS
  ----------------
  Aquí practico:
  - Qué es un evento
  - addEventListener
  - Eventos de click
  - Eventos de input
  - Eventos de submit
  - preventDefault
*/

/* =========================
   1) SELECCIÓN DE ELEMENTOS
   ========================= */

const btnClick = document.getElementById("btnClick");
const inputTexto = document.getElementById("inputTexto");
const salidaTexto = document.getElementById("salidaTexto");
const formulario = document.getElementById("formulario");
const nombreInput = document.getElementById("nombre");

/* =========================
   2) EVENTO CLICK
   =========================
   Se ejecuta cuando el usuario hace click
*/

btnClick.addEventListener("click", function () {
  alert("Has hecho click en el botón");
  console.log("Evento click ejecutado");
});

/* =========================
   3) EVENTO INPUT
   =========================
   Se ejecuta cada vez que el usuario escribe
*/

inputTexto.addEventListener("input", function () {
  salidaTexto.textContent = "Has escrito: " + inputTexto.value;
});

/* =========================
   4) EVENTO SUBMIT
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
  console.log("Formulario enviado con nombre:", nombre);

  // Limpio el input
  nombreInput.value = "";
});

/* =========================
   5) OBJETO EVENTO
   =========================
   El evento contiene información del suceso
*/

btnClick.addEventListener("click", function (evento) {
  console.log("Tipo de evento:", evento.type);
  console.log("Elemento que lanzó el evento:", evento.target);
});
