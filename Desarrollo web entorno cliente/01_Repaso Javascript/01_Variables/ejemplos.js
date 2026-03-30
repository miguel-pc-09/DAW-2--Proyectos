// Creo una variable llamada nombre
let nombre = "Miguel";
// -> Estoy guardando el texto "Miguel" dentro de la variable nombre

// Creo una constante edad
const edad = 25;
// -> Guardo el número 25, pero no lo podré cambiar después

// Muestro el nombre por consola
console.log(nombre);
// -> Le digo al programa que saque por pantalla el contenido de la variable

// Muestro la edad
console.log(edad);
// -> Igual que antes, pero con otra variable

// CAMBIO UNA VARIABLE (esto solo se puede con let)
nombre = "Juan";
// -> Ahora la variable nombre ya no es "Miguel", es "Juan"

console.log(nombre);
// -> Veré "Juan"

// ERROR típico (NO HACER ESTO)
edad = 30;
// -> Esto daría error porque edad es const (no se puede cambiar)
