// DOM - Nodos como el div, h1, p, button, etc que son de etipo etiqueta
// De tipo "clase" Atributo  -> class="container"
// de tipo contenido -> Primera pagina en DWEC

// Tener el acceso de cada uno de los elementos del DOM de la pagina y modificar su comportamiento
// Tenemos 2 posibilidades:
// 1º accede a un elemento UNICO "Se guardan en variables"
// Lo podemos ver de dos formas getElementById (forma antigua vale perfecto) o querySelector (mas moderna)
// Con querySelector dentro () buscar por #id .clase o etiqueta
let botonAgregar = document.querySelector("#botonAgregar");
let botonEliminar = document.querySelector("#botonEliminar");
let botonVaciar = document.querySelector("#botonVaciar");
let botonUsuarios = document.querySelector("#botonUsuarios");
let lista = document.querySelector("#lista");
let listaUsuarios = document.querySelector("#listaUsuarios");
let inputNombre = document.querySelector("#inputNombre");
let inputApellido = document.querySelector("#inputApellido");
let inputCorreo = document.querySelector("#inputCorreo");
let inputFecha = document.querySelector("#inputFecha");
// Como queremos que los usuarios se agreguen a una lista la creamos
let usuarios = [];

/* // Si lo buscaramos por su clase nos daria solo el primero que encuentre de la clase
// let boton = document.querySelector(".btn");

// Si queremos buscar por tag y pasaria igual que con clase buscaria y pillaria la primera
// let boton = document.querySelector("button"); */

/* // Que quieres sacarte varios al mismo tiempo. querySelectorAll devuelve una lista de nodos "elementos" (NodeList)
// let botones = document.querySelectorAll("#botonAgregar");
// let botones = document.querySelectorAll(".btn"); buscara la clase y traera todos los que encuentre
// let botones = document.querySelectorAll(".list-group-item"); buscara por etiqueta y traera todos los que encuentre
// let botones = document.querySelectorAll("li"); por TAG */

/* // Teniendo dos grupos de LI y con querySelectorAll los pillariamos a todos
// let items = document.querySelectorAll("li");
// Si queremos solo los de una de la lsita la busqueda se haria de la siguiente forma
// Dentro de lista2 quedate con los li. Dejamos un espacio y ya esta
// Si da la casualiad que tenemos todos estos */
/*
    <li class="list-group-item">Dato 1</li>
    <li class="list-group-item">Dato 2</li> 
    <li class="list-group-item c1">Dato 3</li>
    <li class="list-group-item c2">Dato 4</li> 
para llegar al c1 pondriamos "#lista2 li.c1"  
*/
// Como todos son una lista podemos aplicar un foreach
/* let items = document.querySelectorAll("#lista li");
items.forEach((item, index) => {
  //console.log("Elemento " + item.textContent); // textContent saca el contenido del LI
  // Tambien podemos cambiar su contenido quitara dato1 o dato2 y pondra elemento y el indice
  item.textContent = `Elemento ${index}`;
}); */
// Con el boton usuarios vamos hacer que saque informacion
botonUsuarios.addEventListener("click", () => {
  // Comprobacion para los get y set diferencia entre poner elante get o set de getNombre o setNombre.
  /* let usuario = new Usuario();
  usuario.setNombre("asdad"); // al poner get y set en los getter y setter se convierten en propiedad
  // limpiarDatos[0].setCorreo("prueba@hotmail.com");
  // Sacar el primer elemento de usuarios, y ademas con getNombre sacaremos su nombre ${listaUsarios[0].getNombre()}`. Vamos a probar con mostrar info
  console.log(
    `Los datos del primer usuarios con ${listaUsarios[0].getDominio()}`, // Quitamos un momento mostrarDatos para poner el dominio y probar con getDominio
  ); */
  // Vamos a desornedar la lista
  this.usuarios = _.shuffle(usuarios);
  // ASINCRONIA. No deja de ser un objeto o una funcion que nos permite trabajar con una funcion recurrente.
  // un ejemplo por consola y la podemos guardar dentro de una variable
  let ejecucionRecurrente = setInterval(() => {
    /* console.log("Ejecucion recurrente" + new Date());
    if (listaUsarios.length == 2) {
      clearInterval(ejecucionRecurrente);
    } */
    // El fin de la ejecucion no es la anterior
    agregarNodoUsuario(usuarios.pop());
    if (usuarios.length == 0) {
      clearInterval(ejecucionRecurrente);
    }
  }, 3000);
  // No quiero que vuelva a arranca el interval al dar al boton usuario, lo conseguimos con el enable
  botonUsuarios.enable = false;
  // y podemos decirle que pare en algun momento con clearInterval para que pare la ejecucion recurrente. Y se lo podemos poner dentro del setInterval
  /* if (listaUsarios.length == 2) {
    clearInterval(ejecucionRecurrente);
  } */
  // ejecucionRecurrente();
});

