/* =========================================================
   app.js
   - Control general de la app:
     * modo (Tabú/Trivial)
     * temporizador
     * equipos y puntos
     * render en pantalla
   ========================================================= */

/* --------------------------
   Referencias a la UI (DOM)
--------------------------- */
const ui = {
  // selects y botones
  selectAsignatura: $("selectAsignatura"),
  btnModoTabu: $("btnModoTabu"),
  btnModoTrivial: $("btnModoTrivial"),
  btnGenerar: $("btnGenerar"),
  btnReiniciarTiempo: $("btnReiniciarTiempo"),
  btnComprobar: $("btnComprobar"),

  // equipos
  inputEquipo: $("inputEquipo"),
  btnAgregarEquipo: $("btnAgregarEquipo"),
  listaEquipos: $("listaEquipos"),
  btnReiniciarPuntos: $("btnReiniciarPuntos"),

  // timer
  txtTiempo: $("txtTiempo"),
  barraTiempo: $("barraTiempo"),

  // card
  tituloCard: $("tituloCard"),
  subtituloCard: $("subtituloCard"),
  labelSecundario: $("labelSecundario"),
  zonaPrincipal: $("zonaPrincipal"),
  zonaSecundaria: $("zonaSecundaria"),
  txtAyuda: $("txtAyuda"),

  // estado
  txtEstado: $("txtEstado"),
};

/* --------------------------
   Estado de la app
--------------------------- */
let modo = "tabu"; // "tabu" o "trivial"

// Timer
const TIEMPO_MAX = 90;
let tiempo = TIEMPO_MAX;
let interval = null;
let corriendo = false;

// Equipos
let equipos = [];
let equipoSeleccionadoId = null;

/* =========================================================
   RENDER EQUIPOS
========================================================= */
function renderEquipos() {
  ui.listaEquipos.innerHTML = "";

  equipos.forEach((eq) => {
    const item = document.createElement("div");
    item.className = "equipo-item";
    if (eq.id === equipoSeleccionadoId) item.classList.add("seleccionado");

    const nombre = document.createElement("div");
    nombre.className = "equipo-nombre";
    nombre.textContent = eq.nombre;

    const puntos = document.createElement("div");
    puntos.className = "equipo-puntos";
    puntos.textContent = `${eq.puntos} pts`;

    const btnMas = document.createElement("button");
    btnMas.className = "equipo-btn";
    btnMas.type = "button";
    btnMas.textContent = "+1";
    btnMas.title = "Sumar 1 punto";

    btnMas.addEventListener("click", (e) => {
      e.stopPropagation();
      eq.puntos += 1;
      renderEquipos();
    });

    const btnBorrar = document.createElement("button");
    btnBorrar.className = "equipo-btn";
    btnBorrar.type = "button";
    btnBorrar.textContent = "×";
    btnBorrar.title = "Eliminar equipo";

    btnBorrar.addEventListener("click", (e) => {
      e.stopPropagation();
      equipos = equipos.filter((x) => x.id !== eq.id);
      if (equipoSeleccionadoId === eq.id) equipoSeleccionadoId = null;
      renderEquipos();
      ui.txtEstado.textContent = "Equipo eliminado.";
    });

    item.addEventListener("click", () => {
      equipoSeleccionadoId = eq.id;
      renderEquipos();
      ui.txtEstado.textContent = `Equipo seleccionado: ${eq.nombre}`;
    });

    item.appendChild(nombre);
    item.appendChild(puntos);
    item.appendChild(btnMas);
    item.appendChild(btnBorrar);
    ui.listaEquipos.appendChild(item);
  });
}

/* =========================================================
   TIMER
========================================================= */
function actualizarTimerUI() {
  ui.txtTiempo.textContent = formatearTiempo(tiempo);

  const porcentaje = Math.max(0, (tiempo / TIEMPO_MAX) * 100);
  ui.barraTiempo.style.width = `${porcentaje}%`;

  // Si quedan 15s o menos, marcamos peligro
  if (tiempo <= 15 && tiempo > 0) {
    ui.txtTiempo.classList.add("peligro");
  } else {
    ui.txtTiempo.classList.remove("peligro");
  }
}

function pararTimer() {
  clearInterval(interval);
  interval = null;
  corriendo = false;
}

function iniciarTimer() {
  pararTimer();
  tiempo = TIEMPO_MAX;
  corriendo = true;
  actualizarTimerUI();

  interval = setInterval(() => {
    tiempo--;
    if (tiempo <= 0) {
      tiempo = 0;
      actualizarTimerUI();
      pararTimer();
      onTiempoAgotado();
      return;
    }
    actualizarTimerUI();
  }, 1000);
}

function reiniciarTimer(sinCambiarCarta = true) {
  pararTimer();
  tiempo = TIEMPO_MAX;
  actualizarTimerUI();

  ui.txtEstado.textContent = sinCambiarCarta
    ? "Tiempo reiniciado a 1:30. Puedes seguir con la misma carta."
    : "Temporizador reiniciado.";
}

function onTiempoAgotado() {
  // Sonido simple (si el navegador lo permite)
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(880, ctx.currentTime);
    gain.gain.setValueAtTime(0.0001, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.3, ctx.currentTime + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.5);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.5);
  } catch (err) {
    // Si falla, no pasa nada
  }

  ui.txtEstado.innerHTML =
    "⏳ ¡Tiempo agotado! Pulsa <strong>Generar ronda</strong> para seguir.";
}

