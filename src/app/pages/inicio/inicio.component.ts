import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './inicio.component.html', 
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  // Variables para el formulario
  usuario: string = '';
  clave: string = '';

  constructor(private router: Router) {}

  login() {

    if (this.usuario === 'cliente' && this.clave === '1234') {
      this.router.navigate(['/pedido']);
    } else {
      alert('Usuario o contraseña incorrectos. Prueba con cliente / 1234');
    }
  }
}
