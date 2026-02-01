// ------ SELECTORES --------
const selector_categoria = document.querySelector("#categoria");
const selector_dificultad = document.querySelector("#dificultad");
const boton_generar = document.querySelector("#boton_generar");
const boton_reiniciar = document.querySelector("#boton_reiniciar");
const boton_comprobar = document.querySelector("#boton_comprobar");
const boton_recargar = document.querySelector("#boton_recargar");
const contenedor_tiempo = document.querySelector("#contenedor_tiempo");
const valor_tiempo = document.querySelector("#valor_tiempo");
const titulo_tarjeta = document.querySelector("#titulo_tarjeta");
const contenido_tarjeta = document.querySelector("#contenido_tarjeta");
const meta_tarjeta = document.querySelector("#meta_tarjeta");
const texto_estado = document.querySelector("#texto_estado");
const marcador = document.querySelector("#marcador");
const lista_historial = document.querySelector("#lista_historial");

// ----------- VARIABLES DEL JUEGO ----------
let lista_preguntas = [];
let indice_pregunta = 0;
let respuesta_correcta = "";
let respuesta_seleccionada = "";
let respuesta_mostrada = false;
let puntos = 0;

// Tiempo inicial
let segundos = 90;
let intervalo = null;

// Al cargar la página, la aplicación debe realizar una petición HTTP a la API de Open Trivia
function construir_url_api() {
  let url = "https://opentdb.com/api.php?amount=10&type=multiple";

  // Elementos opcionales
  // Permitir elegir categoría o dificultad antes de obtener las preguntas (usando los parámetros de la API).

  let categoria = selector_categoria ? selector_categoria.value : "";
  let dificultad = selector_dificultad ? selector_dificultad.value : "";

  if (categoria) url += "&category=" + categoria;
  if (dificultad) url += "&difficulty=" + dificultad;

  return url;
}

// Debe gestionarse correctamente el flujo asíncrono usando promesas:
// Puedes usar .then() y .catch() o la sintaxis async/await .
// Se debe mostrar un mensaje de error en caso de que falle la petición.

function cargar_preguntas_desde_api() {
  texto_estado.textContent = "Cargando preguntas...";
  contenido_tarjeta.textContent = "Cargando...";
  titulo_tarjeta.textContent = "Pregunta trivial";

  // Reinicio estado del juego
  lista_preguntas = [];
  indice_pregunta = 0;
  puntos = 0;

  respuesta_correcta = "";
  respuesta_seleccionada = "";
  respuesta_mostrada = false;

  parar_tiempo();
  segundos = 90;
  pintar_tiempo();
  pintar_marcador();

  fetch(construir_url_api())
    .then((respuesta) => {
      if (!respuesta.ok) {
        throw new Error("HTTP " + respuesta.status);
      }
      return respuesta.json();
    })
    .then((datos_json) => {
      if (datos_json.response_code !== 0) {
        throw new Error("response_code " + datos_json.response_code);
      }

      lista_preguntas = datos_json.results;

      texto_estado.textContent =
        "Preguntas cargadas. Pulsa Generar pregunta para empezar.";
      contenido_tarjeta.textContent = "Pulsa “Generar pregunta”";
      meta_tarjeta.textContent = "Configuración aplicada correctamente.";
      pintar_marcador();
    })
    .catch((error) => {
      texto_estado.textContent =
        "Error al cargar preguntas. Pulsa Recargar preguntas.";
      contenido_tarjeta.textContent = "No se pudieron cargar preguntas.";
      meta_tarjeta.textContent = "Fallo en la petición al servidor.";
    });
}

// Las preguntas recibidas deben mostrarse en pantalla junto con sus posibles respuestas.
function pintar_pregunta_en_pantalla(pregunta) {
  contenido_tarjeta.innerHTML = "";
  respuesta_mostrada = false;
  respuesta_seleccionada = "";

  // Guardamos correcta para comprobar luego
  respuesta_correcta = pregunta.correct_answer;

  // Enunciado
  let nodo_pregunta = document.createElement("div");
  nodo_pregunta.classList.add("pregunta");
  nodo_pregunta.textContent = pregunta.question;
  contenido_tarjeta.appendChild(nodo_pregunta);

  // Opciones de respuesta
  let opciones = [];
  pregunta.incorrect_answers.forEach((resinc) => opciones.push(resinc));
  opciones.push(pregunta.correct_answer);

  let contenedor_opciones = document.createElement("div");
  contenedor_opciones.classList.add("opciones");

  let letras = ["A", "B", "C", "D"];

  opciones.forEach((texto, posicion) => {
    let boton = document.createElement("button");
    boton.type = "button";
    boton.classList.add("opcion");
    boton.dataset.valor = texto; // Guardamos el valor de la respuesta con dataset
    boton.textContent = letras[posicion] + ") " + texto;

    // El usuario podrá elegir una respuesta y recibir retroalimentación
    boton.addEventListener("click", () => {
      if (respuesta_mostrada) return;
      respuesta_seleccionada = texto;
      contenedor_opciones.querySelectorAll(".opcion").forEach((b) => {
        b.classList.remove("seleccionada");
      });
      boton.classList.add("seleccionada");
      texto_estado.textContent = "Opción seleccionada. Pulsa Comprobar.";
    });
    contenedor_opciones.appendChild(boton);
  });

  contenido_tarjeta.appendChild(contenedor_opciones);

  texto_estado.textContent =
    "Ronda activa. Elige una opción y pulsa Comprobar.";
}

