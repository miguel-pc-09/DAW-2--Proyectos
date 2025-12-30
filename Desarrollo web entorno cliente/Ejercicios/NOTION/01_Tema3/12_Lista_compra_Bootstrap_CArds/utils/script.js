/* Implementa una lista de la compra utilizando Bootstrap Cards. 
Crea un formulario con campos para el nombre del producto, cantidad y precio. 
Al añadir un producto, crea dinámicamente una Card de Bootstrap (card, card-body, card-title) que muestre la información del producto. 
Cada card debe incluir un botón para eliminar el producto. Muestra el total de la compra en un elemento aparte que se actualice automáticamente. 
Utiliza clases de Bootstrap para el diseño responsivo con row y col. */

// Elementos del DOM
const inputProducto = document.getElementById("producto");
const inputCantidad = document.getElementById("cantidad");
const inputPrecio = document.getElementById("precio");
const botonAñadir = document.getElementById("btnAñadir");

const contenedorCards = document.getElementById("contenedorCards");
const totalSpan = document.getElementById("total");
const mensaje = document.getElementById("mensaje");

// Total acumulado
let totalCompra = 0;

// Función para actualizar el total en pantalla
const actualizarTotal = () => {
  totalSpan.textContent = totalCompra.toFixed(2);
};

// Función para mostrar error
const mostrarError = (texto) => {
  mensaje.classList.remove("d-none");
  mensaje.textContent = texto;
};

// Función para ocultar error
const ocultarError = () => {
  mensaje.classList.add("d-none");
  mensaje.textContent = "";
};

// Evento click del botón añadir
botonAñadir.addEventListener("click", () => {
  // Leemos valores
  const producto = inputProducto.value;
  const cantidadTexto = inputCantidad.value;
  const precioTexto = inputPrecio.value;

  // Validaciones
  if (producto === "" || cantidadTexto === "" || precioTexto === "") {
    mostrarError("❌ Rellena producto, cantidad y precio");
    return;
  }

  const cantidad = Number(cantidadTexto);
  const precio = Number(precioTexto);

  if (Number.isNaN(cantidad) === true || cantidad <= 0) {
    mostrarError("❌ La cantidad debe ser un número mayor que 0");
    return;
  }

  if (Number.isNaN(precio) === true || precio <= 0) {
    mostrarError("❌ El precio debe ser un número mayor que 0");
    return;
  }

  ocultarError();

  // Subtotal del producto
  const subtotal = cantidad * precio;

  // Sumamos al total
  totalCompra = totalCompra + subtotal;
  actualizarTotal();

  // --- Crear Card de Bootstrap dinámicamente ---

  // Columna responsive para la card
  const col = document.createElement("div");
  col.classList.add("col-12");
  col.classList.add("col-md-6");
  col.classList.add("col-lg-4");

  // Card
  const card = document.createElement("div");
  card.classList.add("card");

  // Card body
  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  // Título (producto)
  const titulo = document.createElement("h5");
  titulo.classList.add("card-title");
  titulo.textContent = producto;

  // Texto con cantidad, precio y subtotal
  const texto = document.createElement("p");
  texto.classList.add("card-text");
  texto.textContent =
    "Cantidad: " +
    cantidad +
    " | Precio: " +
    precio.toFixed(2) +
    " €" +
    " | Subtotal: " +
    subtotal.toFixed(2) +
    " €";

  // Botón eliminar
  const botonEliminar = document.createElement("button");
  botonEliminar.classList.add("btn");
  botonEliminar.classList.add("btn-danger");
  botonEliminar.textContent = "Eliminar";

  // Evento eliminar
  botonEliminar.addEventListener("click", () => {
    // Restamos el subtotal del total
    totalCompra = totalCompra - subtotal;
    actualizarTotal();

    // Eliminamos la card completa (col)
    const colPadre = botonEliminar.parentNode.parentNode.parentNode;
    const contenedorPadre = colPadre.parentNode;

    contenedorPadre.removeChild(colPadre);
  });

  // Montamos la estructura de la card
  cardBody.appendChild(titulo);
  cardBody.appendChild(texto);
  cardBody.appendChild(botonEliminar);

  card.appendChild(cardBody);
  col.appendChild(card);

  contenedorCards.appendChild(col);

  // Limpiar inputs
  inputProducto.value = "";
  inputCantidad.value = "";
  inputPrecio.value = "";
});