/* =========================================================
   MODO: TABÚ / TRIVIAL
========================================================= */
function activarModoTabu() {
  modo = "tabu";
  ui.btnModoTabu.classList.add("active");
  ui.btnModoTrivial.classList.remove("active");
  ui.txtEstado.textContent = "Modo Tabú activado.";

  // Reset visual card
  ui.tituloCard.textContent = "Palabra objetivo";
  ui.subtituloCard.textContent = "Modo Tabú";
  ui.labelSecundario.textContent = "Palabras prohibidas";
  ui.txtAyuda.textContent =
    "La persona que explica no puede usar ninguna palabra prohibida. El equipo tiene 1:30 para acertar.";

  // El botón comprobar “no hace nada” en Tabú (pero lo dejamos visible)
}

function activarModoTrivial() {
  modo = "trivial";
  ui.btnModoTrivial.classList.add("active");
  ui.btnModoTabu.classList.remove("active");
  ui.txtEstado.textContent = "Modo Trivial activado.";

  ui.tituloCard.textContent = "Pregunta trivial";
  ui.subtituloCard.textContent = "Modo Trivial";
  ui.labelSecundario.textContent = "Opciones de respuesta";
  ui.txtAyuda.textContent =
    "Pulsa Generar ronda para mostrar una pregunta tipo test.";
}

/* =========================================================
   GENERAR RONDA
========================================================= */
async function generarRonda() {
  const asignaturaKey = ui.selectAsignatura.value;

  // Iniciamos timer siempre al generar
  iniciarTimer();

  // Animación suave en el panel derecho
  ui.zonaPrincipal.classList.remove("animate__animated", "animate__pulse");
  void ui.zonaPrincipal.offsetWidth; // truco para reiniciar animación
  ui.zonaPrincipal.classList.add("animate__animated", "animate__pulse");

  if (modo === "tabu") {
    const carta = tabu_obtenerCarta(asignaturaKey);

    if (!carta) {
      ui.txtEstado.textContent = "No hay cartas Tabú para esta asignatura.";
      return;
    }

    tabu_renderizarCarta(carta, ui);
    ui.txtEstado.textContent = "Ronda en marcha (Tabú).";
    return;
  }

  // TRIVIAL
  const pregunta = trivial_obtenerPregunta(asignaturaKey);

  if (!pregunta) {
    ui.txtEstado.textContent = "No hay preguntas Trivial para esta asignatura.";

    // Bonus: ejemplo de DummyJSON (por si quieres “alimentar” preguntas externas)
    // No sustituye tus preguntas: es SOLO demo.
    // Puedes borrarlo si no lo quieres.
    await demoDummyJSON(asignaturaKey);
    return;
  }

  trivial_renderizarPregunta(pregunta, ui);
  ui.txtEstado.textContent = "Ronda en marcha (Trivial).";
}

/* =========================================================
   DEMO DUMMYJSON (opcional)
   - Si una asignatura no tiene preguntas, hacemos una llamada
     para que veas cómo se consume una API.
========================================================= */
async function demoDummyJSON(asignaturaKey) {
  // Solo lo hago en entorno_cliente para no marear
  if (asignaturaKey !== "entorno_cliente") return;

  try {
    const res = await fetch("https://dummyjson.com/products?limit=5");
    const data = await res.json();

    // Usamos underscore para pillar uno al azar
    const producto = window._
      ? _.sample(data.products)
      : elegirAleatorio(data.products);

    Swal.fire({
      icon: "info",
      title: "Demo DummyJSON",
      html: `He cargado un producto de prueba: <b>${producto.title}</b><br/>Esto es solo para enseñarte cómo consumir una API.`,
      confirmButtonColor: "#15a36b",
    });
  } catch (e) {
    // Si falla, no pasa nada
  }
}

/* =========================================================
   EVENTOS (listeners)
========================================================= */
ui.btnModoTabu.addEventListener("click", activarModoTabu);
ui.btnModoTrivial.addEventListener("click", activarModoTrivial);

ui.btnGenerar.addEventListener("click", generarRonda);

ui.btnReiniciarTiempo.addEventListener("click", () => {
  reiniciarTimer(true);
});

ui.btnComprobar.addEventListener("click", () => {
  if (modo !== "trivial") {
    ui.txtEstado.textContent = "Comprobar solo funciona en modo Trivial.";
    return;
  }
  trivial_comprobar(ui);
});

ui.btnAgregarEquipo.addEventListener("click", () => {
  const nombre = ui.inputEquipo.value.trim();
  if (!nombre) {
    Swal.fire({
      icon: "warning",
      title: "Falta el nombre",
      text: "Escribe el nombre del equipo antes de pulsar Añadir.",
      confirmButtonColor: "#15a36b",
    });
    return;
  }

  equipos.push({ id: generarId(), nombre, puntos: 0 });
  ui.inputEquipo.value = "";
  renderEquipos();
  ui.txtEstado.textContent = "Equipo añadido. Haz clic para seleccionarlo.";
});

ui.btnReiniciarPuntos.addEventListener("click", () => {
  equipos.forEach((e) => (e.puntos = 0));
  equipoSeleccionadoId = null;
  renderEquipos();
  ui.txtEstado.textContent = "Puntuación reiniciada.";
});

/* =========================================================
   INIT
========================================================= */
(function init() {
  activarModoTabu();
  actualizarTimerUI();
  renderEquipos();
})();
