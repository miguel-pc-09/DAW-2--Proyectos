// Cuando vamos a crear una promesa manualmente, se la vamos a asociar a una variable. Y la igualamos a una new Promise.
// Promise() nos va a pedir 3 parametros. 1 la funcion res, 2 la funcion rej y el {cuerpo de la promesa}
// El parametro RES, es la funcion que se ejecuta cuando la promesa se resuelve de forma OK.
// El parametro REJ es la funcion que se ejecuta cuando la promera se resuelve de forma NO OK.
// Estas dos las vamos a hacer de forma manual pero en un servidor se ejecuta de forma automatica.
// Y en el {cuerpo} de la promesa, vamos a poner lo que queremos que se ejecute en segundo plano.

// alert("Mensaje de dialogo")
let promesa = new Promise((res, rej) => {
  // generamos un numero entre 0, 10
  // esperamos 5 segundos
  // en caso de ser menor de 5 resolvemos INcorrectamente
  // en caso contrario resolvemos de forma correcta
  /* let numero = Math.random() * 10; // Acabamos de generar un numero aleatorio entre 0 y10
  console.log(`Numero generado es: ${numero}`);
  console.log("Esperando contestacion."); */
  // Vamos a crear con un setTimeout las prosesas de antes de 5
  // setTimeout es una funcion que nos permite hacer algo despues de un tiempo determinado
  /* setTimeout(() => {
    // let numero = Math.random() * 10;
    // Y ahora la logica
    if (numero > 5) {
      // En caso de ser mayor de 5 resolvemos de forma correcta
      res(numero);
    } else {
      // En caso de ser menor de 5 resolvemos incorrecto
      if (numero > 3) {
        rej("Casi has alcanzado el numero");
      } else {
        rej("Te has quedado muy lejos");
      }
      rej();
    }
  }, 3000); */
});

// Como tratamos la promesa. La LOGICA tratarla en el servidor y la logica al cliente. Logica arriba(simulando), cliente abajo.
/* promesa
  .then((data) => {
    // data es el resultado de la promesa para y como acepta un parametro en res podemos meter el numero
    console.log(`Numero generado mayor que 5. el resultado es ${data}`);
  })
  .catch((error) => {
    // error es el resultado de la promesa para y como acepta un parametro en rej podemos añadir mas logica arriba.
    console.log(error);
  }); */
// Resultado ok -> se ejecutara el metodo then, se ejecuta con funcion de flecha
// promesa.then(()=>{}) la funcion flecha es la funcion que se va a ejecutar correcta

// Resultado no ok -> se ejecuta el metodo catch, se ejecuta con funcion de flecha
// promesa.then(()=>{}).catch(()=>{})

// Y finally ejecutara siempre si o si
// Cogemos el ul para creacion de la lista de usuarios
const lista = document.querySelector("#lista-usuarios"); // Ahora que la tenemos en la promesa la vamos a meter en una variable

// Promesas ya hechas, como FECH. Funciona de la siguiente forma
let url = "https://dummyjson.com/users"; // Igualamos la url a una variable
// ahora con FETCH hacemos la consulta
// fech: es una promesa, pide un string o un url y luego me pide un tipo de metodo(get,post,put,delete)SOLO se lo tendre que poner siempre y cuando lo que yo haga es algo diferente de un get.
// Si es un get sencillo no tengo que hacer nada
// con esto se lanza desde mi pagina la peticion
/* fetch(url)
  .then((res) => {
    // SI EL CUERPO DE UNA PROMESA TIENE UNA LINEANO ES NECESARIO {}, Y COMO YO QUIERO QUE RETORNE NO HACE FALTA LA PALARA RETURN, SE DA POR HECHO QUE ES LINEA ES EL RETORNO
    // si ponemos {} obligatoriamente el return
    // Ahora analizamos la peticion, a contestado bien con then y catch
    /*  console.log("contestacion ok");
    console.log(res); 
    // Ahora tenemos que convertir la respuesta en JSON
    return res.json(); // como es un proceso duro sera en segundo plano y encadenamos una promesa, tenemos dos opciones.
    // si queremos pasarlo a la siguiente promesa ponemos delante return res.json(); y seguimos con otro then
  })
  .then((res1) => {
    // console.log(res1); es para ver el json en consola
    // si quiero por ejemplo coger el nombre de todos los usuarios. 1º debemos acceder con el TAG users y como es un array, foreach para recorrerlo
    res1.users.forEach((element) => {
      //Vamos a crear una sola carta.
      lista.innerHTML += `<div class="col">
          <div class="card">
            <img src="${element.image}" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">${element.firstName} ${element.lastName}</h5>
              <p class="card-text">
                ${element.address.address}, ${element.address.city}
              </p>
              // para la evaluable crear un boton
              <button class="btn btn-primary" click=>"añadir un click para que lo añada a un carrito">Comprar</button>
            </div>
          </div>
        </div>`;
      // console.log(element.firstName);
      // Podemos hacerlo mas potente como en el trivial con el createElement
       let nodo = document.createElement("li");
      nodo.classList.add(
        "list-group-item",
        "animate__animated",
        "animate__fadeInRight",
      );
      nodo.innerText = `${element.firstName} ${element.lastName}`;
      // ahora esperemos a que se ponga
      setTimeout(() => {
        lista.appendChild(nodo);
      }, 2000); 

      // lista.innerHTML += `<li class="list-group-item">${element.firstName} ${element.lastName}</li>`;
    });
  })
  .catch((err) => {
    console.log("El servidor retorna un error");
    console.log(err); // asi podemos ver el error
  }); */

// Otra forma de resolver las promesas. con await y async
// Esto lo tenemos que hacer con funciones. await solo se puede utilizar en un ambito de funcion y siempre que la funcion este marcada como async
async function resolverPromesa(url) {
  let datos = await fetch(url);
  let datosJSON = await datos.json();
  console.log(datosJSON.users); // De momento los metemos aqui para verlos
}

// Otra forma opcion, no la tratamos dentro
async function resolverPromesaThen(url) {
  let datos = await fetch(url);
  let datosJSON = await datos.json();
  return datosJSON;
}
// Con el then 2 opcion
resolverPromesa(url).then().catch();

// Si ahora llamamos a funcion primera forma sin then
// resolverPromesa(url);
