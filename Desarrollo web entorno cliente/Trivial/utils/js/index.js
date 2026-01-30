// ----------- VARIABLES DEL JUEGO ----------
// Guardo las preguntas
let preguntas = null;

// Para guardar la pregunta que sale en pantalla
let pregunta_actual = null;

// Para saber si ya se comprobado la respuesta
let respuesta_mostrada = false;

// Para guardar la opcion que se click
let opcion_seleccionada = null;

// Tiempo inicial
let segundos = 90;

// setInterval del temporizador
let intervalo = null;

// ------ SELECTORES --------
const select_asignatura = document.querySelector("#asignatura");

const btn_generar = document.querySelector("#boton_generar");
const btn_reiniciar = document.querySelector("#boton_reiniciar");
const btn_comprobar = document.querySelector("#boton_comprobar");

const contenedor_tiempo = document.querySelector("#contenedor_tiempo");
const valor_tiempo = document.querySelector("#valor_tiempo");

const titulo_tarjeta = document.querySelector("#titulo_tarjeta");
const contenido_tarjeta = document.querySelector("#contenido_tarjeta");
const meta_tarjeta = document.querySelector("#meta_tarjeta");
const texto_estado = document.querySelector("#texto_estado");

// ------ CARGAR JSON ----------
async function cargar_preguntas() {
  const respuesta = await fetch("utils/data/preguntas.json");
  preguntas = await respuesta.json();

  texto_estado.textContent =
    "Preguntas cargadas. Pulsa Generar pregunta para empezar.";
}

// ------ TIEMPO (contador) --------
// Conversor de segundos
function formato_tiempo(seg) {
  let min = String(Math.floor(seg / 60)).padStart(2, "0");
  let s = String(seg % 60).padStart(2, "0");
  return min + ":" + s;
}

// Estilo del tiempo
function pintar_tiempo() {
  valor_tiempo.textContent = formato_tiempo(segundos);

  if (segundos <= 15 && segundos > 0) {
    contenedor_tiempo.classList.add("peligro");
  } else {
    contenedor_tiempo.classList.remove("peligro");
  }
}

// Temporizador si estaba corriendo
function parar_tiempo() {
  clearInterval(intervalo);
  intervalo = null;
}

// Arranca una ronda nueva
function iniciar_tiempo() {
  parar_tiempo();
  segundos = 90;
  pintar_tiempo();

  intervalo = setInterval(() => {
    segundos--;

    if (segundos <= 0) {
      segundos = 0;
      parar_tiempo();
      pintar_tiempo();

      // Marcar la ronda como temrinada
      respuesta_mostrada = true;

      texto_estado.textContent =
        "Se acabó el tiempo. Pulsa Generar pregunta para otra ronda.";
    } else {
      pintar_tiempo();
    }
  }, 1000);
}

// Reinicio el tiempo
function reiniciar_tiempo() {
  parar_tiempo();
  segundos = 90;
  pintar_tiempo();
}

// ------- LOGICA DEL JUEGO -----
// Pregunta aleatoria de una asignatura
function obtener_pregunta_aleatoria(asignatura) {
  if (!preguntas) return null;

  let lista = preguntas[asignatura];

  if (!lista || lista.length === 0) return null;

  let pos = Math.floor(Math.random() * lista.length);
  return lista[pos];
}

// Limpio la tarjeta cuando no hay ronda o no hay preguntas
function limpiar_ronda_visual() {
  pregunta_actual = null;
  respuesta_mostrada = false;
  opcion_seleccionada = null;

  titulo_tarjeta.textContent = "Pregunta trivial";
  meta_tarjeta.textContent = "Selecciona la respuesta correcta";
  contenido_tarjeta.innerHTML = "";
}

