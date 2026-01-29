/*Crea un gestor de tareas donde las tareas se añadan mediante un Modal de Bootstrap. 
El botón principal debe abrir el modal con un formulario para añadir título, descripción y prioridad de la tarea. 
Las tareas se deben mostrar en una lista con badges de Bootstrap para indicar la prioridad
 (badge bg-danger para alta, badge bg-warning para media, badge bg-success para baja). 
 Incluye botones para marcar como completada (cambia el estilo con text-decoration-line-through) y eliminar.  */

const app = document.querySelector("#app");
let tareas = [];

renderMenu();

// ---------- VISTAS ----------
function renderMenu() {
  app.innerHTML = `
    <div class="d-flex justify-content-center gap-3 mt-4 flex-wrap">
      <button class="btn btn-primary" id="btnForm">Rellenar formulario</button>
      <button class="btn btn-secondary" id="btnLista">Ver lista</button>
    </div>
  `;

  app.querySelector("#btnForm").addEventListener("click", renderFormulario);
  app.querySelector("#btnLista").addEventListener("click", renderLista);
}

function renderFormulario() {
  app.innerHTML = `
    <div class="d-flex justify-content-center">
      <div class="card shadow w-50">
        <div class="card-body">
          <h5 class="card-title mb-3">Nueva tarea</h5>

          <input id="titulo" class="form-control mb-3" placeholder="Título" />
          <textarea id="descripcion" class="form-control mb-3" rows="3" placeholder="Descripción"></textarea>

          <div class="mb-3">
            <label class="form-label d-block mb-2">Prioridad</label>

            <div class="btn-group" role="group" aria-label="Prioridad">
              <button type="button" class="btn btn-outline-danger" data-prio="alta" id="prioAlta">Alta</button>
              <button type="button" class="btn btn-outline-warning" data-prio="media" id="prioMedia">Media</button>
              <button type="button" class="btn btn-outline-success" data-prio="baja" id="prioBaja">Baja</button>
            </div>

            <div class="mt-2 text-muted small">
              Seleccionada: <span id="prioSeleccionada">Media</span>
            </div>
          </div>

          <div class="d-flex gap-2">
            <button class="btn btn-success" id="btnEnviar">Enviar</button>
            <button class="btn btn-danger" id="btnBorrar">Borrar</button>
            <button class="btn btn-outline-secondary ms-auto" id="btnVolver">Volver</button>
          </div>
        </div>
      </div>
    </div>
  `;

  const inputTitulo = app.querySelector("#titulo");
  const inputDesc = app.querySelector("#descripcion");
  const prioLabel = app.querySelector("#prioSeleccionada");

  // prioridad por defecto
  let prioridadElegida = "media";
  marcarBotonPrioridad(prioridadElegida);

  // listeners prioridad
  app.querySelectorAll("[data-prio]").forEach((btn) => {
    btn.addEventListener("click", () => {
      prioridadElegida = btn.dataset.prio;
      marcarBotonPrioridad(prioridadElegida);
      prioLabel.textContent = capitalizar(prioridadElegida);
    });
  });

  inputTitulo.focus();

  app.querySelector("#btnEnviar").addEventListener("click", () => {
    const titulo = inputTitulo.value.trim();
    const descripcion = inputDesc.value.trim();

    if (!titulo || !descripcion) {
      alert("Rellena título y descripción.");
      return;
    }

    const nueva = {
      titulo,
      descripcion,
      prioridad: prioridadElegida,
      completada: false,
    };

    insertarPorPrioridad(nueva);
    renderMenu(); // vuelve al menú
  });

  app.querySelector("#btnBorrar").addEventListener("click", () => {
    inputTitulo.value = "";
    inputDesc.value = "";
    prioridadElegida = "media";
    marcarBotonPrioridad(prioridadElegida);
    prioLabel.textContent = "Media";
    inputTitulo.focus();
  });

  app.querySelector("#btnVolver").addEventListener("click", renderMenu);
}

function renderLista() {
  app.innerHTML = `
    <div class="d-flex justify-content-between align-items-center mb-3">
      <h5 class="m-0">Lista de tareas</h5>
      <button class="btn btn-outline-secondary" id="btnVolverMenu">Volver</button>
    </div>

    <ul id="listaTareas" class="list-group"></ul>
  `;

  app.querySelector("#btnVolverMenu").addEventListener("click", renderMenu);

  const ul = app.querySelector("#listaTareas");

  if (tareas.length === 0) {
    ul.innerHTML = `<li class="list-group-item text-muted">No hay tareas aún.</li>`;
    return;
  }

  tareas.forEach((tarea, index) => {
    const badgeClass = getBadgeClass(tarea.prioridad);

    const li = document.createElement("li");
    li.className =
      "list-group-item d-flex justify-content-between align-items-start";

    li.innerHTML = `
      <div class="me-3 flex-grow-1">
        <div class="d-flex align-items-center gap-2">
          <span class="fw-semibold titulo">${tarea.titulo}</span>
          <span class="badge ${badgeClass}">${capitalizar(tarea.prioridad)}</span>
        </div>
        <p class="mb-0 text-muted desc">${tarea.descripcion}</p>
      </div>

      <div class="d-flex gap-2">
        <button class="btn btn-outline-success btn-sm btnCompletar">
          ${tarea.completada ? "Deshacer" : "Completar"}
        </button>
        <button class="btn btn-outline-danger btn-sm btnEliminar">Eliminar</button>
      </div>
    `;

    if (tarea.completada) {
      li.querySelector(".titulo").classList.add("text-decoration-line-through");
      li.querySelector(".desc").classList.add("text-decoration-line-through");
    }

    li.querySelector(".btnCompletar").addEventListener("click", () => {
      tarea.completada = !tarea.completada;
      renderLista(); // refresco
    });

    li.querySelector(".btnEliminar").addEventListener("click", () => {
      tareas.splice(index, 1);
      renderLista();
    });

    ul.appendChild(li);
  });
}

// ---------- LÓGICA DE ORDEN ----------
function insertarPorPrioridad(tarea) {
  if (tarea.prioridad === "alta") {
    // al principio
    tareas.unshift(tarea);
    return;
  }

  if (tarea.prioridad === "baja") {
    // al final
    tareas.push(tarea);
    return;
  }

  // media: la ponemos "en medio":
  // justo después del último "alta" (después de todas las altas)
  const indiceInsercion = tareas.findIndex((t) => t.prioridad !== "alta");

  if (indiceInsercion === -1) {
    // si todo son altas, se añade al final (que es justo después de las altas)
    tareas.push(tarea);
  } else {
    tareas.splice(indiceInsercion, 0, tarea);
  }
}

// ---------- helpers ----------
function getBadgeClass(prioridad) {
  if (prioridad === "alta") return "bg-danger";
  if (prioridad === "media") return "bg-warning";
  return "bg-success";
}

function capitalizar(texto) {
  return texto.charAt(0).toUpperCase() + texto.slice(1);
}

function marcarBotonPrioridad(prio) {
  // quitamos estilos "seleccionado"
  app.querySelectorAll("[data-prio]").forEach((btn) => {
    btn.classList.remove("active");
  });

  // marcamos el elegido
  const btn = app.querySelector(`[data-prio="${prio}"]`);
  if (btn) btn.classList.add("active");
}
