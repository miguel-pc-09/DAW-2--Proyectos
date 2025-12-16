/* Desarrolla un formulario de registro que solicite nombre, email y edad usando prompt().
 Antes de procesar los datos, utiliza confirm() para verificar que el usuario desea continuar. 
 Si confirma, muestra un resumen de los datos con SweetAlert. Si cancela, muestra un mensaje de cancelación. */

alert("Bienvenido al formulario");
nombre = prompt("Por favor indique su nombre: ");
email = prompt("Su email: ");
edad = prompt("Su edad: ");

if (nombre != null && email != null && edad != null) {
  let confirmar = confirm("¿Desea registrar los datos introducidos?");
  if (confirmar) {
    Swal.fire({
      title: `Sus datos fueron registrados. Nombre: ${nombre}, email: ${email}, edad: ${edad}`,
      icon: "success",
      draggable: true,
    });
  } else {
    Swal.fire({
      icon: "error",
      title: "Lo lamento",
      text: "Si quiere volver a rellenar el formulario refresque la pagina",
    });
  }
} else {
  alert("Falto algun dato por rellenar");
}

// Si doy a cancelar si  salta el ultimo else, pero si no introduzco nada no sale el ultimo alert creo que es por los &&. Debo cambiar a ||
