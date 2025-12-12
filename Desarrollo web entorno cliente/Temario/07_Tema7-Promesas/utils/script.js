/*
  TEMA 7 - PROMESAS
  ----------------
  Apuntes del profesor:
  - Qué es la asincronía
  - Qué es una promesa
  - Estados de una promesa
  - resolve / reject
  - then / catch / finally
  - Uso de setTimeout para simular procesos
*/

/* =========================
   1) ¿QUÉ ES LA ASINCRONÍA?
   =========================
   Un proceso asíncrono es aquel que no se ejecuta
   de forma inmediata.

   Ejemplo típico explicado en clase:
   - Peticiones a servidores
   - Temporizadores
*/

/*
  setTimeout ejecuta código después de un tiempo.
*/

setTimeout(function () {
  console.log("Este mensaje aparece después de 1 segundo");
}, 1000);

/* =========================
   2) ¿QUÉ ES UNA PROMESA?
   =========================
   Una promesa representa un valor que se obtendrá
   en el futuro.

   Una promesa puede:
   - resolverse (resolve)
   - fallar (reject)
*/

/* =========================
   3) CREAR UNA PROMESA
   ========================= */

function esperarTiempo(segundos, provocarError) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (provocarError) {
        reject("La promesa ha fallado");
      } else {
        resolve("La promesa se ha resuelto correctamente");
      }
    }, segundos * 1000);
  });
}

/* =========================
   4) SELECCIÓN DE ELEMENTOS
   ========================= */

const inputTiempo = document.getElementById("inputTiempo");
const btnEjecutar = document.getElementById("btnEjecutar");
const btnError = document.getElementById("btnError");
const salida = document.getElementById("salida");

/* =========================
   5) USAR PROMESAS (THEN)
   =========================
   then se ejecuta cuando la promesa se resuelve
*/

btnEjecutar.addEventListener("click", function () {
  const tiempo = Number(inputTiempo.value);

  salida.textContent = "Ejecutando promesa...";

  esperarTiempo(tiempo, false)
    .then(function (mensaje) {
      salida.textContent = mensaje;
      console.log("THEN:", mensaje);
    })
    .catch(function (error) {
      salida.textContent = error;
      console.log("CATCH:", error);
    })
    .finally(function () {
      console.log("FINALLY: promesa finalizada");
    });
});

/* =========================
   6) PROMESA CON ERROR
   =========================
   catch se ejecuta cuando la promesa falla
*/

btnError.addEventListener("click", function () {
  const tiempo = Number(inputTiempo.value);

  salida.textContent = "Ejecutando promesa con error...";

  esperarTiempo(tiempo, true)
    .then(function (mensaje) {
      salida.textContent = mensaje;
    })
    .catch(function (error) {
      salida.textContent = error;
      console.log("Error capturado:", error);
    })
    .finally(function () {
      console.log("FINALLY: promesa finalizada");
    });
});

/*
  El profesor recalca:
  - then -> cuando resolve
  - catch -> cuando reject
  - finally -> siempre
*/
