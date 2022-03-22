import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CrudService } from 'src/app/services/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  formGroup:FormGroup;

  constructor(
    public formulario:FormBuilder,
    private crudservice:CrudService,
    private ruteador:Router
    ) { 
    
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
    console.log("Datos enviados");
    console.log(this.formGroup.value);
    this.crudservice.AgregarProducto(this.formGroup.value).subscribe();
    this.ruteador.navigateByUrl('/list');
  }


}
