/*
  TEMA 8 - ASYNC / AWAIT
  ---------------------
  Apuntes del profesor:
  - Relación entre promesas y async/await
  - Palabra clave async
  - Palabra clave await
  - Uso de try / catch
*/

/* =========================
   1) RECORDATORIO: PROMESA
   =========================
   async/await NO sustituye a las promesas.
   Es otra forma de trabajar con ellas.
*/

function procesoAsincrono() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve("Proceso terminado correctamente");
    }, 2000);
  });
}

/* =========================
   2) ¿QUÉ ES ASYNC?
   =========================
   async se usa delante de una función.
   Indica que la función va a trabajar con promesas.
*/

/* =========================
   3) ¿QUÉ ES AWAIT?
   =========================
   await espera a que la promesa se resuelva.
   SOLO se puede usar dentro de funciones async.
*/

/* =========================
   4) SELECCIÓN DE ELEMENTOS
   ========================= */

const btnEjecutar = document.getElementById("btnEjecutar");
const salida = document.getElementById("salida");

/* =========================
   5) FUNCIÓN ASYNC
   ========================= */

async function ejecutarProceso() {
  salida.textContent = "Ejecutando proceso...";

  /*
    El profesor explica que await "pausa"
    la ejecución hasta que la promesa termina.
  */

  try {
    const resultado = await procesoAsincrono();
    salida.textContent = resultado;
    console.log("Resultado:", resultado);
  } catch (error) {
    /*
      catch captura el reject de la promesa
    */
    salida.textContent = "Error: " + error;
    console.log("Error:", error);
  }
}

/* =========================
   6) EVENTO
   ========================= */

btnEjecutar.addEventListener("click", function () {
  ejecutarProceso();
});

/*
  El profesor recalca:
  - async/await hace el código más legible
  - Es equivalente a then/catch
  - Se usa mucho en proyectos reales
*/