// Elementos opcionales
// Añadir marcador de puntuación.
function pintar_marcador() {
  if (!marcador) return;
  let total = lista_preguntas.length || 0;
  marcador.textContent =
    "Puntos: " + puntos + " | Pregunta: " + indice_pregunta + "/" + total;
}

// Elementos opcionales
// Implementar temporizador para responder cada pregunta.
function pintar_tiempo() {
  // Convierte los segundos a formato MM:SS (sin padStart)
  let minutos = Math.floor(segundos / 60);
  let resto_segundos = segundos % 60;

  if (minutos < 10) minutos = "0" + minutos;
  if (resto_segundos < 10) resto_segundos = "0" + resto_segundos;

  valor_tiempo.textContent = minutos + ":" + resto_segundos;

  // Si quedan 15 segundos o menos, lo pongo en rojo
  if (segundos <= 15 && segundos > 0)
    contenedor_tiempo.classList.add("peligro");
  else contenedor_tiempo.classList.remove("peligro");
}

function parar_tiempo() {
  clearInterval(intervalo);
  intervalo = null;
}

function iniciar_tiempo() {
  parar_tiempo();
  segundos = 90;
  pintar_tiempo();
  intervalo = setInterval(() => {
    segundos--;
    if (segundos <= 0) {
      segundos = 0;
      pintar_tiempo();
      parar_tiempo();
      respuesta_mostrada = true;
      texto_estado.textContent =
        "Se acabó el tiempo. Pulsa Generar pregunta para seguir.";
    } else {
      pintar_tiempo();
    }
  }, 1000);
}

// El usuario recibe si ha acertado o no.
function comprobar_respuesta_usuario() {
  if (respuesta_mostrada) {
    texto_estado.textContent = "Ya has comprobado esta pregunta.";
  } else if (!respuesta_seleccionada) {
    texto_estado.textContent = "Selecciona una respuesta primero.";
  } else {
    let contenedor_opciones = contenido_tarjeta.querySelector(".opciones");

    contenedor_opciones.querySelectorAll(".opcion").forEach((boton) => {
      let valor = boton.dataset.valor;

      if (valor === respuesta_correcta) {
        boton.classList.add("correcta");
      } else if (valor === respuesta_seleccionada) {
        boton.classList.add("incorrecta");
      }
    });
    if (respuesta_seleccionada === respuesta_correcta) {
      puntos++;
      texto_estado.textContent = "Correcto";
    } else {
      texto_estado.textContent = "Incorrecto";
    }

    respuesta_mostrada = true;
    parar_tiempo();
    pintar_marcador();
  }
}

// Elementos opcionales
// Mostrar una pantalla final de resultados.
function mostrar_resultado_final() {
  titulo_tarjeta.textContent = "Resultado final";
  contenido_tarjeta.textContent =
    "Has conseguido " + puntos + " puntos de " + lista_preguntas.length + ".";
  texto_estado.textContent =
    "Partida terminada. Pulsa Recargar preguntas para jugar otra.";

  guardar_historial_localStorage();
}

// Elementos opcionales
// Guardar historial de puntuaciones en localStorage.
function guardar_historial_localStorage() {
  let historial = JSON.parse(localStorage.getItem("historial_trivial") || "[]");
  historial.unshift({
    fecha: new Date().toLocaleString(),
    puntos: puntos,
    total: lista_preguntas.length,
  });

  historial = historial.slice(0, 5);
  localStorage.setItem("historial_trivial", JSON.stringify(historial));
}

// Permite volver a cargar nuevas preguntas, ya sea con un botón o una opción de recarga.
function generar_siguiente_pregunta() {
  if (lista_preguntas.length === 0) {
    texto_estado.textContent =
      "No hay preguntas cargadas. Pulsa Recargar preguntas.";
  } else if (indice_pregunta >= lista_preguntas.length) {
    mostrar_resultado_final();
  } else {
    titulo_tarjeta.textContent = "Pregunta trivial";
    meta_tarjeta.textContent = "Selecciona la respuesta correcta";

    pintar_pregunta_en_pantalla(lista_preguntas[indice_pregunta]);
    indice_pregunta++;
    pintar_marcador();
    iniciar_tiempo();
  }
}

// ------ EVENTOS --------
boton_recargar.addEventListener("click", () => {
  cargar_preguntas_desde_api();
});

boton_generar.addEventListener("click", () => {
  generar_siguiente_pregunta();
});

boton_comprobar.addEventListener("click", () => {
  comprobar_respuesta_usuario();
});

boton_reiniciar.addEventListener("click", () => {
  parar_tiempo();
  segundos = 90;
  pintar_tiempo();
  texto_estado.textContent = "Tiempo reiniciado.";
});

// ------- INICIO ----------
pintar_tiempo();
cargar_preguntas_desde_api();
