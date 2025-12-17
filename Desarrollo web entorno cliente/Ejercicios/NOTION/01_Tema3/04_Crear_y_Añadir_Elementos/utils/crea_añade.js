/* Crea un botón que, al hacer clic, añada un nuevo elemento &lt;li&gt; a una lista &lt;ul&gt; existente. 
Utiliza document.createElement() para crear el elemento y appendChild() para añadirlo al DOM. 
El texto del nuevo elemento puede ser fijo o solicitado al usuario con prompt(). */

const lista = document.getElementById("lista");
const btnAgregar = document.getElementById("btnAgregar");

btnAgregar.addEventListener("click", () => {
  const texto = prompt("Escribe el texto del nuevo elemento:");

  // Si el usuario cancela o deja vacío, no añadimos nada
  if (texto === null || texto.trim() === "") return;

  // 1) Crear el <li>
  const li = document.createElement("li");

  // 2) Ponerle texto
  li.textContent = texto;

  // 3) Meterlo dentro del <ul>
  lista.appendChild(li);
});