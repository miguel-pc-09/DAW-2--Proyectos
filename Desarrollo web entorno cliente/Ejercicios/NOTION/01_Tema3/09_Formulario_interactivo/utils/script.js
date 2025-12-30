/* Crea un formulario con campos de texto para nombre y email. 
Añade un botón que, al hacer clic, lea los valores de los campos utilizando value y muestre la información en un párrafo o div debajo del formulario. 
Valida que los campos no estén vacíos antes de mostrar la información. */

// Selecionamos los elementos del formulario
const inputNombre = document.getElementById("nombre");
const inputEmail = document.getElementById("email");
const boton = document.getElementById("btnMostrar");
const resultado = document.getElementById("resultado");

// Evento del click
boton.addEventListener("click", () => {
  // leemos los valores de los inputs
  const nombre = inputNombre.value;
  const email = inputEmail.value;

  // Validamos que los campos no esten vacios
  if (nombre === "" || email === "") {
    // mensaje de error
    resultado.textContent = "1 o más campos estan vacíos";
  } else {
    // Mostramos la informacion
    resultado.textContent = "Nombre: " + nombre + " - Email: " + email;
  }
});
