/*
  TEMA 6 - LOCALSTORAGE
  --------------------
  Aquí practico:
  - Qué es localStorage
  - Guardar datos
  - Leer datos
  - Borrar datos
  - Uso de claves
*/

/* =========================
   1) SELECCIÓN DE ELEMENTOS
   ========================= */

const inputNombre = document.getElementById("inputNombre");
const btnGuardar = document.getElementById("btnGuardar");
const btnCargar = document.getElementById("btnCargar");
const btnBorrar = document.getElementById("btnBorrar");
const salida = document.getElementById("salida");

/* =========================
   2) CONCEPTO DE LOCALSTORAGE
   =========================
   - Guarda datos en el navegador
   - Los datos no se borran al cerrar la página
   - Solo se pueden guardar strings
*/

const CLAVE_NOMBRE = "nombreUsuario";

/* =========================
   3) GUARDAR DATOS
   ========================= */

btnGuardar.addEventListener("click", function () {
  const nombre = inputNombre.value.trim();

  if (nombre === "") {
    salida.textContent = "No se ha guardado nada (campo vacío)";
    return;
  }

  localStorage.setItem(CLAVE_NOMBRE, nombre);
  salida.textContent = "Nombre guardado en localStorage";
});

/* =========================
   4) CARGAR DATOS
   ========================= */

btnCargar.addEventListener("click", function () {
  const nombreGuardado = localStorage.getItem(CLAVE_NOMBRE);

  if (nombreGuardado === null) {
    salida.textContent = "No hay ningún nombre guardado";
    return;
  }

  inputNombre.value = nombreGuardado;
  salida.textContent = "Nombre cargado desde localStorage";
});

/* =========================
   5) BORRAR DATOS
   ========================= */

btnBorrar.addEventListener("click", function () {
  localStorage.removeItem(CLAVE_NOMBRE);
  salida.textContent = "Nombre borrado de localStorage";
});

/* =========================
   6) COMPROBAR SI EXISTE
   =========================
   Esto se ejecuta al cargar la página
*/

const nombreAlCargar = localStorage.getItem(CLAVE_NOMBRE);

if (nombreAlCargar !== null) {
  salida.textContent = "Ya había un nombre guardado: " + nombreAlCargar;
}
