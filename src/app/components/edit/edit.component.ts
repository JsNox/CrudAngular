import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  formGroup:FormGroup;
  ID:any;

  constructor(
    private activeRoute:ActivatedRoute,
    private crudservice:CrudService,
    public formulario:FormBuilder,
    private ruteador:Router
  ) { 
    this.ID=this.activeRoute.snapshot.paramMap.get('id_product');
    console.log(this.ID)
    this.crudservice.ModificarProducto(this.ID).subscribe(
      respuesta=>{
        console.log(respuesta);
        this.formGroup.setValue({
          descripcion:respuesta[0]['descripcion'],
          cantidad:respuesta[0]['cantidad'],
          unidad:respuesta[0]['unidad'],
          clave:respuesta[0]['clave'],
        });
      }
    );
    this.formGroup=this.formulario.group({
      descripcion:[''],
      cantidad:[''],
      unidad:[''],
      clave:[''],

    })
  }

  ngOnInit(): void {
  }

  enviarDatos():any{
    console.log(this.ID)
    console.log(this.formGroup.value)
    this.crudservice.EditarProducto(this.ID,this.formGroup.value).subscribe(()=>{
      this.ruteador.navigateByUrl('/list');
    });
  }

}
