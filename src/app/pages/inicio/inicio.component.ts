import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './inicio.component.html', 
})
export class InicioComponent {
  // Variables para el formulario
  usuario: string = '';
  clave: string = '';

  constructor(private router: Router) {}
  validado: boolean = true;

  login() {
    if(localStorage.getItem('usuario-logeado')){
      localStorage.removeItem('usuario-logeado');
    }
    if (this.usuario === 'cliente' && this.clave === '1234') {
      this.validado = true;
      localStorage.setItem('usuario-logeado', "true");
      this.router.navigate(['/pedido']);
    } else {
      this.validado = false;
      localStorage.setItem('usuario-logeado', "false");
      // alert('Usuario o contraseña incorrectos. Prueba con cliente / 1234');
    }
  }

  onFormChange(){
    this.validado = true;
  }
}
