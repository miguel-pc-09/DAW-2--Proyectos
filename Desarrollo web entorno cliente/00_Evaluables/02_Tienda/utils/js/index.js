/* Selectores  */
let btnBajo = document.querySelector("#botonBajo");
let btnAlto = document.querySelector("#botonAlto");
let categoria = document.querySelector("#categoria");
let marca = document.querySelector("#marca");
let btnFiltrar = document.querySelector("#btnFiltrar");

const listaCarrito = document.querySelector("#lista-carrito");
const totalCarrito = document.querySelector("#total-carrito");
const btnComprarCarrito = document.querySelector("#btnComprarCarrito");
const btnEliminarCarrito = document.querySelector("#btnEliminarCarrito");

let productos = []; // Guardo los productos
let productosFiltrados = []; // Guardo los productos filtrados
let productosMostrados = []; // Guardo los productos mostrados
let carrito = [];
let animacionActual = "animate__fadeInDown";

/* para poner las cartas */
const lista = document.querySelector("#lista-productos");

/* ----- Funciones --------   */
function ponerProductos(arrayProductos) {
  productosMostrados = arrayProductos;
  lista.innerHTML = ""; // para limpiar antes

  arrayProductos.forEach((element) => {
    lista.innerHTML += `
        <div class="col animate__animated ${animacionActual}">
          <div class="card h-100">
            <img src="${element.thumbnail}" class="card-img-top" alt="${element.title}">
            <div class="card-body text-center">
              <h5 class="card-title">${element.title}</h5>
              <p class="card-text">Precio: ${element.price} €</p>
              <button class="btn btn-success btn-anadir-carrito" value="${element.id}">
              Añadir
            </button>
            </div>
          </div>
        </div>
        `;
  });
}

// funcion para poner el carrito
function ponerCarrito() {
  listaCarrito.innerHTML = "";

  if (carrito.length === 0) {
    listaCarrito.innerHTML += `
        <li class="list-group-item text-center">
            <div>
                <h6 class="my-0">Carrito vacio</h6>
            </div>
        </li>
        `;
    totalCarrito.textContent = "Total: 0.00 €";
    return;
  }
  carrito.forEach((item) => {
    listaCarrito.innerHTML += `
      <li class="list-group-item d-flex justify-content-between align-items-center">
        <span class="me-2 flex-grow-1">${item.getNombre()}</span>
        <span class="fw-bold me-2">${Number(item.getPrecio()).toFixed(2)} €</span>

        <!-- botón eliminar por línea -->
        <button class="btn btn-sm btn-outline-danger btn-eliminar-linea" value="${item.getId()}">
          X
        </button>
      </li>
    `;
  });

  actualizarTotal();
}

// funcion para calcular el total
function calcularTotal() {
  let total = 0;
  carrito.forEach((item) => {
    total += Number(item.getPrecio());
  });
  return total;
}

// funcion para actualizar el total
function actualizarTotal() {
  let total = calcularTotal();
  totalCarrito.textContent = `Total: ${total.toFixed(2)} €`;
}

/* ----- Eventos ------  */
/* Boton del precio mas bajo */
btnBajo.addEventListener("click", () => {
  animacionActual = "animate__zoomIn";
  let ordenBajo = [...productosMostrados].sort((a, b) => a.price - b.price); // [...productosMostrados] es para copiar el array
  ponerProductos(ordenBajo);
});

/* Boton del precio mas alto */
btnAlto.addEventListener("click", () => {
  animacionActual = "animate__slideInUp";
  let ordenAlto = [...productosMostrados].sort((a, b) => b.price - a.price);
  ponerProductos(ordenAlto);
});

/* Boton de compra */
btnComprarCarrito.addEventListener("click", () => {
  // Si el carrito esta vacio, alerta
  if (carrito.length === 0) {
    Swal.fire({
      icon: "info",
      title: "Carrito vacío",
      text: "No hay productos para comprar",
    });
    return;
  }

  // usamos la función calcularTotal()
  let total = calcularTotal();

  //  confirmación con texto del enunciado
  Swal.fire({
    icon: "question",
    title: "Confirmación",
    text: `Vas a realizar una compra por valor de ${total.toFixed(2)} €. ¿Estás seguro?`,
    showCancelButton: true,
    confirmButtonText: "Aceptar",
    cancelButtonText: "Cancelar",
  }).then((result) => {
    if (!result.isConfirmed) return;

    //  vaciar el carrito si acepta
    carrito = [];
    ponerCarrito();

    Swal.fire({
      icon: "success",
      title: "Compra realizada",
      timer: 900,
      showConfirmButton: false,
    });
  });
});

