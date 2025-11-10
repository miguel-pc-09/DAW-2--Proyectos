// Array , es una mezcla entre array y arraylist.
// En java lo malo que tenian es que eran estaticos, son listas que no pueden alterar su tamaño. EN JS NO.
// Creamos
let lista = [];
// Si definimos la lista como const lista =[] no nos daria fallo porque lo que no podemos cambiar es lista, no lo de dentro. Siempre que podamos que sea const.

//  Podemos congelar la lista para que no se pueda tocar poniendo lo siguiente
// Object.freeze(lista) Esto por ejemplo se puede decir que cuando tengamos un size de 8 que se congele.
// Tambien podemos dejar como null una posición una cosa muy parecida al bingo del año pasado
// lista[2] = null;

// Podemos rellenar de esta manera, lo que pasa que en las posiciones que no pongamos nada saldra como EMPTY, aun asi nos dira que tenemos 7, guarda los vacios
lista[0] = "Miguel";
lista[2] = "María";
lista[4] = "Juan";
lista[6] = "Celia";

// Trabajar con elementos de principio y final

// añadir elementos. 1º metodo PUSH añade al final y retorna la nueva longitud
lista.push("Borja", "Juan", "Maria", "Celia");
// añadir al principio con UNSHIFT
lista.unshift("Claudia", "Marta", "Marcos");

// Borrado con POP y shift. POP al final y SHIFT al principio
/* let confirmacion = confirm("Quieres eliminar el elemento");
if (confirmacion) {
  Swal.fire(
    `Usuario con nombre ${lista.pop()} eliminado correctamente. Quedan ${
      lista.length
    }`
  );
  //
} */
// Eliminar el primero
/* let confirmacion2 = confirm("Quieres eliminar el elemento");
if (confirmacion2) {
  Swal.fire(
    `Usuario con nombre ${lista.shift()} eliminado correctamente. Quedan ${
      lista.length
    }`
  );
} */

// Más cosas que podemos hacer
// Tamaño con -> length
// Recorrer y mostrar. Tenemos dos opciones el bucle for y foreach
// For: desde la posicion 0; hasta lista punto leg; con incremento de 1. haz un log de lista[en posicion index]
/* for (let index = 0; index < lista.length; index++) {
  console.log(lista[index]);
} */

//                             tipo de variable : la lista
// foreach: antes haciamos for(String item : lista){que pasaba con la iteracion }
// Aqui se escribe con la funcion de flecha. es una funcion que se escribe muy rapida
// public void nombre(param1, param2){}
// function nombre(param1, param2){}
// Aqui la escribes tal cual la estas viendo. (los parametros )=> {lo que quieres que se ejecute}. Y lo normal y corriente es que vaya asociada a una variable
// let var = (p1, p2) => {cuerpo}
// Se puede seguir escribiendo igual poniendo FORIN y FOROF, pero no se usa ni uno ni otro
//       iterando      lo que recorres
/* for (const element of object) {
    
} */
/*
1º ponemos la lista que queremos recorrer en este caso(lista) y ejecutamos con (.) la funcion foreach lista.foreach. La funcion nos pide 3 parametros un VALOR, un INDICE y un ARRAY y que queremos que se ejecute
*/
// value:string -> el valor en la posicion que te toque nos sacara el nombre de la posicion en este caso los nombres
// index: la posicion en la que esta
// array: el array que estoy ejecutando
lista.forEach((item) => {
  console.log(item);
});
lista.forEach((item, index, array) => {
  // No hace falta que le demos parametros, si queremos 1 se lo pedimos, 1 item, 2 index, 3 array
  // El cuerpo se ejecuta una vez por cada elemento de la lista (por cada iteracion )
  // Tambien podemos trabajar por ejemplo q quiero aquellos nombres que cullo numero de letras sean 5
  if (item.length == 5) {
    // mas de 5, item.length > 5
    console.log(`Ejecutando vuelta ${index} con valor ${item} `); // sacara los valores cullo nombre sea igual a 5 y su posicion
  }
  /* console.log(
    `Ejecutando vuelta ${index} con valor ${item} `
  ); */ // Da una vuelta por cada elemento
});

// Lo llamamos
// console.log(lista);
