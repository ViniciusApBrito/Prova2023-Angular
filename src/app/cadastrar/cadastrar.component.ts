import { Component } from '@angular/core';
import { ComputadoresService } from '../computadores.service';
import { cadastrar } from '../cadastrar';
import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent {
  cadastrar: cadastrar[] = [];
  FormGroupComputadores: FormGroup;
  
  constructor(private computadoresService: ComputadoresService, private formsBuilder: FormBuilder) {

    this.FormGroupComputadores = formsBuilder.group({
      id: [''],
      name: [''],
      price: ['']
    })
  }

  save(){
    this.computadoresService.save(this.FormGroupComputadores.value).subscribe(
      {
      next: data => {
        this.cadastrar.push(data);
        this.FormGroupComputadores.reset();
      },
    });
  }


}