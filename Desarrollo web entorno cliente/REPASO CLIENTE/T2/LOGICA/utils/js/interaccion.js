// let nombre = "Miguel"; // Como el ambito es compartido por todos los scripts y la variable nombre ya esta nos dara error
// y podemos traerlo desde otro archivo js
console.log("Ejecucion desde interaccion");
// console.log(`El nombre es ${nombre}`); // Nos traera el nombre de ana que fue el ultimo en utilizar

// Comentamos el otro script y vamos a accer una interacion del sistema
// Sacar cuadros de dialogo rudimentarios
// Existen tres tipos:
// Alert, muestra info al usuario. Podemos definir una variable con un nombre para que salga tambien
let nombre = "miguel";
// alert(`Bienvenido ${nombre} a la primera app js `);   Descomentar para utilizar
// no permite recoger la informacion pero si recogerla

// Pide una confirmacion al usuario CONFIRM.
// Como pide informacion lo podemos guardar en una variable
// Comentamos para mantener el ejemplo
// confirm("Estas seguro que quieres continuar?"); // devuelve true o false segun lo que pulse el usuario
// let respuesta = confirm("Estas seguro que quieres continuar?");
// y ahora podemos podemos actuar ante ella
/* if (respuesta) {
  alert("El usuario ha dicho que si por lo tanto esta dentro del sistema");
} else {
  alert("El usuario ha dicho que no por lo tanto esta fuera del sistema");
} */

// Y TENEMOS EL PROMPT, es un tipo de funcion que nos da un tipo de iteracion con el usuario
// Nos pide un mensaje y un valor por defecto
nombre = prompt("Por favor introduce tu nombre"); // si queremos algo por defecto ponemos coma y el valor
// prompt("Por favor introduce tu nombre","miguel"); Nos devuelve un string o null si no introduce nada
// Podemos seguir actuando sobre el
if (nombre != null && nombre.length > 0) {
  Swal.fire({
    title: `${nombre}`,
    text: "Nombre introducido correctamente",
    icon: "success",
  });
} else {
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "Por favor introduce nombre correcto",
  });
}

// Ahora utilizaremos bootstrap para hacer estas interacciones mas vistosas
// poniendo dialog tenemos tipos distintos.
// De momento usaremos SweetAlert. Dentro buscar en su documentacion, instalaciones
// Podemos instalar por npm o por cdn
//El de introducir como necesita promeass se vera mas adelante
