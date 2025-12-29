// Seleccionamos la imagen
const imagen = document.getElementById("imagen");
const infoAlt = document.getElementById("infoAlt");

// Ruta de las dos imagenes
const img1 = "utils/img/descarga.jpeg";
const img2 = "utils/img/Logo7.png";

// Funcion para refrescar el info
function actualizarInfoAlt() {
  infoAlt.textContent = "ALT actual: " + imagen.getAttribute("alt");
}

// Cambiar el SRC usando setAttribute
document.getElementById("btnSrc").addEventListener("click", function () {
  if (imagen.getAttribute("src") === img1) {
    imagen.setAttribute("src", img2);
  } else {
    imagen.setAttribute("src", img1);
  }
});

// Cambiar el ALT accediendo a la propiedad directamente
document.getElementById("btnAlt").addEventListener("click", function () {
  const srcActual = imagen.getAttribute("src");

  if (srcActual === img1) {
    imagen.setAttribute("alt", "Imagen descarga");
  } else {
    imagen.setAttribute("alt", "Logo 7");
  }

  actualizarInfoAlt();
});

actualizarInfoAlt(); // Al refrescar la pagina saldra el inicial.
