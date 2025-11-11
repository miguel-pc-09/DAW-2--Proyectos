/* Implementa una lista de compras que permita al usuario: 
1) Añadir productos (con prompt()), 
2) Ver la lista completa, 
3) Eliminar un producto por nombre, 
4) Vaciar la lista. 
Usa confirm() para las acciones de eliminación y muestra la lista actualizada con SweetAlert después de cada operación. */

alert("Tú lista de la compra. ");

let listaCompra = [];

// funcion para añadir productos
function añadirProducto() {
  const nombre = prompt("Introduce que quieres añadir a la lista:");
  if (nombre === null) {
    alert("cancelando lista");
  } else {
    listaCompra.push(nombre);
    alert(`Esta es tu lista de la compra: ${mostrarLista}`);
  }
}

// Funcion para ver la lista
function mostrarLista() {
  if (listaCompra.length === 0) {
    alert("Tu lista esta vacia");
  } else {
    let mensaje = "Lista de compra\n";
    listaCompra.forEach((p, i) => {
      mensaje += i + 1 + "." + p + "\n";
    });
    Swal.fire(mensaje);
  }
}

// Funcion para eliminar un producto
function eliminarProducto() {
  if (listaCompra === 0) {
    alert("No hay productos para eliminar.");
  } else {
    let buscado = prompt("Escribe el nombre del producto a eliminar:");
    if (buscado === null) {
      alert("Operacion cancelada");
    } else {
      buscado = buscado.toLowerCase();
      // lo igualamos a -1 para empezar en no encontrado
      let posicion = -1;
      listaCompra.forEach((p) => {
        if (p.toLowerCase() === buscado) {
          posicion = i;
        }
      });
      if (posicion === -1) {
        alert("El producto no esta en la lista");
      } else {
        const ok = confirm(
          `¿Seguro que quieres eliminar ${listaCompra[posicion]}?`
        );
        if (ok) {
          listaCompra.splice(posicion);
          mostrarLista();
        }
      }
    }
  }
}

// Funcion vaciar lista
function vaciarLista() {
  if (listaCompra.length === 0) {
    alert("Tu lista esta vacia");
  } else {
    const ok = confirm("¿Seguro que quieres vaciar la lista?");
    if (ok) {
      listaCompra.length = 0;
      mostrarLista();
    } else {
      alert("Cancelando el vaciado de la lista");
    }
  }
}

// El menu de la lista
while (true) {
  const opcion = prompt(
    "Menú de opciones:" +
      "1) Añadir producto\n" +
      "2) Ver lista\n" +
      "3) Eliminar producto\n" +
      "4) Vaciar lista\n" +
      "5) Salir"
  );
  if (opcion === null || opcion === "5") {
    alert("Hasta pronto");
    break;
  }
  if (opcion === "1") {
    añadirProducto();
  } else if (opcion === "2") {
    mostrarLista();
  } else if (opcion === "3") {
    eliminarProducto();
  } else if (opcion === "4") {
    vaciarLista();
  } else {
    alert("Opción no válida. Debes elegir 1, 2, 3, 4 o 5.");
  }
}
