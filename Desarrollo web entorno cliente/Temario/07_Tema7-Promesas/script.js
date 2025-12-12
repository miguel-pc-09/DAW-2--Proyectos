/*
  TEMA 7 - PROMESAS
  ----------------
  Aquí practico:
  - Qué es una promesa
  - resolve y reject
  - then, catch y finally
  - Simulación de procesos asíncronos
*/

/* =========================
   1) SELECCIÓN DE ELEMENTOS
   ========================= */

const btnExito = document.getElementById("btnExito");
const btnError = document.getElementById("btnError");
const salida = document.getElementById("salida");

/* =========================
   2) ¿QUÉ ES UNA PROMESA?
   =========================
   Una promesa representa una operación que terminará en el futuro.
   Puede:
   - resolverse (resolve)
   - fallar (reject)
*/

/* =========================
   3) CREAR UNA PROMESA
   ========================= */

function ejemploPromesa(todoSaleBien) {
  return new Promise(function (resolve, reject) {
    // Simulo un proceso que tarda 2 segundos
    setTimeout(function () {
      if (todoSaleBien) {
        resolve("La promesa se ha resuelto correctamente");
      } else {
        reject("La promesa ha fallado");
      }
    }, 2000);
  });
}

/* =========================
   4) USAR PROMESA (THEN / CATCH)
   ========================= */

btnExito.addEventListener("click", function () {
  salida.textContent = "Ejecutando promesa...";

  ejemploPromesa(true)
    .then(function (mensaje) {
      // Se ejecuta si la promesa se resuelve
      salida.textContent = mensaje;
      console.log("THEN:", mensaje);
    })
    .catch(function (error) {
      // Se ejecuta si la promesa falla
      salida.textContent = error;
      console.log("CATCH:", error);
    })
    .finally(function () {
      // Se ejecuta siempre
      console.log("Promesa finalizada");
    });
});

/* =========================
   5) PROMESA CON ERROR
   ========================= */

btnError.addEventListener("click", function () {
  salida.textContent = "Ejecutando promesa...";

  ejemploPromesa(false)
    .then(function (mensaje) {
      salida.textContent = mensaje;
    })
    .catch(function (error) {
      salida.textContent = error;
      console.log("Error capturado:", error);
    })
    .finally(function () {
      console.log("Promesa finalizada");
    });
});
