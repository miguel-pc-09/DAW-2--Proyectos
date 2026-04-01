import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Product } from '../../model/producto';
import { ServicioCarrito } from '../../services/servicio-carrito';

// Declaro Swal para usar SweetAlert
declare const Swal: any;

@Component({
  selector: 'app-carrito',
  imports: [CommonModule],
  templateUrl: './carrito.html',
  styleUrl: './carrito.css',
})
export class Carrito {
  // Aquí guardo los productos que hay en el carrito
  productosCarrito: Product[] = [];

  // Aquí guardo el total de la compra
  totalCarrito: number = 0;

  constructor(private servicioCarrito: ServicioCarrito) {
    // Nada más entrar al carrito, actualizo los datos
    this.actualizarDatosCarrito();
  }

  // Este método actualiza el array del carrito y su total
  actualizarDatosCarrito(): void {
    // Traigo los productos guardados en el servicio
    this.productosCarrito = this.servicioCarrito.getProductosCarrito();

    // Traigo el total calculado desde el servicio
    this.totalCarrito = this.servicioCarrito.getTotalCarrito();
  }

  // Este método elimina un producto según su id
  eliminarProducto(idProducto: number): void {
    // Llamo al servicio para eliminarlo
    this.servicioCarrito.eliminarProducto(idProducto);

    // Vuelvo a actualizar los datos para que se refresque la vista
    this.actualizarDatosCarrito();
  }

  // Este método vacía el carrito entero
  vaciarCarrito(): void {
    // Llamo al servicio para vaciarlo
    this.servicioCarrito.vaciarCarrito();

    // Actualizo los datos
    this.actualizarDatosCarrito();

    // Muestro mensaje informando de que el carrito quedó vacío
    Swal.fire({
      icon: 'info',
      title: 'Carrito vacío',
      text: 'Se han eliminado todos los productos del carrito',
      confirmButtonText: 'Aceptar',
    });
  }

  // Este método simula finalizar la compra
  finalizarCompra(): void {
    // Si no hay productos en el carrito, aviso y salgo del método
    if (this.productosCarrito.length === 0) {
      Swal.fire({
        icon: 'info',
        title: 'Carrito vacío',
        text: 'No hay productos en el carrito',
        confirmButtonText: 'Aceptar',
      });
      return;
    }

    // Guardo el total con dos decimales para mostrarlo bonito en el mensaje
    const totalCompra = this.totalCarrito.toFixed(2);

    // Vacío el carrito porque la compra ya se ha "realizado"
    this.servicioCarrito.vaciarCarrito();

    // Actualizo la vista
    this.actualizarDatosCarrito();

    // Muestro mensaje de compra completada
    Swal.fire({
      icon: 'success',
      title: 'Compra finalizada',
      text: `Enhorabuena, hiciste una compra por ${totalCompra} €`,
      confirmButtonText: 'Aceptar',
    });
  }
}
