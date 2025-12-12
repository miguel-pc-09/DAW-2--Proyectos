/*
  TEMA 8 - ASYNC / AWAIT
  ---------------------
  Aquí practico:
  - Qué es async / await
  - Uso de await con promesas
  - Manejo de errores con try / catch
  - Relación entre promesas y async/await
*/

/* =========================
   1) SELECCIÓN DE ELEMENTOS
   ========================= */

const btnCorrecto = document.getElementById("btnCorrecto");
const btnError = document.getElementById("btnError");
const salida = document.getElementById("salida");

/* =========================
   2) FUNCIÓN QUE DEVUELVE UNA PROMESA
   =========================
   Es la misma idea que en el tema anterior,
   pero aquí la usaré con async/await.
*/

function procesoAsincrono(todoVaBien) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (todoVaBien) {
        resolve("Proceso completado correctamente");
      } else {
        reject("Error en el proceso asíncrono");
      }
    }, 2000);
  });
}

/* =========================
   3) FUNCIÓN ASYNC
   =========================
   - async indica que la función trabaja con promesas
   - await espera a que la promesa termine
*/

async function ejecutarProcesoCorrecto() {
  salida.textContent = "Ejecutando proceso async/await...";

  try {
    const resultado = await procesoAsincrono(true);
    salida.textContent = resultado;
    console.log("Resultado:", resultado);
  } catch (error) {
    salida.textContent = error;
    console.log("Error:", error);
  } finally {
    console.log("Proceso finalizado");
  }
}

/* =========================
   4) FUNCIÓN ASYNC CON ERROR
   ========================= */

async function ejecutarProcesoError() {
  salida.textContent = "Ejecutando proceso async/await...";

  try {
    const resultado = await procesoAsincrono(false);
    salida.textContent = resultado;
  } catch (error) {
    salida.textContent = error;
    console.log("Error capturado:", error);
  } finally {
    console.log("Proceso finalizado");
  }
}

/* =========================
   5) EVENTOS
   ========================= */

btnCorrecto.addEventListener("click", function () {
  ejecutarProcesoCorrecto();
});

btnError.addEventListener("click", function () {
  ejecutarProcesoError();
});

/* =========================
   6) CONCLUSIÓN
   =========================
   - async/await es solo una forma más cómoda
     de trabajar con promesas
   - internamente sigue usando promesas
*/
