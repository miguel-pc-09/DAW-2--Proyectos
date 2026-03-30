// ===============================
// 1. EJEMPLO SIMPLE CON setTimeout
// ===============================

console.log("Inicio");

setTimeout(function () {
  console.log("Esto aparece después");
}, 2000);

// -> Se ejecuta después de 2 segundos

console.log("Fin");

// Resultado:
// Inicio
// Fin
// Esto aparece después

// ===============================
// 2. CREAR UNA PROMESA
// ===============================

let promesa = new Promise(function (resolve, reject) {
  let todoBien = true;

  if (todoBien) {
    resolve("Todo correcto");
  } else {
    reject("Ha habido un error");
  }
});

// ===============================
// 3. USAR THEN Y CATCH
// ===============================

promesa
  .then(function (resultado) {
    console.log(resultado);
    // -> Se ejecuta si resolve()
  })
  .catch(function (error) {
    console.log(error);
    // -> Se ejecuta si reject()
  });

// ===============================
// 4. EJEMPLO REAL (simulación API)
// ===============================

function obtenerDatos() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(["Miguel", "Ana", "Luis"]);
    }, 2000);
  });
}

// ===============================
// 5. USAR LA PROMESA
// ===============================

obtenerDatos().then(function (datos) {
  console.log(datos);
  // -> Datos recibidos después de 2s
});

// ===============================
// 6. EJEMPLO CON ERROR
// ===============================

function pruebaError() {
  return new Promise(function (resolve, reject) {
    reject("Error simulado");
  });
}

pruebaError()
  .then(function () {
    console.log("Todo bien");
  })
  .catch(function (error) {
    console.log(error);
    // -> "Error simulado"
  });
