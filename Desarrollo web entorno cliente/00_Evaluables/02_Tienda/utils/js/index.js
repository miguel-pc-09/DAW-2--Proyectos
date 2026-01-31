/* Selectores  */
let btnBajo = document.querySelector("#botonBajo");
let btnAlto = document.querySelector("#botonAlto");
let categoria = document.querySelector("#categoria");
let marca = document.querySelector("#marca");
let btnFiltrar = document.querySelector("#btnFiltrar");

let productos = []; // Guardo los productos
let productosFiltrados = []; // Guardo los productos filtrados
let productosMostrados = []; // Guardo los productos mostrados

/* Llamada a la API selector */
const lista = document.querySelector("#lista-productos");

/* Funciones  */
function ponerProductos(arrayProductos) {
  productosMostrados = arrayProductos;
  lista.innerHTML = ""; // para limpiar antes

  arrayProductos.forEach((element) => {
    lista.innerHTML += `
        <div class="col animate__animated animate__fadeInDown">
          <div class="card h-100">
            <img src="${element.thumbnail}" class="card-img-top" alt="${element.title}">
            <div class="card-body text-center">
              <h5 class="card-title">${element.title}</h5>
              <p class="card-text">Precio: ${element.price} €</p>
              <a href="#" class="btn btn-success">Comprar</a>
            </div>
          </div>
        </div>
        `;
  });
}

/* Eventos  */
/* Boton del precio mas bajo */
btnBajo.addEventListener("click", () => {
  let ordenBajo = [...productosMostrados].sort((a, b) => a.price - b.price); // [...productosMostrados] es para copiar el array
  ponerProductos(ordenBajo);
});

/* Boton del precio mas alto */
btnAlto.addEventListener("click", () => {
  let ordenAlto = [...productosMostrados].sort((a, b) => b.price - a.price);
  ponerProductos(ordenAlto);
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
    // console.log(element.category); // Para saber las categorias
    // console.log(element.brand); // para saber las marcas
  })
  .catch((error) => {
    console.log("Error en el servidor");
  });
