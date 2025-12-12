/*
  TEMA 6 - LOCALSTORAGE
  --------------------
  Apuntes del profesor:
  - Qué es localStorage
  - Persistencia de datos
  - Clave / valor
  - Solo se guardan strings
  - Uso de JSON
  - Comprobación de datos guardados
*/

/* =========================
   1) ¿QUÉ ES LOCALSTORAGE?
   =========================
   localStorage permite guardar datos en el navegador.
   Los datos:
   - No se borran al cerrar la página
   - Se guardan como clave / valor
   - SOLO se pueden guardar strings
*/

/* =========================
   2) SELECCIÓN DE ELEMENTOS
   ========================= */

const inputNombre = document.getElementById("inputNombre");
const btnGuardar = document.getElementById("btnGuardar");
const btnCargar = document.getElementById("btnCargar");
const btnBorrar = document.getElementById("btnBorrar");
const salida = document.getElementById("salida");

/* =========================
   3) CLAVE DE LOCALSTORAGE
   =========================
   El profesor insiste en usar constantes
*/

const CLAVE_USUARIO = "usuario";

/* =========================
   4) GUARDAR DATOS
   ========================= */

btnGuardar.addEventListener("click", function () {
  const nombre = inputNombre.value.trim();

  if (nombre === "") {
    salida.textContent = "No se ha guardado nada";
    return;
  }

  /*
    localStorage solo guarda strings,
    por eso guardamos directamente el texto
  */
  localStorage.setItem(CLAVE_USUARIO, nombre);
  salida.textContent = "Nombre guardado correctamente";
});

/* =========================
   5) CARGAR DATOS
   ========================= */

btnCargar.addEventListener("click", function () {
  const nombreGuardado = localStorage.getItem(CLAVE_USUARIO);

  /*
    getItem devuelve null si no existe la clave
  */
  if (nombreGuardado === null) {
    salida.textContent = "No hay datos guardados";
    return;
  }

  inputNombre.value = nombreGuardado;
  salida.textContent = "Nombre cargado desde localStorage";
});

/* =========================
   6) BORRAR DATOS
   ========================= */

btnBorrar.addEventListener("click", function () {
  localStorage.removeItem(CLAVE_USUARIO);
  salida.textContent = "Datos borrados de localStorage";
});

/* =========================
   7) LOCALSTORAGE + OBJETOS
   =========================
   El profesor explica que para guardar objetos
   hay que usar JSON.stringify y JSON.parse
*/

const usuarioObjeto = {
  nombre: "Miguel",
  edad: 21,
  curso: "DAW",
};

/*
  Guardar objeto
*/
const usuarioJSON = JSON.stringify(usuarioObjeto);
localStorage.setItem("usuarioObjeto", usuarioJSON);

/*
  Leer objeto
*/
const objetoLeido = localStorage.getItem("usuarioObjeto");

if (objetoLeido !== null) {
  const usuarioParseado = JSON.parse(objetoLeido);
  console.log("Objeto recuperado:", usuarioParseado);
}

/* =========================
   8) COMPROBAR AL CARGAR
   =========================
   Muy típico en clase y examen
*/

const nombreAlCargar = localStorage.getItem(CLAVE_USUARIO);

if (nombreAlCargar !== null) {
  salida.textContent = "Ya había un nombre guardado: " + nombreAlCargar;
}
