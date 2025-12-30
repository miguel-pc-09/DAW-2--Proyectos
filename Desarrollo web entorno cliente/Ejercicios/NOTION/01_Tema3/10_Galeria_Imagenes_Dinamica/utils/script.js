/* Implementa una galería donde el usuario pueda añadir imágenes. 
Crea un campo de texto para introducir la URL de una imagen y un botón para añadirla. 
Al pulsar el botón, crea un elemento &lt;img&gt; dinámicamente, establece su src con la URL proporcionada y añádelo a un contenedor div. 
Opcionalmente, añade un botón a cada imagen para poder eliminarla de la galería. */

// Seleccion elementos del DOM
const inputUrl = document.getElementById("urlImagen");
const botonAñadir = document.getElementById("btnAñadir");
const galeria = document.getElementById("galeria");
const mensaje = document.getElementById("mensaje");

// Evento click
botonAñadir.addEventListener("click", () => {
  // Leer el valor del input
  const url = inputUrl.value;

  // Validamos que no este vacio
  if (url === "") {
    mensaje.textContent = "Introduce una URL";
    return;
  } else {
    mensaje.textContent = "";
  }

  // Creamos contenedor para la imagen
  const tarjeta = document.createElement("div");
  tarjeta.classList.add("tarjeta");

  // Creamos la imagen dinámicamente
  const imagen = document.createElement("img");
  imagen.setAttribute("src", url);
  imagen.setAttribute("alt", "Imagen añadida por el usuario");

  // Creamos el boton para eliminar
  const botonEliminar = document.createElement("button");
  botonEliminar.textContent = "Eliminar";

  // Evento click para eliminar
  botonEliminar.addEventListener("click", () => {
    // Subimos el boton al div tarjeta
    const tarjetaPadre = botonEliminar.parentNode;

    // Subimos de la tarjeta a la galeria
    const galeriaPadre = tarjetaPadre.parentNode;

    // Eliminamos la tarjeta desde galeria
    galeriaPadre.removeChild(tarjetaPadre);
  });

  // Añadimos imagen y botón al contenedor
  tarjeta.appendChild(imagen);
  tarjeta.appendChild(botonEliminar);

  // Añadimos la tarhjeta a la galeria
  galeria.appendChild(tarjeta);

  // limpiamos el input
  inputUrl.value = "";
});
