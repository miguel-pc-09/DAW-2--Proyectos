/* =========================================================
   tabu.js
   - Toda la lógica ESPECÍFICA del modo Tabú
   ========================================================= */

/**
 * Devuelve una carta Tabú aleatoria para una asignatura
 */
function tabu_obtenerCarta(asignaturaKey) {
  const deck = mazosTabu[asignaturaKey] || [];
  return elegirAleatorio(deck);
}

/**
 * Renderiza una carta Tabú en pantalla
 */
function tabu_renderizarCarta(carta, ui) {
  // ui = objeto con referencias a los elementos del DOM (lo crea app.js)
  ui.tituloCard.textContent = "Palabra objetivo";
  ui.subtituloCard.textContent = "Modo Tabú";
  ui.labelSecundario.textContent = "Palabras prohibidas";

  // Zona principal: palabra grande
  ui.zonaPrincipal.innerHTML = "";
  const palabra = document.createElement("div");
  palabra.className = "text-4xl font-black tracking-wide text-emerald-100";
  palabra.textContent = carta.word;
  ui.zonaPrincipal.appendChild(palabra);

  // Zona secundaria: tags con palabras prohibidas
  ui.zonaSecundaria.innerHTML = "";
  const cont = document.createElement("div");
  cont.className = "d-flex flex-wrap gap-2";

  carta.forbidden.forEach((p) => {
    const tag = document.createElement("span");
    tag.className = "tag-prohibida";
    tag.innerHTML = `<ion-icon name="close-circle"></ion-icon> ${p}`;
    cont.appendChild(tag);
  });

  ui.zonaSecundaria.appendChild(cont);

  // Ayuda inferior
  ui.txtAyuda.textContent =
    "La persona que explica no puede usar ninguna palabra prohibida. El equipo tiene 1:30 para acertar.";
}
