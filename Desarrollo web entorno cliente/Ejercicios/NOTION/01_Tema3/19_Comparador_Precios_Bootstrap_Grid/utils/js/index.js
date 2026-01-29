const form = document.querySelector("#formProducto");
const inputNombre = document.querySelector("#nombre");
const inputA = document.querySelector("#a");
const inputB = document.querySelector("#b");
const inputC = document.querySelector("#c");
const alertas = document.querySelector("#alertas");

const grid = document.querySelector("#grid");

const btnOrdNombre = document.querySelector("#ordNombre");
const btnOrdPrecio = document.querySelector("#ordPrecio");

let productos = [
  { nombre: "Café", precios: { A: 3.5, B: 3.2, C: 3.75 } },
  { nombre: "Leche", precios: { A: 1.05, B: 1.15, C: 0.99 } },
  { nombre: "Pan", precios: { A: 1.2, B: 1.1, C: 1.35 } },
];

let modoOrden = "nombre"; // "nombre" o "precio"

// ---------- helpers ----------
function pintarAlerta(texto, tipo = "danger") {
  alertas.innerHTML = `<div class="alert alert-${tipo} mb-0" role="alert">${texto}</div>`;
  setTimeout(() => (alertas.innerHTML = ""), 2000);
}

function formatoEuro(n) {
  return `${n.toFixed(2).replace(".", ",")} €`;
}

function mejorOferta(precios) {
  // devuelve { tienda: "A", precio: 1.23 }
  const entries = Object.entries(precios); // [["A", 3.5], ["B", 3.2], ...]
  let mejor = { tienda: entries[0][0], precio: entries[0][1] };

  for (let i = 1; i < entries.length; i++) {
    const tienda = entries[i][0];
    const precio = entries[i][1];

    if (precio < mejor.precio) {
      mejor = { tienda, precio };
    }
  }

  return mejor;
}

function ordenar() {
  if (modoOrden === "nombre") {
    productos.sort((p1, p2) => p1.nombre.localeCompare(p2.nombre));
  } else {
    productos.sort((p1, p2) => {
      const m1 = mejorOferta(p1.precios).precio;
      const m2 = mejorOferta(p2.precios).precio;
      return m1 - m2;
    });
  }
}

function render() {
  ordenar();
  grid.innerHTML = "";

  productos.forEach((p) => {
    const mejor = mejorOferta(p.precios);

    const col = document.createElement("div");
    col.className = "col-12 col-md-4";

    // lista de precios por tienda
    const lista = Object.entries(p.precios)
      .map(([tienda, precio]) => {
        const esMejor = tienda === mejor.tienda;
        return `
          <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${tienda}</span>
            <span class="${esMejor ? "fw-semibold" : ""}">${formatoEuro(precio)}</span>
          </li>
        `;
      })
      .join("");

    col.innerHTML = `
      <div class="card h-100 shadow-sm">
        <div class="card-body">
          <div class="d-flex justify-content-between align-items-start">
            <h5 class="card-title mb-1">${p.nombre}</h5>
            <span class="badge bg-success">
              Mejor: ${mejor.tienda} (${formatoEuro(mejor.precio)})
            </span>
          </div>
          <p class="text-muted mb-3">Comparación de precios por tienda</p>

          <ul class="list-group">
            ${lista}
          </ul>
        </div>
      </div>
    `;

    grid.appendChild(col);
  });
}

// ---------- eventos ----------
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nombre = inputNombre.value.trim();
  const a = Number(inputA.value);
  const b = Number(inputB.value);
  const c = Number(inputC.value);

  if (!nombre) {
    pintarAlerta("Escribe un nombre de producto.", "danger");
    return;
  }

  if (
    !Number.isFinite(a) ||
    !Number.isFinite(b) ||
    !Number.isFinite(c) ||
    a < 0 ||
    b < 0 ||
    c < 0
  ) {
    pintarAlerta("Introduce precios válidos (0 o más).", "danger");
    return;
  }

  // Si existe el producto, actualizamos precios
  const existente = productos.find(
    (p) => p.nombre.toLowerCase() === nombre.toLowerCase(),
  );

  if (existente) {
    existente.nombre = nombre; // respeta cómo lo escribió el usuario
    existente.precios = { A: a, B: b, C: c };
    pintarAlerta("Producto actualizado.", "success");
  } else {
    productos.push({ nombre, precios: { A: a, B: b, C: c } });
    pintarAlerta("Producto añadido.", "success");
  }

  inputNombre.value = "";
  inputA.value = "";
  inputB.value = "";
  inputC.value = "";

  render();
});

btnOrdNombre.addEventListener("click", () => {
  modoOrden = "nombre";
  btnOrdNombre.classList.add("active");
  btnOrdPrecio.classList.remove("active");
  render();
});

btnOrdPrecio.addEventListener("click", () => {
  modoOrden = "precio";
  btnOrdPrecio.classList.add("active");
  btnOrdNombre.classList.remove("active");
  render();
});

// estado inicial botones
btnOrdNombre.classList.add("active");

// render inicial
render();
