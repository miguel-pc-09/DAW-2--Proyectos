/* Crea un conversor de monedas utilizando Bootstrap para el diseño. 
El formulario debe incluir un campo de entrada para la cantidad, 
dos selectores (&lt;select&gt;) para elegir la moneda de origen y destino (EUR, USD, GBP, JPY), 
y un botón para realizar la conversión. Utiliza las clases de Bootstrap como form-control, btn btn-primary y container.
 Muestra el resultado en un alert alert-success de Bootstrap. Define tasas de conversión fijas en tu código JavaScript. */

// Elementos del DOM
const inputCantidad = document.getElementById("cantidad");
const selectOrigen = document.getElementById("monedaOrigen");
const selectDestino = document.getElementById("monedaDestino");
const botonConvertir = document.getElementById("btnConvertir");
const resultado = document.getElementById("resultado");

// Tasas Fijas
const tasasEnEUR = {
  EUR: 1,
  USD: 0.92,
  GBP: 1.17,
  JPY: 0.0062,
};

// Evento de click
botonConvertir.addEventListener("click", () => {
  // Leer valores
  const cantidadTexto = inputCantidad.value;
  const monedaOrigen = selectOrigen.value;
  const monedaDestino = selectDestino.value;

  // Validamos cantidad vacia
  if (cantidadTexto === "") {
    resultado.classList.remove("d-none");
    resultado.textContent = "Debes introducir una cantidad";
    return;
  }

  // Convertimos a numero
  const cantidad = Number(cantidadTexto);

  // Validamos que sea un numero valido y positivo
  if (Number.isNaN(cantidad) === true || cantidad <= 0) {
    resultado.classList.remove("d-none");
    resultado.textContent = "La cantidad debe ser un numero mayor que 0";
    return;
  }

  // Convertimos: origen -> EUR -> destino
  const cantidadEnEUR = cantidad * tasasEnEUR[monedaOrigen];
  const cantidadConvertida = cantidadEnEUR / tasasEnEUR[monedaDestino];

  // Mostramos el resultado
  resultado.classList.remove("d-none");
  resultado.textContent = cantidadConvertida.toFixed(2) + " " + monedaDestino;
});
