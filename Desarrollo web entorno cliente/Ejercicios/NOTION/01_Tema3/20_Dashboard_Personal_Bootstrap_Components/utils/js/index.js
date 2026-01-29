// ---------- datos (demo) ----------
const estado = {
  nombre: "Miguel",
  presupuestoMensual: 600,
  gastosMes: 0,
  tareas: [],
  eventos: [],
};

const $ = (sel) => document.querySelector(sel);

// ---------- refs ----------
const nombreUsuario = $("#nombreUsuario");

const statPendientes = $("#statPendientes");
const statGastos = $("#statGastos");
const statEventos = $("#statEventos");
const statProximoEvento = $("#statProximoEvento");
const statPresupuesto = $("#statPresupuesto");
const barraGastos = $("#barraGastos");

const statUpdate1 = $("#statUpdate1");
const badgeTotalTareas = $("#badgeTotalTareas");

const listaTareas = $("#listaTareas");
const inputNuevaTarea = $("#inputNuevaTarea");
const btnAddTarea = $("#btnAddTarea");

const listaEventos = $("#listaEventos");

const btnDemoDatos = $("#btnDemoDatos");
const btnAddEventoDemo = $("#btnAddEventoDemo");

// offcanvas conversor
const fxCantidad = $("#fxCantidad");
const fxDe = $("#fxDe");
const fxA = $("#fxA");
const btnConvertir = $("#btnConvertir");
const fxResultado = $("#fxResultado");

// ---------- helpers ----------
function ahoraBonito() {
  const d = new Date();
  return d.toLocaleString("es-ES", {
    day: "2-digit",
    month: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function euro(n) {
  return `${n.toFixed(2).replace(".", ",")} €`;
}

function setBarraGastos() {
  const p =
    estado.presupuestoMensual <= 0
      ? 0
      : (estado.gastosMes / estado.presupuestoMensual) * 100;
  const visual = Math.min(p, 100);

  barraGastos.style.width = `${visual.toFixed(0)}%`;
  barraGastos.textContent = `${p.toFixed(0)}%`;

  barraGastos.classList.remove("bg-success", "bg-warning", "bg-danger");
  if (p < 50) barraGastos.classList.add("bg-success");
  else if (p <= 80) barraGastos.classList.add("bg-warning");
  else barraGastos.classList.add("bg-danger");
}

function pintarStats() {
  nombreUsuario.textContent = estado.nombre;

  const pendientes = estado.tareas.filter((t) => !t.hecha).length;
  statPendientes.textContent = pendientes;

  statGastos.textContent = euro(estado.gastosMes);
  statPresupuesto.textContent = euro(estado.presupuestoMensual);
  setBarraGastos();

  statEventos.textContent = estado.eventos.length;

  const proximo = estado.eventos[0]?.titulo ?? "—";
  statProximoEvento.textContent = proximo;

  statUpdate1.textContent = ahoraBonito();
  badgeTotalTareas.textContent = String(estado.tareas.length);
}

function pintarTareas() {
  listaTareas.innerHTML = "";

  if (estado.tareas.length === 0) {
    listaTareas.innerHTML = `<li class="list-group-item text-muted">No hay tareas todavía.</li>`;
    return;
  }

  estado.tareas
    .slice()
    .reverse()
    .forEach((tarea, idxReverse) => {
      const idx = estado.tareas.length - 1 - idxReverse;

      const li = document.createElement("li");
      li.className =
        "list-group-item d-flex justify-content-between align-items-start";

      li.innerHTML = `
      <div class="me-3 flex-grow-1">
        <div class="d-flex align-items-center gap-2">
          <span class="fw-semibold titulo">${tarea.texto}</span>
          ${
            tarea.hecha
              ? `<span class="badge bg-success">Hecha</span>`
              : `<span class="badge bg-primary">Pendiente</span>`
          }
        </div>
        <div class="text-muted small">Añadida: ${tarea.fecha}</div>
      </div>

      <div class="d-flex gap-2">
        <button class="btn btn-outline-success btn-sm btnHecha" type="button">
          ${tarea.hecha ? "Deshacer" : "Hecha"}
        </button>
        <button class="btn btn-outline-danger btn-sm btnEliminar" type="button">
          Eliminar
        </button>
      </div>
    `;

      if (tarea.hecha) {
        li.querySelector(".titulo").classList.add(
          "text-decoration-line-through",
        );
      }

      li.querySelector(".btnHecha").addEventListener("click", () => {
        estado.tareas[idx].hecha = !estado.tareas[idx].hecha;
        render();
      });

      li.querySelector(".btnEliminar").addEventListener("click", () => {
        estado.tareas.splice(idx, 1);
        render();
      });

      listaTareas.appendChild(li);
    });
}

function pintarEventos() {
  listaEventos.innerHTML = "";

  if (estado.eventos.length === 0) {
    listaEventos.innerHTML = `<li class="list-group-item text-muted">Sin eventos próximos.</li>`;
    return;
  }

  estado.eventos.forEach((ev) => {
    const li = document.createElement("li");
    li.className =
      "list-group-item d-flex justify-content-between align-items-center";

    li.innerHTML = `
      <div>
        <div class="fw-semibold">${ev.titulo}</div>
        <div class="text-muted small">${ev.fecha}</div>
      </div>
      <span class="badge bg-success">${ev.tipo}</span>
    `;

    listaEventos.appendChild(li);
  });
}

function render() {
  // ordena eventos por fecha (simple: string, demo)
  pintarStats();
  pintarTareas();
  pintarEventos();
}

// ---------- acciones ----------
btnAddTarea.addEventListener("click", () => {
  const texto = inputNuevaTarea.value.trim();
  if (!texto) return;

  estado.tareas.push({
    texto,
    hecha: false,
    fecha: ahoraBonito(),
  });

  inputNuevaTarea.value = "";
  render();
});

inputNuevaTarea.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    btnAddTarea.click();
  }
});

