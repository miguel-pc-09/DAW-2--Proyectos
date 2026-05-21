const num1 = document.querySelector("#numero1");
const num2 = document.querySelector("#numero2");
const btnSuma = document.querySelector("#btnSuma");
const btnResta = document.querySelector("#btnResta");
const btnMulti = document.querySelector("#btnMulti");
const btnDivi = document.querySelector("#btnDivi");
const listado = document.querySelector("#listado");
const resultado = document.querySelector("#resultado");

btnSuma.addEventListener("click", () => {
  const suma = Number(num1.value) + Number(num2.value);
  resultado.textContent = `Total: ${suma}`;
  agregarHistorial(`Suma: ${num1.value} + ${num2.value} = ${suma}`);
});

btnResta.addEventListener("click", () => {
  const resta = Number(num1.value) - Number(num2.value);
  resultado.textContent = `Total: ${resta}`;
  agregarHistorial(`Resta: ${num1.value} - ${num2.value} = ${resta}`);
});

btnMulti.addEventListener("click", () => {
  const multi = Number(num1.value) * Number(num2.value);
  resultado.textContent = `Total: ${multi}`;
  agregarHistorial(`Multiplicacion: ${num1.value} * ${num2.value} = ${multi}`);
});

btnDivi.addEventListener("click", () => {
  const divi = Number(num1.value) / Number(num2.value);
  if (num2.value === "0") {
    resultado.textContent = "No se puede dividir por cero";
    agregarHistorial(
      `División: ${num1.value} / ${num2.value} = Error (división por cero)`,
    );
    return;
  }
  resultado.textContent = `Total: ${divi}`;
  agregarHistorial(`División: ${num1.value} / ${num2.value} = ${divi}`);
});

function agregarHistorial(texto) {
  const nuevoRegistro = document.createElement("li");
  nuevoRegistro.classList.add("list-group-item");
  nuevoRegistro.textContent = texto;
  listado.append(nuevoRegistro);
}
