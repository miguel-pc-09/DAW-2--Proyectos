/* Selectores */
let btnBajo = document.querySelector("#botonBajo");
let btnAlto = document.querySelector("#botonAlto");
let categoria = document.querySelector("#categoria");
let marca = document.querySelector("#marca");
let precioMinimo = document.querySelector("#precioMinimo");
let precioMaximo = document.querySelector("#precioMaximo");
let btnFiltrar = document.querySelector("#btnFiltrar");
let btnLimpiarFiltros = document.querySelector("#btnLimpiarFiltros");
let buscador = document.querySelector("#buscador");
let tituloProductos = document.querySelector("#tituloProductos");

const listaCarrito = document.querySelector("#lista-carrito");
const totalCarrito = document.querySelector("#total-carrito");
const btnComprarCarrito = document.querySelector("#btnComprarCarrito");
const btnEliminarCarrito = document.querySelector("#btnEliminarCarrito");
const lista = document.querySelector("#lista-productos");
const botonesCategorias = document.querySelectorAll(".btn-categoria");

let productos = [];
let productosMostrados = [];
let carrito = [];
let filtroNavbarActual = "todas";
let animacionActual = "animate__fadeInUp";

/* Relación entre categorías del navbar y categorías reales de la API */
const mapaCategoriasNavbar = {
  todas: [],
  cosmetica: ["beauty", "fragrances"],
  alimentacion: ["groceries"],
  muebles: ["furniture"],
};

/* Función para traducir la categoría del navbar a título */
function obtenerTituloCategoriaNavbar(valor) {
  if (valor === "cosmetica") {
    return "Cosmética";
  }

  if (valor === "alimentacion") {
    return "Alimentación";
  }

  if (valor === "muebles") {
    return "Muebles";
  }

  return "Productos";
}

/* Función para pintar productos */
function ponerProductos(arrayProductos) {
  productosMostrados = [...arrayProductos];
  lista.innerHTML = "";

  if (arrayProductos.length === 0) {
    lista.innerHTML = `
      <div class="col-12">
        <div class="alert alert-light border text-center">
          No se han encontrado productos con esos filtros.
        </div>
      </div>
    `;
    return;
  }

  arrayProductos.forEach((element) => {
    lista.innerHTML += `
      <div class="col-12 col-sm-6 col-lg-4 col-xl-3 animate__animated ${animacionActual}">
        <div class="tarjeta-producto">
          <img src="${element.thumbnail}" class="imagen-producto" alt="${element.title}">
          <div class="cuerpo-tarjeta">
            <div class="etiqueta-categoria">${element.category}</div>
            <h5 class="nombre-producto">${element.title}</h5>
            <p class="marca-producto">Marca: ${element.brand}</p>
            <p class="precio-producto">${Number(element.price).toFixed(2)} €</p>
            <button class="btn btn-principal btn-anadir-carrito" value="${element.id}">
              Añadir al carrito
            </button>
          </div>
        </div>
      </div>
    `;
  });
}

/* Función para pintar carrito */
function ponerCarrito() {
  listaCarrito.innerHTML = "";

  if (carrito.length === 0) {
    listaCarrito.innerHTML = `
      <li class="list-group-item text-center">Carrito vacío</li>
    `;
    totalCarrito.textContent = "Total: 0.00 €";
    return;
  }

  carrito.forEach((item) => {
    listaCarrito.innerHTML += `
      <li class="list-group-item d-flex justify-content-between align-items-center">
        <span class="me-2">${item.getNombre()}</span>
        <span class="fw-bold me-2">${Number(item.getPrecio()).toFixed(2)} €</span>
      </li>
    `;
  });

  actualizarTotal();
}

/* Calcular total */
function calcularTotal() {
  let total = 0;

  carrito.forEach((item) => {
    total += Number(item.getPrecio());
  });

  return total;
}

/* Actualizar total */
function actualizarTotal() {
  let total = calcularTotal();
  totalCarrito.textContent = `Total: ${total.toFixed(2)} €`;
}

/* Cargar categorías reales en el select */
function cargarCategorias() {
  let categoriasUnicas = [
    ...new Set(productos.map((producto) => producto.category)),
  ];
  categoriasUnicas.sort();

  categoria.innerHTML = `<option value="">Todas</option>`;

  categoriasUnicas.forEach((categoriaActual) => {
    categoria.innerHTML += `<option value="${categoriaActual}">${categoriaActual}</option>`;
  });
}

/* Cargar marcas */
function cargarMarcas() {
  let marcasUnicas = [...new Set(productos.map((producto) => producto.brand))];
  marcasUnicas.sort();

  marca.innerHTML = `<option value="">Todas</option>`;

  marcasUnicas.forEach((marcaActual) => {
    marca.innerHTML += `<option value="${marcaActual}">${marcaActual}</option>`;
  });
}

