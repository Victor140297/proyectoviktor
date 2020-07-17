import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductosComponent } from './productos/productos.component';
import { ComponComponent } from './compon/compon.component';
import { ProductListComponent } from './product-list/product-list.component';
import { NavigatorComponent } from './navigator/navigator.component';

import { ProductoService } from './service/producto.service';
import { MezclaComponent } from './mezcla/mezcla.component';
import { ProductFormComponent } from './product-form/product-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent,
    ComponComponent,
    ProductListComponent,
    NavigatorComponent,
    MezclaComponent,
    ProductFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ProductoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
