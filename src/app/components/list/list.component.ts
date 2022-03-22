import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  Productos:any;
  

  constructor(
    private crudservice:CrudService
  ) { }

  ngOnInit(): void {
    this.crudservice.ObtenerProducto().subscribe(respuesta=>{
      console.log(respuesta);
      this.Productos=respuesta;
    });
  }
  borrarRegistro(id_product:any,iControl:any){
    console.log(id_product);
    console.log(iControl);
    if(window.confirm("¿Desea borrar el registro?")){
    this.crudservice.BorrarProducto(id_product).subscribe((respuesta)=>{
      this.Productos.splice(iControl,1);
    });
  }
  }

}
