// ===============================
// 1. CREAR UN ELEMENTO
// ===============================

// Creo un párrafo
let parrafo = document.createElement("p");

// -> Todavía NO está en la página

// ===============================
// 2. AÑADIR CONTENIDO
// ===============================

parrafo.textContent = "Hola desde JavaScript";

// -> Le doy contenido

// ===============================
// 3. INSERTAR EN EL DOM
// ===============================

// Selecciono el body
let body = document.querySelector("body");

// Lo añado
body.appendChild(parrafo);

// -> Ahora sí aparece en la web

// ===============================
// 4. CREAR LISTA DINÁMICA (muy examen)
// ===============================

let lista = document.createElement("ul");

let nombres = ["Miguel", "Ana", "Luis"];

for (let nombre of nombres) {
  let li = document.createElement("li");
  li.textContent = nombre;
  lista.appendChild(li);
}

body.appendChild(lista);

// ===============================
// 5. ELIMINAR ELEMENTO
// ===============================

parrafo.remove();
// -> Borra el elemento del DOM

// ===============================
// 6. CREAR BOTÓN DINÁMICO
// ===============================

let boton = document.createElement("button");
boton.textContent = "Haz click";

body.appendChild(boton);

// ===============================
// 7. EVENTO EN ELEMENTO CREADO
// ===============================

boton.addEventListener("click", function () {
  console.log("Botón dinámico pulsado");
});

// ===============================
// 8. innerHTML (forma rápida pero peligrosa)
// ===============================

body.innerHTML += "<p>Nuevo elemento</p>";
// -> Inserta HTML directamente

// ⚠️ Problema:
// - borra eventos anteriores
// - menos control

// ===============================
// 9. EJEMPLO REAL (muy examen)
// ===============================

let resultado = document.querySelector("#resultado");

let botonCrear = document.querySelector("#crear");

botonCrear.addEventListener("click", function () {
  let nuevo = document.createElement("p");
  nuevo.textContent = "Elemento creado";
  resultado.appendChild(nuevo);
});
