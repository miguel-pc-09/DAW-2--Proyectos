import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('inicio');
  nombre: string | undefined= 'Miguel';
  nota?: number | undefined = 10;
  imagen = "https://wallpapers.com/images/featured/cool-profile-picture-87h46gcobjl5e4xu.jpg";

  procesarRespuesta(nombre: string, nota: string){
    this.nombre = nombre;
    this.nota = Number(nota);
    if(this.nota < 5){
      this.imagen = "https://i.pinimg.com/736x/4e/f5/1e/4ef51e83297225a22528a062f70e9f9c.jpg";
    } else {
      this.imagen ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpDfrifAAfIFQNn65o_AMvi8oOOpSqOyETCw&s";
    }
  }
}