/* // Ahora quiero que pasen cosas. Por ejemplo al pulsar el boton agregar
// addEventListener pedira dos cosas primero el evento y luego la funcion que queremos que haga
// 1º elemento click, para cuando hagan click alga algo.
// 2º pedira una funcion flecha lo que pasara */
botonAgregar.addEventListener("click", () => {
  /*    // lo que pasara cuando el boton se pulse
  // console.log("Boton pulsado ");
  // Queremos que al pulsar el boton agregar se añada un elemento a la lista
  // Se puede hacer de dos formas, facil y dificil, depende de la situacion se elegira una
  // Forma facil. Donde queremos agregar el elemento en la lista.
  // Para esto sacamos la lista arriba con let lista = document.querySelector("#lista");
  // Accedo a la lsita y a su propiedad innerHTML, que hacede al html que esta dentro del nodo 
   let contenido = inputNombre.value;
  lista.innerHTML += `<li class='animate__animated animate__bounceInRight list-group-item'>${contenido}</li>`; // igual no añades es decir sumas lo nuevo porque con igual borra el anterior
  despues de escribir que el input se limpie
  inputNombre.value = ""; 
    // Para que cada vez que agreguemos algo no vuelva tambien a saltar lo anterior debemos cambiar a la forma dificil
  // Forma dificil, primero crea un nodo que quieras agregar
  // Podemos meterle mas logica por ejemplo 
  if (contenido.length == 0) {
    Swal.fire({
      title: "Error!",
      text: "Por favor introduce un nombre!",
      icon: "error",
    });
  } else {
    let li = document.createElement("li"); // creamos un elemento de tipo li
    // 2º configuracion de sus propiedades, es decir las clases.
    // tenemos dos opciones className o classList, recomendacion classList porque tenemos los metodos remove y add
    // Las separamos por comas.
    li.classList.add(
      "animate__animated",
      "animate__backInRight",
      "list-group-item",
    );
    // y ahora el contenido
    li.textContent = contenido;
    // a la lista donde quiero agregar las cosas en vez de modificar el atributo innerHTML
    // Usamos appen o appendChild, el primero a tantos como queira y el segundo solo uno
    let botonLi = document.createElement("button");
    botonLi.classList.add("btn", "btn-danger");
    botonLi.textContent = "Eliminar";
    botonLi.addEventListener("click", () => {
      // Para que funcione la animacion vamos a sacar el class list , y a este un remove por nombre
      li.classList.remove("animate__animated", "animate__backInRight");
      // Como la animacion lo hace muy rapido vamos a decirle que lo haga pasado unos segundos
      li.classList.add("animate__animated", "animate__backOutRight");
      // Utilizamos la funcion setTimeout y lo hace pasado un tiempo
      setTimeout(() => {
        li.remove();
      }, 700);
    });
    li.appendChild(botonLi); // appendChild agrega un hijo al nodo padre
    lista.append(li);
    // Ahora podemos quitar los li del html
    // Vaciamos el input despues de agregar
    inputNombre.value = "";
  }  */
  // Para que llame la funcion agregar usuario, y tenemos la posibilidad de 1 o dos parametros a pasar. el segundo es optativo
  // Podemos pasar mas argumentos que se llamarian argumentos fantasmas
  // agregarUsuario();
  // Lo que quiero es crearme un objeto de tipo usuario. Antes creamos su clase "Archivo-> usuario.js"
  // Creamos el primer usuario
  let usuario = new Usuario(
    inputNombre.value,
    inputApellido.value,
    inputCorreo.value,
    inputFecha.value,
  );
  // Ahora llamamos a la funcion de agregar el usuario
  agregarUsuario(usuario);
});
// Si queremos hacer lo mismo con el resto de botones
botonEliminar.addEventListener("click", () => {
  // lo que pasara cuando el boton se pulse
  // Quiero eliminar el ultimo para esto usamos removeChild, que elimina el elemento que le decimos en ().
  // antes del removechild sacamos el nodo con varibale
  // Quiero eliminar solo el primero. declaramos el nodo = de la lista, childnode(devuelve una lista de child)[dame el de la posicion 0]
  let nodo = lista.childNodes[0];
  nodo.remove();
});

botonVaciar.addEventListener("click", () => {
  // lo que pasara cuando el boton se pulse
  // Vaciar todos los nodos
  // Vamos a añadir tambien dos animaciones
  lista.classList.add("animate__animated", "animate__wobble");
  setTimeout(() => {
    lista.innerHTML = "";
  }, 700);
});

// Los vemos en consola
/* console.log(botonAgregar);
console.log(botonEliminar);
console.log(botonVaciar); */
// Creamos la funcion de listaUsuarios, y le decimos opcional la posicion poniendo = 1 para tener un valor por defecto
function agregarUsuario(usuario, posicion = 1) {
  // No quiero agregar el usuario si ya existe ese correo
  // ahora con los metodos find o filter podemos hacer que si un correo existe no lo agregue
  // en dos pasos
  let usuarioEncontrado = usuarios.find((item) => {
    return item.getCorreo() == usuario.getCorreo();
  });
  if (usuarioEncontrado != undefined) {
    Swal.fire({
      title: "Usuario",
      text: "El usuario ya existe",
      icon: "error",
    });
  } else {
    usuarios.push(usuario);
    limpiarDatos();
  }
  // console.log(listaUsarios);
}
function agregarNodoUsuario(usuario) {
  listaUsuarios.innerHTML += `<li class="list-group-item">${usuario.mostrarDatos()}</li>`;
}

// Ahora creamos otra funcion para que despues de agregar el usuario se limpie el formulario
function limpiarDatos() {
  inputApellido.value = "";
  inputCorreo.value = "";
  inputFecha.value = "";
  inputNombre.value = "";
}
