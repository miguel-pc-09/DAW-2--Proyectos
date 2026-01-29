const tbody = document.querySelector("#tbodyCarrito");
const totalGeneralEl = document.querySelector("#totalGeneral");

const formBuscar = document.querySelector("#formBuscar");
const buscarNombre = document.querySelector("#buscarNombre");

const formAdd = document.querySelector("#formAdd");
const addNombre = document.querySelector("#addNombre");
const addCantidad = document.querySelector("#addCantidad");

// 6 productos iniciales (ya en tabla)
let carrito = [
  { nombre: "Pan", precio: 1.2, img: (src = "./img/pan.jpeg"), cantidad: 1 },
  { nombre: "Leche", precio: 1.05, img: "./img/leche.jpeg", cantidad: 1 },
  { nombre: "Café", precio: 3.5, img: "./img/cafe.jpeg", cantidad: 1 },
  { nombre: "Arroz", precio: 1.85, img: "./img/arroz.jpeg", cantidad: 1 },
  { nombre: "Huevos", precio: 2.4, img: "./img/huevos.jpeg", cantidad: 1 },
  { nombre: "Azúcar", precio: 1.1, img: "./img/azucar.jpeg", cantidad: 1 },
];

// ---------- helpers ----------
function formatoEuro(n) {
  return `${n.toFixed(2).replace(".", ",")} €`;
}

function calcularTotalGeneral() {
  return carrito.reduce((acc, p) => acc + p.precio * p.cantidad, 0);
}

function renderTabla() {
  tbody.innerHTML = "";

  carrito.forEach((p, index) => {
    const subtotal = p.precio * p.cantidad;

    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>
        <img src="${p.img}" alt="${p.nombre}" width="60" height="60" class="rounded border">
      </td>

      <td class="fw-semibold">${p.nombre}</td>

      <td class="text-end">${formatoEuro(p.precio)}</td>

      <td class="text-center">
        <div class="input-group input-group-sm">
          <button class="btn btn-outline-secondary btnMinus" type="button">-</button>
          <input class="form-control text-center" type="text" value="${p.cantidad}" readonly>
          <button class="btn btn-outline-secondary btnPlus" type="button">+</button>
        </div>
      </td>

      <td class="text-end">${formatoEuro(subtotal)}</td>

      <td class="text-center">
        <button class="btn btn-outline-danger btn-sm btnEliminar" type="button">Eliminar</button>
      </td>
    `;

    // - cantidad
    tr.querySelector(".btnMinus").addEventListener("click", () => {
      if (p.cantidad > 1) {
        p.cantidad--;
        renderTabla();
      }
    });

    // + cantidad
    tr.querySelector(".btnPlus").addEventListener("click", () => {
      p.cantidad++;
      renderTabla();
    });

    // eliminar fila
    tr.querySelector(".btnEliminar").addEventListener("click", () => {
      carrito.splice(index, 1);
      renderTabla();
    });

    tbody.appendChild(tr);
  });

  totalGeneralEl.textContent = formatoEuro(calcularTotalGeneral());
}

// ---------- BUSCAR ----------
formBuscar.addEventListener("submit", (e) => {
  e.preventDefault();

  const nombre = buscarNombre.value.trim();

  if (!nombre) {
    alert("Escribe un nombre para buscar.");
    return;
  }

  // búsqueda EXACTA (como tú quieres)
  const encontrado = carrito.find((p) => p.nombre === nombre);

  if (!encontrado) {
    alert(
      'Producto no encontrado. Prueba a poner la primera en mayúscula, por ejemplo: "Pan".',
    );
    return;
  }

  alert(
    `Producto encontrado: ${encontrado.nombre} - ${formatoEuro(encontrado.precio)} (x${encontrado.cantidad})`,
  );
});

// ---------- AÑADIR ----------
formAdd.addEventListener("submit", (e) => {
  e.preventDefault();

  const nombre = addNombre.value.trim();
  const cantidad = Number(addCantidad.value);

  if (!nombre) {
    alert("Escribe un nombre para añadir.");
    return;
  }

  if (!Number.isFinite(cantidad) || cantidad < 1) {
    alert("Cantidad no válida.");
    return;
  }

  // para añadir: buscamos en "carrito" (lista ya existente)
  const existente = carrito.find((p) => p.nombre === nombre);

  if (!existente) {
    alert(
      'Producto no encontrado. Prueba a poner la primera en mayúscula, por ejemplo: "Pan".',
    );
    return;
  }

  existente.cantidad += cantidad;

  addNombre.value = "";
  addCantidad.value = 1;

  renderTabla();
});

// render inicial
renderTabla();
