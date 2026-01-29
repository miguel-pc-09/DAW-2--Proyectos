const form = document.querySelector("#formImc");
const inputPeso = document.querySelector("#peso");
const inputAltura = document.querySelector("#altura");
const resultado = document.querySelector("#resultado");

function limpiarAlert() {
  resultado.innerHTML = "";
}

function ponerValidacion(input, ok) {
  input.classList.remove("is-valid", "is-invalid");
  input.classList.add(ok ? "is-valid" : "is-invalid");
}

function esNumeroValido(n) {
  return Number.isFinite(n) && n > 0;
}

function calcularIMC(peso, altura) {
  // IMC = peso / (altura^2)
  return peso / (altura * altura);
}

function categoriaIMC(imc) {
  if (imc < 18.5) return { nombre: "Bajo peso", alert: "alert-info" };
  if (imc < 25) return { nombre: "Normal", alert: "alert-success" };
  if (imc < 30) return { nombre: "Sobrepeso", alert: "alert-warning" };
  return { nombre: "Obesidad", alert: "alert-danger" };
}

function pintarResultado(imc, categoria) {
  resultado.innerHTML = `
    <div class="alert ${categoria.alert} mb-0" role="alert">
      <div class="fw-semibold">Resultado</div>
      Tu IMC es <strong>${imc.toFixed(2)}</strong> → <strong>${categoria.nombre}</strong>
    </div>
  `;
}

function validarInputs() {
  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);

  const pesoOk = esNumeroValido(peso) && peso <= 500;
  const alturaOk = esNumeroValido(altura) && altura >= 0.5 && altura <= 2.7;

  ponerValidacion(inputPeso, pesoOk);
  ponerValidacion(inputAltura, alturaOk);

  return { ok: pesoOk && alturaOk, peso, altura };
}

// Validación en tiempo real (al escribir)
inputPeso.addEventListener("input", () => {
  limpiarAlert();
  validarInputs();
});

inputAltura.addEventListener("input", () => {
  limpiarAlert();
  validarInputs();
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  limpiarAlert();

  const { ok, peso, altura } = validarInputs();

  if (!ok) return;

  const imc = calcularIMC(peso, altura);
  const cat = categoriaIMC(imc);

  pintarResultado(imc, cat);
});
