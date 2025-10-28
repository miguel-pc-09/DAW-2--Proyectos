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

// Lo llamamos
console.log(lista);
