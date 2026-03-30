// ===============================
// 1. FETCH BÁSICO
// ===============================

fetch("https://jsonplaceholder.typicode.com/posts")
  .then(function (response) {
    return response.json();
    // -> Convierte la respuesta a JSON
  })
  .then(function (data) {
    console.log(data);
    // -> Aquí ya tengo los datos
  });

// ===============================
// 2. FETCH CON ASYNC/AWAIT (MEJOR)
// ===============================

async function cargarDatos() {
  let response = await fetch("https://jsonplaceholder.typicode.com/posts");
  // -> Pido los datos

  let data = await response.json();
  // -> Convierto a JSON

  console.log(data);
}

cargarDatos();

// ===============================
// 3. MOSTRAR DATOS EN EL DOM (MUY EXAMEN)
// ===============================

let contenedor = document.querySelector("#resultado");

async function mostrarDatos() {
  let response = await fetch("https://jsonplaceholder.typicode.com/users");
  let usuarios = await response.json();

  for (let usuario of usuarios) {
    let p = document.createElement("p");

    p.textContent = usuario.name;

    contenedor.appendChild(p);
  }
}

mostrarDatos();

// ===============================
// 4. MANEJAR ERRORES
// ===============================

async function cargarConError() {
  try {
    let response = await fetch("url_incorrecta");
    let data = await response.json();

    console.log(data);
  } catch (error) {
    console.log("Error al cargar datos");
  }
}

// ===============================
// 5. ENVIAR DATOS (POST)
// ===============================

fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    title: "Mi post",
    body: "Contenido",
    userId: 1,
  }),
})
  .then((response) => response.json())
  .then((data) => console.log(data));

// ===============================
// 6. EJEMPLO REAL TIPO EXAMEN
// ===============================

let boton = document.querySelector("#cargar");
let lista = document.querySelector("#lista");

boton.addEventListener("click", async function () {
  let response = await fetch("https://jsonplaceholder.typicode.com/posts");
  let posts = await response.json();

  lista.innerHTML = "";

  for (let post of posts) {
    let li = document.createElement("li");
    li.textContent = post.title;
    lista.appendChild(li);
  }
});
