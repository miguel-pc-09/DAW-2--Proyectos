// ===============================
// 1. SELECCIONAR ELEMENTO
// ===============================

// Selecciono un elemento por id
let titulo = document.getElementById("titulo");

// -> Estoy buscando en el HTML un elemento con id="titulo"

// ===============================
// 2. CAMBIAR TEXTO
// ===============================

titulo.textContent = "Nuevo título";
// -> Cambio el texto que aparece en la página

// ===============================
// 3. USAR querySelector
// ===============================

let parrafo = document.querySelector(".texto");
// -> Selecciono el primer elemento con clase "texto"

parrafo.textContent = "Texto cambiado";

// ===============================
// 4. CAMBIAR HTML (cuidado)
// ===============================

parrafo.innerHTML = "<b>Texto en negrita</b>";
// -> Inserta HTML directamente

// ===============================
// 5. CAMBIAR ESTILOS
// ===============================

titulo.style.color = "red";
// -> Cambio el color

titulo.style.fontSize = "30px";
// -> Cambio tamaño

// ===============================
// 6. AÑADIR CLASE CSS
// ===============================

titulo.classList.add("activo");
// -> Añado una clase

titulo.classList.remove("activo");
// -> Quito una clase

// ===============================
// 7. SELECCIONAR VARIOS ELEMENTOS
// ===============================

let items = document.querySelectorAll(".item");
// -> Me devuelve una lista de elementos

for (let item of items) {
  item.style.color = "blue";
}

// ===============================
// 8. COMPROBAR SI EXISTE (MUY IMPORTANTE)
// ===============================

let boton = document.querySelector("#boton");

if (boton) {
  boton.textContent = "Botón encontrado";
}
// -> Evita errores si no existe

// ===============================
// 9. EJEMPLO REAL (muy examen)
// ===============================

let resultado = document.querySelector("#resultado");

function mostrarMensaje() {
  resultado.textContent = "Has pulsado el botón";
}
// -> Función que modifica el DOM

// ===============================
// 10. CAMBIAR IMAGEN
// ===============================

let imagen = document.querySelector("#imagen");

imagen.src = "foto.jpg";
// -> Cambio la imagen