btnDemoDatos.addEventListener("click", () => {
  estado.tareas = [
    {
      texto: "Terminar ejercicios de Bootstrap",
      hecha: false,
      fecha: ahoraBonito(),
    },
    { texto: "Revisar apuntes de DWEC", hecha: true, fecha: ahoraBonito() },
    { texto: "Preparar entrega en GitHub", hecha: false, fecha: ahoraBonito() },
  ];

  estado.eventos = [
    { titulo: "Entrega práctica DWEC", fecha: "Vie 31/01", tipo: "Clase" },
    { titulo: "Reunión equipo proyecto", fecha: "Lun 03/02", tipo: "Equipo" },
  ];

  estado.gastosMes = 245.9;
  estado.presupuestoMensual = 600;

  render();
});

btnAddEventoDemo.addEventListener("click", () => {
  estado.eventos.push({
    titulo: "Evento añadido (demo)",
    fecha: "Mar 04/02",
    tipo: "Extra",
  });
  render();
});

// ---------- conversor monedas (tasas fijas demo) ----------
const rates = {
  // base EUR
  EUR: 1,
  USD: 1.09,
  GBP: 0.85,
};

function convertir(cantidad, de, a) {
  // convierto a EUR y luego a destino
  const enEur = cantidad / rates[de];
  return enEur * rates[a];
}

btnConvertir.addEventListener("click", () => {
  const cantidad = Number(fxCantidad.value);
  if (!Number.isFinite(cantidad) || cantidad <= 0) {
    fxResultado.innerHTML = `<div class="alert alert-danger mb-0">Introduce una cantidad válida.</div>`;
    return;
  }

  const de = fxDe.value;
  const a = fxA.value;

  const res = convertir(cantidad, de, a);

  fxResultado.innerHTML = `
    <div class="alert alert-success mb-0">
      ${cantidad} ${de} = <strong>${res.toFixed(2)}</strong> ${a}
    </div>
  `;
});

// render inicial
render();
