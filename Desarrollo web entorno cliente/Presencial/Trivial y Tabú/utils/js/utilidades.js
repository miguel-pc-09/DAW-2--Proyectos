/* =========================================================
   utilidades.js
   - Funciones pequeñas reutilizables (formato tiempo, ids, etc.)
   ========================================================= */

/**
 * Convierte segundos a formato mm:ss
 */
function formatearTiempo(segundos) {
  const m = String(Math.floor(segundos / 60)).padStart(2, "0");
  const s = String(segundos % 60).padStart(2, "0");
  return `${m}:${s}`;
}

/**
 * Genera un id simple (para equipos)
 */
function generarId() {
  return Date.now().toString() + Math.floor(Math.random() * 1000).toString();
}

/**
 * Devuelve un elemento del DOM o lanza aviso en consola si no existe.
 */
function $(id) {
  const el = document.getElementById(id);
  if (!el) console.warn(`No existe el elemento con id: ${id}`);
  return el;
}

/**
 * Baraja un array (si underscore está, lo usamos; si no, fallback)
 */
function barajar(array) {
  if (window._ && _.shuffle) return _.shuffle(array);
  // Fallback rápido
  return array
    .map((x) => ({ x, r: Math.random() }))
    .sort((a, b) => a.r - b.r)
    .map((o) => o.x);
}

/**
 * Elige un elemento aleatorio
 */
function elegirAleatorio(array) {
  if (!array || array.length === 0) return null;
  const i = Math.floor(Math.random() * array.length);
  return array[i];
}
