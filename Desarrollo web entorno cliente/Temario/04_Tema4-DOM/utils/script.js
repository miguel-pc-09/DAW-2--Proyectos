/*
  TEMA 4 - DOM
  ------------
  Apuntes del profesor:
  - Qué es el DOM
  - Qué es un nodo
  - Seleccionar elementos
  - Modificar contenido y estilos
  - Crear elementos dinámicamente
*/

/* =========================
   1) ¿QUÉ ES EL DOM?
   =========================
   El DOM (Document Object Model) es la representación
   del HTML en forma de objetos y nodos.

   Gracias al DOM, JavaScript puede:
   - Leer el HTML
   - Modificarlo
   - Crear nuevos elementos
*/

/*
  Cada etiqueta HTML es un nodo del DOM.
*/

/* =========================
   2) SELECCIÓN DE ELEMENTOS
   =========================
   El profesor explica que primero SIEMPRE hay
   que seleccionar los elementos.
*/

const parrafo = document.getElementById("parrafo");
const btnTexto = document.getElementById("btnTexto");
const btnColor = document.getElementById("btnColor");
const contenedor = document.getElementById("contenedor");

console.log(parrafo);

/* =========================
   3) MODIFICAR CONTENIDO
   =========================
   textContent cambia solo el texto.
*/

btnTexto.addEventListener("click", function () {
  parrafo.textContent =
    "El texto ha sido modificado usando el DOM desde JavaScript";
});

/*
  innerHTML permite escribir HTML,
  pero el profesor advierte que hay que usarlo con cuidado.
*/

/* =========================
   4) MODIFICAR ESTILOS
   =========================
   Se accede al estilo con .style
*/

btnColor.addEventListener("click", function () {
  parrafo.style.color = "blue";
  parrafo.style.fontWeight = "bold";
});

/* =========================
   5) CREAR ELEMENTOS
   =========================
   JavaScript puede crear nodos nuevos.
*/

const nuevoParrafo = document.createElement("p");
nuevoParrafo.textContent =
  "Este párrafo ha sido creado dinámicamente desde JavaScript";

contenedor.appendChild(nuevoParrafo);

/* =========================
   6) CREAR VARIOS ELEMENTOS
   =========================
   Muy típico en ejemplos de clase y examen
*/

for (let i = 1; i <= 3; i++) {
  const p = document.createElement("p");
  p.textContent = "Elemento creado número " + i;
  contenedor.appendChild(p);
}

/*
  El profesor recalca:
  - El DOM permite modificar la página sin recargarla
  - Es la base de la interactividad
  - Siempre se trabaja junto con eventos
*/
