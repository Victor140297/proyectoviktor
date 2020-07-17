import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductListComponent } from './product-list/product-list.component';
import { ProductosComponent } from './productos/productos.component';
import { MezclaComponent } from './mezcla/mezcla.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: '/productos',
    pathMatch: 'full'
  },

  {
    path: 'productos',
    component: ProductListComponent
  },
  {
    path: 'productos/add',
    component: ProductosComponent
  },
  {
    path: 'productos/edit/:id',
    component: ProductosComponent
  },
  {
    path: 'productos/mezcla',
    component: MezclaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
