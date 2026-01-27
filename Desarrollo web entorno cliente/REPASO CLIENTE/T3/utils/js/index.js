// Ahora sacaremos los elementos, en este caso los botones.
let bAnadir = document.querySelector("#btnAgregar"); // Buscar siempre por querySelector
let bBorrar = document.querySelector("#btnEliminar"); // RECORDAR=> ID (#) , TAG (p O h1 o..) y CLASS (.)
let bObtener = document.querySelector("#btnObtener");
let bEstilo = document.querySelector("#btnEstilo");
let parrafo = document.querySelector("p");
let inputNombre = document.querySelector("#inputNombre");
let inputApellido = document.querySelector("#inputApellido");
let inputPass = document.querySelector("#inputPass");
// con JSON podemos hacer tambien mas cosas como meterlo en una lista. Cuando arranques coge lo que tengas.
let listaUsuarios = JSON.parse(localStorage.getItem("usuarios"));
// Boton del estilo
let estilo = localStorage.getItem("clase");
if (estilo != null) {
  // Tenemos dos clases aplicadas, classList y className
  bEstilo.classList.remove("btn-primary");
  bEstilo.classList.add(estilo);
}

// Ahora añadir evento a los botones. Y todo manual
// Como no queremos añadir elementos independientes, guardaremos objetos. Para esto creamos el archivo USUARIO.js

bAnadir.addEventListener("click", () => {
  // Despues de crear la clase usuario la traemos
  /* let usuario1 = new Usuarios(
    inputNombre.value,
    inputApellido.value,
    inputPass.value,
  ); */
  // Como podemos crear este tipo de objeto string , crearlo de objeto tipo JSON.
  // Donde entre las { diremos clave: valor}
  let usuario = {
    nombre: inputNombre.value,
    apellido: inputApellido.value,
    pass: inputPass.value,
  };
  listaUsuarios.push(usuario);
  // Despues de que el elemento este dentro del array, limpiamos los inputs
  inputPass.value = "";
  inputApellido.value = "";
  inputNombre.value = "";
  // por ultimo quiero poner en el localstorage quiero setear un item que voy a llamar usuarios
  localStorage.setItem("usuarios", JSON.stringify(listaUsuarios));
  /* Para que no guarde en el formato string, usamos el formato JSON: es un formato, es el principal formato que se utiliza para hacer comparticiones de datos entre dos paginas web.
  Esta un XML, es algo muy similar a un html pero con un etiquetado propio que le puedo meter un namespace para decirle que tipo de datos se pueden poner, que etiquetas, es muy abierto 
  pero tambien muy pesado.
  JSON {}-> JavaScript Object Notation es decir es un objeto escrito en formato javascript
  JavaScriptObjectNotations -> {empieza y termina por llaves }, donde tiene un par (clave) y un valor -> clave: valor. y puede tantos pares como quiera. y se puede guardar dentro de una variable
  Y dentro podria en el valor tener otro JSON
  let usuario = {
    nombre: valor
    apellido: valor
    correo: valor
    hobby: {nombre: asdasdasd, experiencia: asfsdf,... tantas combinaciones como quiera}
    }
    Cuando queremos guardar un objeto, no deberiamos guardarlo en formato objeto como tal, si no en formato JSON.
    Y tengo dos opciones o guardarlo el objeto ya en el anterior formato, o crearlo yo manualmente
    */
  // Como crearlo Manualmente. Existe una funcion en JS que se llama JSON y una funcion stringify, que me va a poner en formato string un objeto correspondiente
  localStorage.setItem("usuario", JSON.stringify(usuario));

  // Y para guardarlo ponemos lo siguiente
  // localStorage.setItem("usuario", usuario1);
  // En localstorage nos mostrara que se guardo un objeto, que sera un string

  // Para trabajar con un añadir,lo trabajo con la variable localstorage o sessionstorage, dependiendo de lo que me interese
  // Despues del punto se puede ver que tenemos varios elemento a elegir
  // Si cambiamos nombre, por apellido y el valor veremos que se mantiene en localstorage
  // En cambio en sessionstorage se borra si cerramos el navegador ni entre pestañas
  // localStorage.setItem("apellido", "Perucha"); // KEY y valor, mirando en aplication se puede ver el key y el valor
  // localStorage.setItem("nombre", "Miguel");
  // Tambien lo podemos guardar del input en vez de manualmente
  /*  localStorage.setItem("nombre", inputNombre.value);
  localStorage.setItem("apellido", inputApellido.value);
  localStorage.setItem("pass", inputPass.value); */
  // sessionStorage.setItem("nombre", "Miguel");
});
bBorrar.addEventListener("click", () => {
  // Para trabajar con eliminar datos,lo trabajo con la variable localstorage o sessionstorage, dependiendo de lo que me interese
  // Despues del punto se puede ver que tenemos varios elemento a elegir
  // El metodo removeItem() no te devuelve nada "void", pero te esta pidiendo una key
  localStorage.removeItem("apellido");
});
bObtener.addEventListener("click", () => {
  // Para trabajar con una obtencion de datos,lo trabajo con la variable localstorage o sessionstorage, dependiendo de lo que me interese
  // Despues del punto se puede ver que tenemos varios elemento a elegir
  // Con el obtener podemos ademas de obtener la informacion, añadirla al parrafo
  // parrafo.textContent = localStorage.getItem("nombre");
  // provamos que recuperamos del objeto usuario y miramos el tipo. Es decir lo guarda un objeto asociado con un string
  // console.log(typeof localStorage.getItem("usuario"));

  // Ahora que tenemos el JSON si yo quiero recuperar el objeto entero o una parte usamos la funcion JSON.parse
  listaUsuarios = JSON.parse(localStorage.getItem("usuarios"));
  // parrafo.textContent = usuarioRecuperado.nombre;

  // Podemos traer la lista de los usuarios
  parrafo.textContent = listaUsuarios.length;
});

// Todo esto nos vale para mas cosas, creamos un boton en index.html que llamaremos estilo
bEstilo.addEventListener("click", () => {
  localStorage.setItem("clase", "btn-danger");
});
