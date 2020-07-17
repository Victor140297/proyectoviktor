import { Component, OnInit } from '@angular/core';

import { ProductoService } from '../service/producto.service';
import { Producto } from '../models/producto';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productos: any = [];
  constructor(private productoService: ProductoService) { }

  ngOnInit(): void {
    this.getProducto();
  }
  getProducto(){
    this.productoService.getProductos().subscribe(
      res => {
        this.productos = res;
      },
      err => console.error(err)
    );
  }

  deleteProducto(id:string){
    this.productoService.deleteProducto(id)
    .subscribe(
      res => {
        this.getProducto();
      },
      err => console.error(err)
      
    )
  }


}
