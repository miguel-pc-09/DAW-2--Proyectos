/*
  TEMA 4 - DOM
  ------------
  Aquí practico:
  - Qué es el DOM
  - Selección de elementos
  - Modificación de texto y estilos
  - Creación de elementos desde JavaScript
*/

/* =========================
   1) ¿QUÉ ES EL DOM?
   =========================
   El DOM representa la estructura del HTML como un árbol de nodos.
   JavaScript puede acceder y modificar esos nodos.
*/

/* =========================
   2) SELECCIÓN DE ELEMENTOS
   ========================= */

const parrafo = document.getElementById("parrafo");
const btnCambiarTexto = document.getElementById("btnCambiarTexto");
const btnCambiarColor = document.getElementById("btnCambiarColor");
const contenedor = document.getElementById("contenedor");

console.log(parrafo);
console.log(btnCambiarTexto);

/* =========================
   3) MODIFICAR CONTENIDO
   =========================
   - textContent: cambia solo el texto
   - innerHTML: permite HTML
*/

btnCambiarTexto.addEventListener("click", function () {
  parrafo.textContent = "El texto ha sido modificado desde JavaScript";
});

/* =========================
   4) MODIFICAR ESTILOS
   ========================= */

btnCambiarColor.addEventListener("click", function () {
  parrafo.style.color = "blue";
  parrafo.style.fontWeight = "bold";
});

/* =========================
   5) CREAR ELEMENTOS
   =========================
   Creo un nuevo párrafo desde JavaScript
*/

const nuevoParrafo = document.createElement("p");
nuevoParrafo.textContent = "Este párrafo ha sido creado dinámicamente";

contenedor.appendChild(nuevoParrafo);

/* =========================
   6) EJEMPLO DINÁMICO
   =========================
   Crear varios elementos con un bucle
*/

for (let i = 1; i <= 3; i++) {
  const p = document.createElement("p");
  p.textContent = "Elemento creado número " + i;
  contenedor.appendChild(p);
}
