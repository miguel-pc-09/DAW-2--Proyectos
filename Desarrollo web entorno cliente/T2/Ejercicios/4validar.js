/* Implementa un validador de contraseñas que solicite al usuario una contraseña mediante prompt(). 
La contraseña debe tener al menos 8 caracteres, contener números y letras. 
Utiliza operadores lógicos para validar y muestra mensajes apropiados con SweetAlert indicando si la contraseña es válida o qué requisitos faltan. */

const contraseña = prompt("Introduce una contraseña:");

if (contraseña === null) {
  alert("Operacion canlcelada");
} else {
  // Comprobamos si es mayor o igual a 8
  const tieneLongitud = contraseña.length >= 8;

  // Recorremos la contraseña
  let tieneNumero = false;
  let tieneLetra = false;

  // Hacemos un for para recorrer la contraseña y comprobar
  for (let i = 0; i < contraseña.length; i++) {
    const c = contraseña[i];

    // numeros y despues letras
    if (c >= "0" && c <= "9") {
      // comprobamos que tenga un numero entre 0 y 9
      tieneNumero = true; // Si es correcto cambiamos la variable a true
    } else if ((c >= "A" && c <= "Z") || (c >= "a" && c <= "z")) {
      // Comprobamos que tanto en mayusculas como minusculas contenga letras
      tieneLetra = true; // Si es correcto pasamos a true la variable
    }
  }

  // Ahora usamos los operadores logicos con las validaciones anteriores
  if (tieneLongitud && tieneNumero && tieneLetra) {
    alert("Contraseña válida: ✅");
  } else {
    // Decimos que falta
    let mensaje = "Contraseña no válida. Faltan:\n";
    if (!tieneLongitud) {
      mensaje += "- Al menos 8 caracteres\n";
    }
    if (!tieneNumero) {
      mensaje += "- Al menos un número\n";
    }
    if (!tieneLetra) {
      mensaje += "- Al menos una letra\n";
    }
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: mensaje,
      footer: '<a href="#">Why do I have this issue?</a>',
    });
  }
}
// No me genera los saltos correctamente