/* botones de categoria y marca */
/* filtrado por categoria */
categoria.addEventListener("change", () => {
  // No hago nada para que funcione el filtro
  /* let categoriaSelec = categoria.value;

  if (categoriaSelec === "") {
    ponerProductos(productos);
    return;
  }

  let filtrados = productos.filter(
    (producto) => producto.category === categoriaSelec,
  );
  ponerProductos(filtrados); */
});

// Boton eliminar carrito
btnEliminarCarrito.addEventListener("click", () => {
  if (carrito.length === 0) {
    Swal.fire({
      icon: "info",
      title: "Carrito vacío",
      text: "No hay productos para eliminar",
    });
    return;
  }

  Swal.fire({
    icon: "warning",
    title: "¿Eliminar cesta?",
    text: "Se borrarán todos los productos del carrito",
    showCancelButton: true,
    confirmButtonText: "Sí, eliminar",
    cancelButtonText: "Cancelar",
  }).then((result) => {
    if (!result.isConfirmed) return;

    // animacion todos los li saliendo a la derecha
    let items = listaCarrito.querySelectorAll("li");
    items.forEach((li) => {
      li.classList.add("animate__animated", "animate__backOutRight");
    });

    // cuando acabe, vaciamos y repintamos vacío
    setTimeout(() => {
      carrito = [];
      ponerCarrito();

      Swal.fire({
        icon: "success",
        title: "Cesta eliminada",
        timer: 800,
        showConfirmButton: false,
      });
    }, 700);
  });
});

lista.addEventListener("click", (e) => {
  e.preventDefault();

  let boton = e.target.closest(".btn-anadir-carrito");
  if (!boton) return;

  let idProducto = Number(boton.value);

  // Buscamos el producto por id
  let producto = productos.find((p) => p.id === idProducto);
  if (!producto) return;

  // Creamos objeto Producto sin imagen
  let prodCarrito = new Producto(
    producto.id,
    null,
    producto.title,
    producto.price,
    producto.brand,
  );

  carrito.push(prodCarrito);
  ponerCarrito();

  Swal.fire({
    icon: "success",
    title: "Añadido al carrito",
    text: producto.title,
    timer: 800,
    showConfirmButton: false,
  });
});

// Para poder eliminar el producto y no toda la lista
listaCarrito.addEventListener("click", (e) => {
  let btnEliminarLinea = e.target.closest(".btn-eliminar-linea");
  if (!btnEliminarLinea) return;

  let idBorrar = Number(btnEliminarLinea.value);
  let li = btnEliminarLinea.closest("li");

  // animación del elemento eliminado "me gusto, se que tarda mucho. "
  li.classList.add("animate__animated", "animate__hinge");

  // cuando termine la animación, quitamos del array y del DOM
  setTimeout(() => {
    let index = carrito.findIndex((p) => p.getId() === idBorrar);
    if (index !== -1) {
      carrito.splice(index, 1);
    }

    li.remove(); // quitamos solo el li del DOM selecionado
    actualizarTotal();

    // Si se queda vacío, sale el mensaje "Carrito vacío"
    if (carrito.length === 0) {
      ponerCarrito();
    }
  }, 2000);
});

/* filtrado por marca */
marca.addEventListener("change", () => {
  // No hago nada para que el filtro funcione
  /* let marcaSelec = marca.value;

  if (marcaSelec === "") {
    ponerProductos(productos);
    return;
  }

  let filtrados = productos.filter((producto) => producto.brand === marcaSelec);
  ponerProductos(filtrados); */
});

/* Boton para aplicar el filtro */
btnFiltrar.addEventListener("click", () => {
  let categoriaSelec = categoria.value;
  let marcaSelec = marca.value;

  let resultado = productos;

  // Filtro de categoria
  if (categoriaSelec !== "") {
    resultado = resultado.filter(
      (producto) => producto.category === categoriaSelec,
    );
  }

  // Filtro de marca
  if (marcaSelec !== "") {
    resultado = resultado.filter((producto) => producto.brand === marcaSelec);
  }

  productosFiltrados = resultado;
  ponerProductos(productosFiltrados);
});

// Llamada a la api
let url = "https://dummyjson.com/products";
fetch(url)
  .then((res) => {
    // console.log(res);
    return res.json();
  })
  .then((res1) => {
    // console.log(res1);
    productos = res1.products;
    ponerProductos(productos);
    ponerCarrito();
    // console.log(element.category); // Para saber las categorias
    // console.log(element.brand); // para saber las marcas
  })
  .catch((error) => {
    console.log("Error en el servidor");
  });
