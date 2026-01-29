const formPresupuesto = document.querySelector("#formPresupuesto");
const inputPresupuesto = document.querySelector("#inputPresupuesto");
const presupuestoActualEl = document.querySelector("#presupuestoActual");

const formGasto = document.querySelector("#formGasto");
const inputDesc = document.querySelector("#inputDesc");
const inputCantidad = document.querySelector("#inputCantidad");
const selectCategoria = document.querySelector("#selectCategoria");

const alertas = document.querySelector("#alertas");

const totalGastadoEl = document.querySelector("#totalGastado");
const barraProgreso = document.querySelector("#barraProgreso");

const listaGastos = document.querySelector("#listaGastos");
const contenedorCategorias = document.querySelector("#contenedorCategorias");

let presupuesto = 0;

// guardamos gastos en memoria
let gastos = [];

// categorías base (puedes añadir más)
const categorias = [
  "Comida",
  "Transporte",
  "Entretenimiento",
  "Casa",
  "Salud",
  "Otros",
];

// ---------- helpers ----------
function formatoEuro(n) {
  return `${n.toFixed(2).replace(".", ",")} €`;
}

function pintarAlerta(texto, tipo = "danger") {
  alertas.innerHTML = `
    <div class="alert alert-${tipo} mb-0" role="alert">
      ${texto}
    </div>
  `;
  setTimeout(() => (alertas.innerHTML = ""), 2000);
}

function totalGastos() {
  return gastos.reduce((acc, g) => acc + g.cantidad, 0);
}

function totalPorCategoria(cat) {
  return gastos
    .filter((g) => g.categoria === cat)
    .reduce((acc, g) => acc + g.cantidad, 0);
}

function claseProgreso(porcentaje) {
  if (porcentaje < 50) return "bg-success";
  if (porcentaje <= 80) return "bg-warning";
  return "bg-danger";
}

function actualizarUI() {
  // presupuesto
  presupuestoActualEl.textContent = formatoEuro(presupuesto);

  // total gastado
  const total = totalGastos();
  totalGastadoEl.textContent = formatoEuro(total);

  // progreso
  let porcentaje = 0;
  if (presupuesto > 0) {
    porcentaje = (total / presupuesto) * 100;
  }

  // limitar a 100 visualmente (si se pasa, se queda llena)
  const porcentajeVisual = Math.min(porcentaje, 100);

  barraProgreso.style.width = `${porcentajeVisual.toFixed(0)}%`;
  barraProgreso.textContent = `${porcentaje.toFixed(0)}%`;

  // cambiar color según regla
  barraProgreso.classList.remove("bg-success", "bg-warning", "bg-danger");
  barraProgreso.classList.add(claseProgreso(porcentaje));

  // lista de últimos gastos
  listaGastos.innerHTML = "";
  const ultimos = gastos.slice(-5).reverse();

  if (ultimos.length === 0) {
    listaGastos.innerHTML = `<li class="list-group-item text-muted">Sin gastos todavía.</li>`;
  } else {
    ultimos.forEach((g) => {
      const li = document.createElement("li");
      li.className = "list-group-item d-flex justify-content-between";
      li.innerHTML = `
        <div>
          <div class="fw-semibold">${g.descripcion}</div>
          <div class="text-muted small">${g.categoria}</div>
        </div>
        <div class="fw-semibold">${formatoEuro(g.cantidad)}</div>
      `;
      listaGastos.appendChild(li);
    });
  }

  // cards categorías
  contenedorCategorias.innerHTML = "";

  categorias.forEach((cat) => {
    const t = totalPorCategoria(cat);

    const col = document.createElement("div");
    col.className = "col-md-4";

    col.innerHTML = `
      <div class="card h-100">
        <div class="card-body">
          <h6 class="card-title">${cat}</h6>
          <p class="display-6 mb-0">${formatoEuro(t)}</p>
          <p class="text-muted mb-0">Total en esta categoría</p>
        </div>
      </div>
    `;

    contenedorCategorias.appendChild(col);
  });
}

// ---------- eventos ----------
formPresupuesto.addEventListener("submit", (e) => {
  e.preventDefault();

  const valor = Number(inputPresupuesto.value);

  if (!Number.isFinite(valor) || valor < 0) {
    pintarAlerta("Presupuesto no válido.", "danger");
    return;
  }

  presupuesto = valor;
  inputPresupuesto.value = "";
  pintarAlerta("Presupuesto guardado correctamente.", "success");
  actualizarUI();
});

formGasto.addEventListener("submit", (e) => {
  e.preventDefault();

  const desc = inputDesc.value.trim();
  const cantidad = Number(inputCantidad.value);
  const categoria = selectCategoria.value;

  if (!desc) {
    pintarAlerta("Escribe una descripción.", "danger");
    return;
  }

  if (!Number.isFinite(cantidad) || cantidad <= 0) {
    pintarAlerta("Cantidad no válida.", "danger");
    return;
  }

  if (presupuesto <= 0) {
    pintarAlerta("Primero establece un presupuesto mensual.", "warning");
    return;
  }

  gastos.push({ descripcion: desc, cantidad, categoria });

  inputDesc.value = "";
  inputCantidad.value = "";
  selectCategoria.value = "Comida";

  pintarAlerta("Gasto añadido.", "success");
  actualizarUI();
});

// UI inicial
actualizarUI();
