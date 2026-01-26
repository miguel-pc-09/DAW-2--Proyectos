// Vamos a generar un array, es una mezcla entre array y array list de otros lenguajes
// En Js los arrays son dinamicos, no hace falta definir su tamaño
const lista = [];
// Podemos asignar valores a cualquier posicion del array
/* lista[0] = "Miguel";
lista[2] = "Maria";
lista[4] = "Juan";
lista[6] = "Celia"; */
// En los espacios donde no guardamos nada, se asigna el valor empty.
// Si en vez de let lista ponemos const lista, los elementos de la lista se pueden modificar
// Los array si podemos definir como constante mejor, todo lo que hagamos constante el sistema lo agradece.
// Podemos congelar el array poniendo Object.freeze(lista);

// Como trabajar con los diferentes elementos del array, comentamos los que ya teniamos
// Añadir elemento. Tenemos dos cosas, push y unshift, en ambos nos devuelve number, ¿cual es la nueva lenght?
// Push añade al final del array y retorna la longitud
lista.push("Miguel", "Maria", "Juan", "Celia");
// unshift añade al principio del array y retorna la longitud
lista.unshift("Ana", "Marta", "Juan");
/* lista.unshift("Paco");
lista.push("Roberto"); */
// Tambien podemos añadir en una posicion concreta
// lista[30] = "Cosa";

// Borrar elementos. Tenemos dos cosas, pop y shift
// Vamos a hacerlo con confirm
// let confirmacion = confirm("Quieres eliminar el elemento");
/* if (confirmacion) {
  Swal.fire(
    // POP borra el ultimo elemento y lo devuelve
    `Usuario con nombre ${lista.pop()} eliminado correctamente. Quedan ${lista.length}!`,
  );
} */
// POP borra el ultimo elemento y lo devuelve
// lista.pop(); // Devuelve "Roberto"

// SHIFT borra el primer elemento y lo devuelve
/* if (confirmacion) {
  Swal.fire(
    // SHIFT borra el primer elemento y lo devuelve
    `Usuario con nombre ${lista.shift()} eliminado correctamente. Quedan ${lista.length}!`,
  );
} */

// Más cosas que se podian hacer con los arrays
// Recorrer y mostrar los elementos.
// Tenemos dos opciones el bucle for y el foreach

// FOR
/* for (let index = 0; index < lista.length; index++) {
  console.log(lista[index]);
} */

// FOREACH-> AQUI se hace como funcion de flecha
// function nombre(param1, param2){}// Esta es una forma
// Flecha, los parametros y en {lo que queremos que se ejecute}. Ademas lo normal vaya asociada a una variable
// let var = (p1,p2)=>{ cuerpo }
// Como se escribe el foreach.
//1ºponemos la lista que queremos reccorer "lista".
//2º ejecutamos la funcion foreach ".forEach"
//3º a su vez entre () que le pasemos (un valor, un indice y un array) y {lo que quieres que se ejecute}
// Mostrara lo que pidamos por parametros.
lista.forEach((item, index) => {
  // item es el valor en la posicion que te toque
  // index la posicion en la que esta
  // El tercero no se suele usar es el array
  // Ahora podemos seguir haciendo cosas como preguntar. Nombre con 5 letras
  if (item.length == 5) {
    // > 6 o <6 y con charAt o split podemos seguir analizando datos.
    //console.log(`Ejecutando vuelta ${index} con valor ${item}`); // Se ejecuta una vez por cada elemento.
  }
});
// Tambien podemos aparte de preguntar como anterior mente, o bien lo que podemos hacer es un find o un filter
// find -> encuentra el elemento de la lista con la condicion buscada  -> retonar o un null o un elemento, el primero que encuentre
//Ejemplo que encuentre 3 letras. Funciona muy parecido a un metodo foreach, funcion de flecha y como devuelve un elemento lo podemos meter en una variable
let encontrado = lista.find((item) => {
  return item.length == 3;
});
// console.log(encontrado);

// filter muy parecido al anterior. Encuentra los elementos de la lista con la condicion buscada -> retorna un [] con todos los datos dentro
let listaBuscada = lista.filter((item) => {
  return item.length == 5;
});
console.log(listaBuscada);

// Y sacamos la lista
// console.log(lista);

// console.log(lista);

/* Cuando tenemos un array de elementos, los arrays no dejan de ser una lista que puedo ir agregando o quitando*/
