/* =========================================================
   trivial.js
   - Lógica ESPECÍFICA del modo Trivial (preguntas tipo test)
   ========================================================= */

let trivial_preguntaActual = null;
let trivial_opcionSeleccionada = null;
let trivial_revelado = false;

/**
 * Devuelve una pregunta aleatoria (Trivial) para una asignatura
 */
function trivial_obtenerPregunta(asignaturaKey) {
  const deck = mazosTrivial[asignaturaKey] || [];
  return elegirAleatorio(deck);
}

/**
 * Renderiza una pregunta Trivial
 */
function trivial_renderizarPregunta(pregunta, ui) {
  trivial_preguntaActual = pregunta;
  trivial_opcionSeleccionada = null;
  trivial_revelado = false;

  ui.tituloCard.textContent = "Pregunta trivial";
  ui.subtituloCard.textContent = "Modo Trivial";
  ui.labelSecundario.textContent = "Opciones de respuesta";

  // Zona principal: texto pregunta
  ui.zonaPrincipal.innerHTML = "";
  const q = document.createElement("div");
  q.className = "text-xl font-extrabold text-emerald-100";
  q.textContent = pregunta.question;
  ui.zonaPrincipal.appendChild(q);

  // Zona secundaria: opciones clicables
  ui.zonaSecundaria.innerHTML = "";
  const cont = document.createElement("div");
  cont.className = "d-flex flex-column gap-2";

  pregunta.options.forEach((opt) => {
    const item = document.createElement("div");
    item.className = "opcion-trivial";
    item.dataset.id = opt.id;

    item.innerHTML = `<span class="letra">${opt.id})</span> <span>${opt.text}</span>`;

    // Click para seleccionar opción
    item.addEventListener("click", () => {
      if (trivial_revelado) return;

      trivial_opcionSeleccionada = opt.id;
      // Quitamos la clase a todas y la ponemos a la seleccionada
      cont
        .querySelectorAll(".opcion-trivial")
        .forEach((x) => x.classList.remove("seleccionada"));
      item.classList.add("seleccionada");
    });

    cont.appendChild(item);
  });

  ui.zonaSecundaria.appendChild(cont);

  ui.txtAyuda.textContent =
    "Lee la pregunta y selecciona una opción. Pulsa “Comprobar” para mostrar la correcta (y corregir).";
}

/**
 * Comprueba la respuesta y marca correcta/incorrecta
 */
function trivial_comprobar(ui) {
  if (!trivial_preguntaActual) return;
  if (trivial_revelado) return;

  const cont = ui.zonaSecundaria.querySelector("div");
  if (!cont) return;

  // Si no ha seleccionado, avisamos bonito
  if (!trivial_opcionSeleccionada) {
    Swal.fire({
      icon: "info",
      title: "Selecciona una opción",
      text: "Antes de comprobar, elige A/B/C/D.",
      confirmButtonColor: "#15a36b",
    });
    return;
  }

  // Marcamos opciones
  trivial_preguntaActual.options.forEach((opt) => {
    const div = cont.querySelector(`.opcion-trivial[data-id="${opt.id}"]`);
    if (!div) return;

    if (opt.correct) div.classList.add("correcta");
    if (!opt.correct && opt.id === trivial_opcionSeleccionada)
      div.classList.add("incorrecta");
  });

  trivial_revelado = true;

  const elegida = trivial_preguntaActual.options.find(
    (o) => o.id === trivial_opcionSeleccionada,
  );
  const correcta = trivial_preguntaActual.options.find((o) => o.correct);

  if (elegida && elegida.correct) {
    Swal.fire({
      icon: "success",
      title: "¡Correcto!",
      text: "Buena, esa era la respuesta.",
      confirmButtonColor: "#15a36b",
    });
  } else {
    Swal.fire({
      icon: "error",
      title: "Incorrecto",
      text: `La correcta era: ${correcta.id}) ${correcta.text}`,
      confirmButtonColor: "#15a36b",
    });
  }
}
