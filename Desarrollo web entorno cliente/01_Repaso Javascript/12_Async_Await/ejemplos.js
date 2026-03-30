// ===============================
// 1. FUNCIÓN ASYNC
// ===============================

async function saludar() {
  return "Hola";
}

// -> Devuelve una promesa automáticamente

// ===============================
// 2. USAR AWAIT
// ===============================

function obtenerDatos() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve("Datos recibidos");
    }, 2000);
  });
}

// ===============================
// 3. USAR ASYNC + AWAIT
// ===============================

async function cargarDatos() {
  console.log("Inicio");

  let resultado = await obtenerDatos();
  // -> Espera aquí hasta tener resultado

  console.log(resultado);

  console.log("Fin");
}

cargarDatos();

// Resultado:
// Inicio
// (espera 2s)
// Datos recibidos
// Fin

// ===============================
// 4. MANEJAR ERRORES (try/catch)
// ===============================

function errorPromesa() {
  return new Promise(function (resolve, reject) {
    reject("Error ocurrido");
  });
}

async function probarError() {
  try {
    let resultado = await errorPromesa();
    console.log(resultado);
  } catch (error) {
    console.log(error);
    // -> Manejo del error
  }
}

probarError();

// ===============================
// 5. EJEMPLO REAL
// ===============================

async function obtenerUsuarios() {
  let datos = await fetch("https://jsonplaceholder.typicode.com/users");

  let usuarios = await datos.json();

  console.log(usuarios);
}
