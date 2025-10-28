console.log("Ejecucion desde iteraccion");
// console.log(`El nombre es ${nombre}`);

// muestra info al usuario
let nombre = "Miguel";
// alert(`Bienvenido ${nombre} a la primera app js`);

// 2º cuadro de dialogo. Pide un confirmacion al usuario CONFIRM
// Y como pide informacion podemos guardarla en una variable y actuar sobre esta
/* let respuesta = confirm("Estas seguro que quieres continuar");
if (respuesta) {
  alert("El usuario ha dicho que si, por lo tanto esta dentro del sistema");
} else {
  alert("El usuario ha dicho que no, por lo tanto no esta dentro del sistema");
} */

// 3º es PROMPT que nos da mas iteración con el usuario. Esta nos pide un mensaje y un valor por defecto. El valor es optativo si el
// usuario lo pone bien si no, no es necesario, y nos devuelve un string o un nulo. El string sera cuando el usuario le da a aceptar y mete
// algo, y null cuando da a cancelar. Por lo tanto podemos darle una variable tambien
/* nombre = prompt("Por favor introduce tu nombre");
// si no pone nada guardara esto "" , podemos usar un if.
if (nombre != null && nombre.length > 0) {
  alert(`Perfecto ${nombre} has introducido de forma correcta el dato`);
} else {
  alert("No has introducido los datos de forma correcta.");
} */

// podemos crear los nuestros propios tanto sacandolos como de bootstrap y telwind
// En bootstrap buscamos por ejemplo dialog para ver los ejemplos, estos necesitamos meterle una clase especifica
/*
<!-- Vertically centered modal -->
<div class="modal-dialog modal-dialog-centered">
  ...
</div>
*/
// Tenemos otras, de una libreria externa, sweetalert2, y en ejemplos tenemos todas las que queramos
// Siempre que nos encontremos en alguna libreria, tenemos que buscar en sus documentos. Buscar instalacion "installation"
// 2º opciones: 1º utiliza npm, con esto es con node.js, y 2º usar CDN copiamos el script, al ser libreria lo metemos en el head.
// Ahora que ya tenemos la libreria vamos a ejemplos y copiamos el que queramos, y modificamos los mensaje que necesitemos
// En configure params, podemos ver como cambiar los colores de las alertas por si queremos
nombre = prompt("Por favor introduce tu nombre");

if (nombre != null && nombre.length > 0) {
  Swal.fire({
    title: `${nombre}`,
    text: "Nombre introducido correctamenet",
    icon: "success",
  });
} else {
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "Por favor introduce nombre correcto !",
  });
}
