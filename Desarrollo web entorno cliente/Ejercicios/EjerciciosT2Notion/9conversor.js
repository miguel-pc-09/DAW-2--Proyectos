/* Crea un conversor que solicite al usuario una temperatura y la unidad de origen (Celsius o Fahrenheit) mediante prompt(). 
Utiliza operadores aritméticos para realizar la conversión a la otra unidad. 
Valida que la entrada sea numérica y muestra el resultado formateado con dos decimales usando SweetAlert. */
alert("Conversor de temperaturas (Celsius ↔ Fahrenheit)");

// 1) Pedimos la temperatura
let entrada = prompt("Introduce la temperatura (ej. 36.5):");
if (entrada === null) {
  alert("Operación cancelada.");
} else {
  // Permitimos coma como separador decimal
  const temp = parseFloat(entrada.replace(",", "."));

  if (isNaN(temp)) {
    alert("Debes introducir un número válido.");
  } else {
    // 2) Pedimos la unidad de origen
    let unidad = prompt("Unidad de ORIGEN (C o F):");
    if (unidad === null) {
      alert("Operación cancelada.");
    } else {
      unidad = unidad.toLowerCase();

      let convertido, destino;

      if (unidad === "c" || unidad === "celsius") {
        // C → F: F = C * 9/5 + 32
        convertido = (temp * 9) / 5 + 32;
        destino = "Fahrenheit";
        Swal.fire(`${temp.toFixed(2)} °C = ${convertido.toFixed(2)} °F`);
      } else if (unidad === "f" || unidad === "fahrenheit") {
        // F → C: C = (F - 32) * 5/9
        convertido = ((temp - 32) * 5) / 9;
        destino = "Celsius";
        Swal.fire(`${temp.toFixed(2)} °F = ${convertido.toFixed(2)} °C`);
      } else {
        alert("Unidad no válida. Usa C/F o Celsius/Fahrenheit.");
      }
    }
  }
}
