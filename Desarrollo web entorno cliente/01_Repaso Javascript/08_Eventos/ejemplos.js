// ===============================
// 1. EVENTO CLICK
// ===============================

// Selecciono el botón
let boton = document.querySelector("#boton");

// Añado un evento click
boton.addEventListener("click", function () {
  console.log("Has hecho click");
});
// -> Cuando el usuario pulsa el botón, se ejecuta la función

// ===============================
// 2. EVENTO CON FUNCIÓN SEPARADA
// ===============================

function saludar() {
  console.log("Hola");
}

boton.addEventListener("click", saludar);
// -> Llamo a una función externa

// ===============================
// 3. EVENTO INPUT (muy importante)
// ===============================

let input = document.querySelector("#nombre");

input.addEventListener("input", function () {
  console.log(input.value);
  // -> Muestra lo que el usuario escribe
});

// ===============================
// 4. EVENTO CHANGE
// ===============================

let selector = document.querySelector("#opciones");

selector.addEventListener("change", function () {
  console.log(selector.value);
});
// -> Detecta cambio en select

// ===============================
// 5. EVENTO SUBMIT (FORMULARIOS)
// ===============================

let formulario = document.querySelector("#formulario");

formulario.addEventListener("submit", function (event) {
  event.preventDefault();
  // -> Evita que se recargue la página

  console.log("Formulario enviado");
});

// ===============================
// 6. ACCEDER AL EVENTO (event)
// ===============================

boton.addEventListener("click", function (event) {
  console.log(event);
  // -> Información del evento
});

// ===============================
// 7. KEYUP (teclas)
// ===============================

input.addEventListener("keyup", function () {
  console.log("Tecla pulsada");
});

// ===============================
// 8. EJEMPLO REAL (muy examen)
// ===============================

let resultado = document.querySelector("#resultado");

boton.addEventListener("click", function () {
  resultado.textContent = "Botón pulsado";
});
// -> Cambia el DOM al hacer click
