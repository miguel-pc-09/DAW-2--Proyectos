// ===============================
// 1. GUARDAR DATOS
// ===============================

localStorage.setItem("nombre", "Miguel");
// -> Guarda clave "nombre" con valor "Miguel"

// ===============================
// 2. OBTENER DATOS
// ===============================

let nombre = localStorage.getItem("nombre");

console.log(nombre);
// -> "Miguel"

// ===============================
// 3. ELIMINAR DATO
// ===============================

localStorage.removeItem("nombre");
// -> Borra solo esa clave

// ===============================
// 4. BORRAR TODO
// ===============================

localStorage.clear();
// -> Elimina todo el almacenamiento

// ===============================
// 5. GUARDAR NÚMEROS (cuidado)
// ===============================

localStorage.setItem("edad", 25);

let edad = localStorage.getItem("edad");

console.log(edad);
// -> "25" (string, no número)

// ===============================
// 6. GUARDAR OBJETOS (MUY IMPORTANTE)
// ===============================

let usuario = {
  nombre: "Miguel",
  edad: 25,
};

// Convertir a texto
localStorage.setItem("usuario", JSON.stringify(usuario));

// ===============================
// 7. RECUPERAR OBJETO
// ===============================

let usuarioGuardado = localStorage.getItem("usuario");

// Convertir a objeto
let usuarioObjeto = JSON.parse(usuarioGuardado);

console.log(usuarioObjeto.nombre);
// -> "Miguel"

// ===============================
// 8. EJEMPLO REAL (muy examen)
// ===============================

let input = document.querySelector("#nombre");
let boton = document.querySelector("#guardar");

boton.addEventListener("click", function () {
  localStorage.setItem("nombre", input.value);
});

// Al cargar la página
let nombreGuardado = localStorage.getItem("nombre");

if (nombreGuardado) {
  input.value = nombreGuardado;
}
// -> Mantiene el valor al recargar
