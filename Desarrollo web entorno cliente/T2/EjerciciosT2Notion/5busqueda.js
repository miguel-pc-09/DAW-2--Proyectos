/* Crea un array con nombres de frutas. 
Solicita al usuario que introduzca una fruta mediante prompt() y busca si existe en el array. 
Utiliza métodos de array como indexOf() o includes(). 
Muestra con SweetAlert si la fruta fue encontrada y en qué posición, o un mensaje indicando que no existe. */

alert("Bienvenido a la busqueda de la fruta");

const frutas = ["Manzana", "Platano", "Pera", "Tomate"];

let busqueda = prompt("Que fruta desea buscar:");

if (busqueda === null) {
  alert("Operacion fallida");
} else {
  // para que incluya minusculas y mayusculas, pero la variable debe ser let y no const. NO FUNCIONA NI ANTES DEL IF NI AQUI
  /* busqueda = busqueda.toLowerCase(); */
  // Compruebo si existe
  if (frutas.includes(busqueda)) {
    // includes(): Sirve para comprobar si un elemento está dentro de un array-> true o false
    // Obtenemos la posicio
    const posicion = frutas.indexOf(busqueda); // indexOf(): Sirve para saber en que posicion esta un elemento dentro del array-> numero con la posicion del valor
    Swal.fire(`${busqueda} se encuentra en la posición ${posicion}  `);
  } else {
    Swal.fire("La fruta no esta en la lista");
  }
}
