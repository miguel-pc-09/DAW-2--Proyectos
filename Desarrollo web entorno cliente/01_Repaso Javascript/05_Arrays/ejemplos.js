// ===============================
// 1. CREAR UN ARRAY
// ===============================

let numeros = [10, 20, 30];

// -> Estoy creando una lista con 3 números

// ===============================
// 2. ACCEDER A UN ELEMENTO
// ===============================

console.log(numeros[0]);
// -> Accedo al primer elemento (10)

console.log(numeros[1]);
// -> Accedo al segundo (20)

// ===============================
// 3. MODIFICAR UN VALOR
// ===============================

numeros[1] = 50;
// -> Cambio el valor de la posición 1

console.log(numeros);
// -> [10, 50, 30]

// ===============================
// 4. LENGTH (muy importante)
// ===============================

console.log(numeros.length);
// -> Número de elementos del array

// ===============================
// 5. RECORRER ARRAY (for clásico)
// ===============================

for (let i = 0; i < numeros.length; i++) {
  console.log(numeros[i]);
  // -> Accedo uno por uno
}

// ===============================
// 6. FOR OF (más sencillo)
// ===============================

for (let numero of numeros) {
  console.log(numero);
  // -> Me da directamente el valor
}

// ===============================
// 7. AÑADIR ELEMENTOS (push)
// ===============================

numeros.push(100);
// -> Añade al final

console.log(numeros);
// -> [10, 50, 30, 100]

// ===============================
// 8. ELIMINAR ELEMENTO (pop)
// ===============================

numeros.pop();
// -> Elimina el último

console.log(numeros);

// ===============================
// 9. SHIFT (elimina primero)
// ===============================

numeros.shift();
// -> Elimina el primer elemento

console.log(numeros);

// ===============================
// 10. UNSHIFT (añadir al inicio)
// ===============================

numeros.unshift(999);
// -> Añade al principio

console.log(numeros);

// ===============================
// 11. ARRAY DE STRINGS
// ===============================

let nombres = ["Miguel", "Ana", "Luis"];

for (let nombre of nombres) {
  console.log("Hola " + nombre);
}

// ===============================
// 12. ARRAY + CONDICIONAL (muy examen)
// ===============================

let notas = [3, 6, 8, 10];

for (let nota of notas) {
  if (nota >= 5) {
    console.log("Aprobado: " + nota);
  } else {
    console.log("Suspenso: " + nota);
  }
}