// Genero en la tarjeta una pregunta y sus opciones
function pintar_pregunta(p) {
  pregunta_actual = p;
  respuesta_mostrada = false;
  opcion_seleccionada = null;

  titulo_tarjeta.textContent = "Pregunta trivial";
  meta_tarjeta.textContent = "Selecciona la respuesta correcta";
  contenido_tarjeta.innerHTML = "";

  // Texto de la pregunta
  let texto_pregunta = document.createElement("div");
  texto_pregunta.classList.add("pregunta");
  texto_pregunta.textContent = p.question;
  contenido_tarjeta.appendChild(texto_pregunta);

  // Contenedor de opciones
  let contenedor_opciones = document.createElement("div");
  contenedor_opciones.classList.add("opciones");

  // Creo un boton por cada opcion
  p.options.forEach((op) => {
    let boton = document.createElement("button");
    boton.type = "button";
    boton.classList.add("opcion");
    boton.dataset.id = op.id;
    boton.textContent = op.id + ") " + op.text;

    boton.addEventListener("click", () => {
      if (respuesta_mostrada) return;

      opcion_seleccionada = op.id;

      // Para eliminar la clase seleccionada
      contenedor_opciones.querySelectorAll(".opcion").forEach((btn) => {
        btn.classList.remove("seleccionada");
      });

      // Marcacion de la que se selecciona
      boton.classList.add("seleccionada");

      texto_estado.textContent = "Opción seleccionada. Pulsa Comprobar.";
    });

    contenedor_opciones.appendChild(boton);
  });

  contenido_tarjeta.appendChild(contenedor_opciones);

  texto_estado.textContent =
    "Ronda activa. Elige una opción y pulsa Comprobar.";
}

// Comparo la opcion del usuario con la correcta
function comprobar_respuesta() {
  if (!pregunta_actual || respuesta_mostrada) return;

  if (!opcion_seleccionada) {
    texto_estado.textContent = "Selecciona una respuesta primero.";
    return;
  }

  let contenedor_opciones = contenido_tarjeta.querySelector(".opciones");
  if (!contenedor_opciones) return;

  let opcion_correcta = pregunta_actual.options.find(
    (op) => op.correct === true,
  );
  if (!opcion_correcta) return;

  let boton_correcto = contenedor_opciones.querySelector(
    `[data-id="${opcion_correcta.id}"]`,
  );

  let boton_usuario = contenedor_opciones.querySelector(
    `[data-id="${opcion_seleccionada}"]`,
  );

  if (opcion_seleccionada === opcion_correcta.id) {
    boton_usuario.classList.add("correcta");
    texto_estado.textContent = "Correcto ";
  } else {
    boton_usuario.classList.add("incorrecta");
    if (boton_correcto) boton_correcto.classList.add("correcta");
    texto_estado.textContent = "Incorrecto ";
  }

  // Evito que se pueda volver a comprobar esta pregunta
  respuesta_mostrada = true;

  // Cuando acierto o fallo paro el contador
  parar_tiempo();
}

// Esto crea una ronda nueva
function nueva_ronda() {
  let asignatura = select_asignatura.value;
  let pregunta = obtener_pregunta_aleatoria(asignatura);

  if (!pregunta) {
    limpiar_ronda_visual();
    texto_estado.textContent = "No hay preguntas para esta asignatura.";
    reiniciar_tiempo();
    return;
  }

  // Paro el tiempo anterior y empiezo una nueva pregunta
  parar_tiempo();
  pintar_pregunta(pregunta);
  iniciar_tiempo();
}

// ---- EVENTOS ----------

// Generar pregunta
btn_generar.addEventListener("click", () => {
  nueva_ronda();
});

// Reinicia el tiempo
btn_reiniciar.addEventListener("click", () => {
  reiniciar_tiempo();
  texto_estado.textContent = "Tiempo reiniciado.";
});

// Comprueba la opcion seleccionada
btn_comprobar.addEventListener("click", () => {
  comprobar_respuesta();
});

// Cambio de asignatura
select_asignatura.addEventListener("change", () => {
  texto_estado.textContent =
    "Categoría cambiada. Pulsa Generar pregunta para sacar una de esta asignatura.";
});

// ------- INICIO con ejecucion automatica ----------

pintar_tiempo();
cargar_preguntas();
