// ----- util: alert bootstrap -----
function pintarAlerta(contenedor, texto, tipo = "success") {
  contenedor.innerHTML = `
    <div class="alert alert-${tipo} mb-0" role="alert">
      ${texto}
    </div>
  `;
}

function validarNumero(valor) {
  return Number.isFinite(valor);
}

// ----- LONGITUD -----
const longValor = document.querySelector("#long-valor");
const longDe = document.querySelector("#long-de");
const longA = document.querySelector("#long-a");
const longBtn = document.querySelector("#long-convertir");
const longRes = document.querySelector("#long-resultado");

// factores respecto a metro
const longFactor = {
  m: 1,
  km: 1000,
  mi: 1609.344,
};

longBtn.addEventListener("click", () => {
  const v = Number(longValor.value);
  if (!validarNumero(v)) {
    pintarAlerta(longRes, "Introduce un número válido.", "danger");
    return;
  }

  const de = longDe.value;
  const a = longA.value;

  const enMetros = v * longFactor[de];
  const resultado = enMetros / longFactor[a];

  pintarAlerta(
    longRes,
    `${v} (${de}) = ${resultado.toFixed(4)} (${a})`,
    "success",
  );
});

// ----- PESO -----
const pesoValor = document.querySelector("#peso-valor");
const pesoDe = document.querySelector("#peso-de");
const pesoA = document.querySelector("#peso-a");
const pesoBtn = document.querySelector("#peso-convertir");
const pesoRes = document.querySelector("#peso-resultado");

// factores respecto a kg
const pesoFactor = {
  kg: 1,
  lb: 0.45359237,
  oz: 0.028349523125,
};

pesoBtn.addEventListener("click", () => {
  const v = Number(pesoValor.value);
  if (!validarNumero(v)) {
    pintarAlerta(pesoRes, "Introduce un número válido.", "danger");
    return;
  }

  const de = pesoDe.value;
  const a = pesoA.value;

  const enKg = v * pesoFactor[de];
  const resultado = enKg / pesoFactor[a];

  pintarAlerta(
    pesoRes,
    `${v} (${de}) = ${resultado.toFixed(4)} (${a})`,
    "success",
  );
});

// ----- TEMPERATURA -----
const tempValor = document.querySelector("#temp-valor");
const tempDe = document.querySelector("#temp-de");
const tempA = document.querySelector("#temp-a");
const tempBtn = document.querySelector("#temp-convertir");
const tempRes = document.querySelector("#temp-resultado");

function aCelsius(valor, unidad) {
  if (unidad === "c") return valor;
  if (unidad === "f") return (valor - 32) * (5 / 9);
  return valor - 273.15; // k
}

function desdeCelsius(valorC, unidad) {
  if (unidad === "c") return valorC;
  if (unidad === "f") return valorC * (9 / 5) + 32;
  return valorC + 273.15; // k
}

tempBtn.addEventListener("click", () => {
  const v = Number(tempValor.value);
  if (!validarNumero(v)) {
    pintarAlerta(tempRes, "Introduce un número válido.", "danger");
    return;
  }

  const de = tempDe.value;
  const a = tempA.value;

  const c = aCelsius(v, de);
  const resultado = desdeCelsius(c, a);

  pintarAlerta(
    tempRes,
    `${v} (${de}) = ${resultado.toFixed(2)} (${a})`,
    "success",
  );
});
