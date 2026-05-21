/* Capturamos numeros */
const num1 = document.querySelector("#numero1");
const num2 = document.querySelector("#numero2");
const btnSuma = document.querySelector("#suma");
const btnResta = document.querySelector("#resta");
const btnMulti = document.querySelector("#multiplicacion");
const btnDivi = document.querySelector("#division");
const resultado = document.querySelector("#resultado");
const listado = document.querySelector("#listaOperaciones");

function calcular(operacion) {
  const n1 = Number(num1.value);
  const n2 = Number(num2.value);

  let total = 0;
  let simbolo = "";

  if (operacion === "suma") {
    total = n1 + n2;
    simbolo = "+";
  } else if (operacion === "resta") {
    total = n1 - n2;
    simbolo = "-";
  } else if (operacion === "multiplicacion") {
    total = n1 * n2;
    simbolo = "x";
  } else if (operacion === "division") {
    if (n2 === 0) {
      alert("No se puede dividir entre 0");
      resultado.textContent = "No se puede dividir entre 0";
      return;
    }
    total = n1 / n2;
    simbolo = "/";
  }

  resultado.textContent = total;

  const li = document.createElement("li");
  li.classList.add("list-group-item");
  li.textContent = `${n1} ${simbolo} ${n2} = ${total}`;
  listado.append(li);
}

btnSuma.addEventListener("click", () => {
  calcular("suma");
});

btnResta.addEventListener("click", () => {
  calcular("resta");
});

btnMulti.addEventListener("click", () => {
  calcular("multiplicacion");
});

btnDivi.addEventListener("click", () => {
  calcular("division");
});
