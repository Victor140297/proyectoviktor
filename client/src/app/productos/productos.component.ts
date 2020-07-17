import { Component, OnInit, HostBinding } from '@angular/core';
import { Producto } from '../models/producto';
import { ActivatedRoute ,Router } from '@angular/router';

import { ProductoService } from '../service/producto.service';
@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  @HostBinding('class') classes='row';

  producto: Producto={
    id:0,
    nombreP:'',
    description:'',
    image : '',
    created_at : new Date()
  };

  edit: boolean = false;

  constructor(private productoService: ProductoService, private router: Router,
    private activedRoute: ActivatedRoute) { 

  }

  ngOnInit(): void {
    const params = this.activedRoute.snapshot.params;
    if(params.id){
      this.productoService.getProducto(params.id)
      .subscribe(
        res=> {
          this.producto = res;
          this.edit = true;
        },
        err=> console.error(err)
        
      )
    }
  }
  savenewProduc(){
    delete this.producto.created_at;
    delete this.producto.id;
    this.productoService.saveProducto(this.producto)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/productos']);
      },
      err => console.error(err)
      
    )
  }

  updateProducto(){
    delete this.producto.created_at;
    this.productoService.updateProducto(this.producto.id, this.producto)
    .subscribe(
      res=>{
        this.router.navigate(['/productos']);
      },
      err=> console.error(err)
      
    )
  }

}
