// ===============================
// 1. BUCLE FOR (el más importante)
// ===============================

// Empiezo en 0, repito mientras i < 5, aumento de 1 en 1
for (let i = 0; i < 5; i++) {
  console.log(i);
  // -> Se ejecuta 5 veces: 0,1,2,3,4
}

// ===============================
// 2. FOR CON TEXTO
// ===============================

for (let i = 1; i <= 3; i++) {
  console.log("Vuelta número " + i);
}

// ===============================
// 3. BUCLE WHILE
// ===============================

let contador = 0;

while (contador < 3) {
  console.log(contador);
  contador++;
  // -> IMPORTANTE: si no incremento, se queda en bucle infinito
}

// ===============================
// 4. DO WHILE
// ===============================

let numero = 5;

do {
  console.log("Se ejecuta al menos una vez");
  numero++;
} while (numero < 5);
// -> Aunque la condición sea falsa, entra una vez

// ===============================
// 5. RECORRER ARRAY (muy importante)
// ===============================

let numeros = [10, 20, 30];

// Uso el for para recorrerlo
for (let i = 0; i < numeros.length; i++) {
  console.log(numeros[i]);
  // -> Accedo a cada posición del array
}

// ===============================
// 6. FOR OF (más moderno)
// ===============================

let colores = ["rojo", "verde", "azul"];

for (let color of colores) {
  console.log(color);
  // -> Recorre directamente los valores
}

// ===============================
// 7. BREAK (romper bucle)
// ===============================

for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break;
    // -> Sale del bucle cuando i es 5
  }
  console.log(i);
}

// ===============================
// 8. CONTINUE (saltar vuelta)
// ===============================

for (let i = 0; i < 5; i++) {
  if (i === 2) {
    continue;
    // -> Salta el 2
  }
  console.log(i);
}
