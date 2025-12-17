/* Diseña una página con una imagen y un botón. 
Al hacer clic en el botón, la imagen debe ocultarse si está visible, o mostrarse si está oculta. 
Utiliza la propiedad style.display para alternar entre 'none' y 'block'. 
Puedes usar una variable para controlar el estado actual. */

let btnMostOcul = document.getElementById("btnMostOcul");
let img = document.getElementById("img");

let estado = true;

btnMostOcul.addEventListener("click", () => {
  if (estado) {
    img.style.display = "none";
    estado = false;
  } else {
    img.style.display = "block";
    estado = true;
  }
});
