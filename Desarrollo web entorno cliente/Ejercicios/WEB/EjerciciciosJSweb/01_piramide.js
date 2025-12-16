/* Escriba un script que pedido por consola (prompt un número), represente por consola la siguiente figura con el número de filas introducido en el prompt.
En el caso de no introducir un número o que sea menor que 0 saltará un aviso por consola y dará la posibilidad de repetir el proceso: */
// Pedimos número de filas
let filas;

while (true) {
  const entrada = prompt("Cuántas filas quieres que aparezcan:");

  if (entrada === null) {
    console.log("Operación cancelada.");
    break; // el usuario canceló
  }

  filas = Number(entrada); // Convertimos a número

  // Validamos que sea número y mayor que 0
  if (isNaN(filas) || filas <= 0) {
    console.log("Debes introducir un número mayor que 0. Inténtalo de nuevo.");
  } else {
    // Si es correcto, dibujamos la figura
    for (let i = 1; i <= filas; i++) {
      let linea = "";
      for (let j = 1; j <= i; j++) {
        linea = linea + "+";
      }
      console.log(linea);
    }
    break; // salimos del bucle principal una vez mostrado el dibujo
  }
}
