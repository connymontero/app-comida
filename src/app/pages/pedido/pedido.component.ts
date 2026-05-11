import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

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

  ngOnInit() {
    const guardados = localStorage.getItem('pedidos_comida');
    if (guardados) {
      this.pedidosRealizados = JSON.parse(guardados);
    }
  }

  registrarPedido(form: any) {
    if (form.invalid) return;

    const nuevoPedido = {
      nombre: this.nombre,
      producto: this.producto,
      cantidad: this.cantidad
    };

    this.pedidosRealizados.push(nuevoPedido);
    localStorage.setItem('pedidos_comida', JSON.stringify(this.pedidosRealizados));
    
    form.reset();
    alert('¡Pedido registrado con éxito!');
  }
}