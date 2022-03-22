import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Inventario } from './inventario';
import { identifierModuleUrl } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  API: string = 'http://localhost/inventario/';

  constructor(private clienteHttp:HttpClient) { }

  AgregarProducto(datosproducto:Inventario):Observable<any>{
    return this.clienteHttp.post(this.API+"?insertar=1",datosproducto);
  }

  ObtenerProducto(){
    return this.clienteHttp.get(this.API);
  }
  
  BorrarProducto(id_product:any):Observable<any>{
    return this.clienteHttp.get(this.API+"?borrar="+id_product);
  }
  ModificarProducto(id_product:any):Observable<any>{
    return this.clienteHttp.get(this.API+"?consultar="+id_product);
  }
  EditarProducto(id:any, datosproducto:any):Observable<any>{
    return this.clienteHttp.post(this.API+"?actualizar="+id,datosproducto);
  }

}
