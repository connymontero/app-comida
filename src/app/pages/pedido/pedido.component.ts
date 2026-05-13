import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

declare const bootstrap: any;

@Component({
  selector: 'app-pedido',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './pedido.component.html'
})
export class PedidoComponent implements OnInit {
  nombre: string = '';
  producto: string = '';
  cantidad: number | null = null;
  pedidosRealizados: any[] = [];


  constructor(private router: Router) { }

  ngOnInit() {

    const guardados = localStorage.getItem('pedidos_comida');
    const usuario = localStorage.getItem('usuario-logeado'); //Se revisa que el usuario haya hecho login desde el inicio component

    if (!usuario || usuario === 'false') { //Si el usuario no existe o no hizo el login correctamente, se vuelve al inicio de forma automática
      this.router.navigate(['/']);
      return;
    }

    if (guardados) {
      this.pedidosRealizados = JSON.parse(guardados);
    }
    console.log(this.router);
  }

  registrarPedido(form: any) { //Para guardar pedidos en el almacenamiento local del navegador
    if (form.invalid) return;

    const nuevoPedido = {
      nombre: this.nombre,
      producto: this.producto,
      cantidad: this.cantidad
    };

    this.pedidosRealizados.push(nuevoPedido);
    localStorage.setItem('pedidos_comida', JSON.stringify(this.pedidosRealizados));

    form.reset();
    // alert('¡Pedido registrado con éxito!');
    const toastLiveExample = document.getElementById('liveToast');
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);
    toastBootstrap.show();
  }
}