/* Aplicar todos los filtros juntos */
function aplicarFiltros() {
  let resultado = [...productos];

  let textoBuscador = buscador.value.trim().toLowerCase();
  let categoriaSelec = categoria.value;
  let marcaSelec = marca.value;
  let precioMin = precioMinimo.value.trim();
  let precioMax = precioMaximo.value.trim();

  /* Filtro del navbar */
  if (filtroNavbarActual !== "todas") {
    let categoriasPermitidas = mapaCategoriasNavbar[filtroNavbarActual];
    resultado = resultado.filter((producto) =>
      categoriasPermitidas.includes(producto.category),
    );
  }

  /* Filtro del buscador */
  if (textoBuscador !== "") {
    resultado = resultado.filter((producto) =>
      producto.title.toLowerCase().includes(textoBuscador),
    );
  }

  /* Filtro por categoría del select */
  if (categoriaSelec !== "") {
    resultado = resultado.filter(
      (producto) => producto.category === categoriaSelec,
    );
  }

  /* Filtro por marca */
  if (marcaSelec !== "") {
    resultado = resultado.filter((producto) => producto.brand === marcaSelec);
  }

  /* Filtro por precio mínimo */
  if (precioMin !== "" && !isNaN(precioMin)) {
    let minimo = parseFloat(precioMin);
    resultado = resultado.filter(
      (producto) => parseFloat(producto.price) >= minimo,
    );
  }

  /* Filtro por precio máximo */
  if (precioMax !== "" && !isNaN(precioMax)) {
    let maximo = parseFloat(precioMax);
    resultado = resultado.filter(
      (producto) => parseFloat(producto.price) <= maximo,
    );
  }

  tituloProductos.textContent =
    obtenerTituloCategoriaNavbar(filtroNavbarActual);
  animacionActual = "animate__fadeInUp";
  ponerProductos(resultado);
}

/* Eventos ordenar */
btnBajo.addEventListener("click", () => {
  let ordenados = [...productosMostrados].sort((a, b) => a.price - b.price);
  animacionActual = "animate__fadeInLeft";
  ponerProductos(ordenados);
});

btnAlto.addEventListener("click", () => {
  let ordenados = [...productosMostrados].sort((a, b) => b.price - a.price);
  animacionActual = "animate__fadeInRight";
  ponerProductos(ordenados);
});

/* Aplicar filtros */
btnFiltrar.addEventListener("click", () => {
  aplicarFiltros();
});

/* Limpiar filtros */
btnLimpiarFiltros.addEventListener("click", () => {
  precioMinimo.value = "";
  precioMaximo.value = "";
  categoria.value = "";
  marca.value = "";
  buscador.value = "";
  filtroNavbarActual = "todas";

  botonesCategorias.forEach((boton) => {
    boton.classList.remove("activo");
    if (boton.dataset.categoria === "todas") {
      boton.classList.add("activo");
    }
  });

  tituloProductos.textContent = "Productos";
  animacionActual = "animate__fadeInUp";
  ponerProductos(productos);
});

/* Navbar categorías */
botonesCategorias.forEach((boton) => {
  boton.addEventListener("click", () => {
    botonesCategorias.forEach((item) => {
      item.classList.remove("activo");
    });

    boton.classList.add("activo");
    filtroNavbarActual = boton.dataset.categoria;
    aplicarFiltros();
  });
});

/* Buscar al escribir */
buscador.addEventListener("input", () => {
  aplicarFiltros();
});

/* Añadir al carrito */
lista.addEventListener("click", (e) => {
  let boton = e.target.closest(".btn-anadir-carrito");

  if (!boton) {
    return;
  }

  let idProducto = Number(boton.value);

  let producto = productos.find((p) => p.id === idProducto);

  if (!producto) {
    return;
  }

  let prodCarrito = new Producto(
    producto.id,
    producto.thumbnail,
    producto.title,
    producto.price,
    producto.brand,
  );

  carrito.push(prodCarrito);
  ponerCarrito();

  Swal.fire({
    icon: "success",
    title: "Producto añadido",
    text: producto.title,
    timer: 1000,
    showConfirmButton: false,
  });
});

/* Comprar */
btnComprarCarrito.addEventListener("click", () => {
  if (carrito.length === 0) {
    Swal.fire({
      icon: "info",
      title: "Carrito vacío",
      text: "No hay productos para comprar.",
      confirmButtonColor: "#b27764",
    });
    return;
  }

  let total = calcularTotal();

  Swal.fire({
    icon: "question",
    title: "Confirmar compra",
    text: `Vas a realizar una compra por valor de ${total.toFixed(2)} €. ¿Estás seguro?`,
    showCancelButton: true,
    confirmButtonText: "Aceptar",
    cancelButtonText: "Cancelar",
    confirmButtonColor: "#b27764",
    cancelButtonColor: "#8b6b60",
  }).then((result) => {
    if (result.isConfirmed) {
      carrito = [];
      ponerCarrito();

      Swal.fire({
        icon: "success",
        title: "Compra realizada",
        text: "El carrito se ha vaciado correctamente.",
        confirmButtonColor: "#b27764",
      });
    }
  });
});

/* Vaciar carrito */
btnEliminarCarrito.addEventListener("click", () => {
  if (carrito.length === 0) {
    Swal.fire({
      icon: "info",
      title: "Carrito vacío",
      text: "No hay productos para eliminar.",
      confirmButtonColor: "#b27764",
    });
    return;
  }

  carrito = [];
  ponerCarrito();

  Swal.fire({
    icon: "success",
    title: "Carrito vaciado",
    timer: 900,
    showConfirmButton: false,
  });
});

/* Llamada a la API */
let url = "https://dummyjson.com/products?limit=100";

fetch(url)
  .then((res) => {
    if (!res.ok) {
      throw new Error("La respuesta de la API no ha sido correcta");
    }
    return res.json();
  })
  .then((datos) => {
    console.log("Productos cargados correctamente:", datos);

    productos = datos.products;
    cargarCategorias();
    cargarMarcas();
    ponerProductos(productos);
    ponerCarrito();
  })
  .catch((error) => {
    console.error("Error al cargar la API:", error);

    lista.innerHTML = `
      <div class="col-12">
        <div class="alert alert-danger text-center">
          No se han podido cargar los productos.
        </div>
      </div>
    `;
  });
