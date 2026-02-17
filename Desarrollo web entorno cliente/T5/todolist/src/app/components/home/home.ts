import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [FormsModule, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  correo?: string;
  pass?: string;
  validacion?: boolean | undefined = undefined;

  validarUsuario() {
    if(this.correo == "Miguel@gmail.com" && this.pass == "ue12345"){
      this.validacion = true;
    } else {
      this.validacion = false;
    }
      
}

}
