import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { PedidoComponent } from './pages/pedido/pedido.component';
import { AboutComponent } from './pages/about/about.component';

export const routes: Routes = [
{ path: '', component: InicioComponent },
{ path: 'pedido', component: PedidoComponent },
{ path: 'about', component: AboutComponent },
{ path: '**', redirectTo: '', pathMatch: 'full' }
];