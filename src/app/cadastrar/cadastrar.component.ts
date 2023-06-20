import { Component } from '@angular/core';
import { ComputadoresService } from '../computadores.service';
import { cadastrar } from '../cadastrar';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent {
  cadastrar: cadastrar[] = [];
  FormGroupComputadores: FormGroup;
  submitted: boolean = false;

  constructor(private computadoresService: ComputadoresService, private formsBuilder: FormBuilder) {

    this.FormGroupComputadores = formsBuilder.group({
      id: [''],
      name: ['', [Validators.required]],
      price: ['', [Validators.required]]
    })
  }

  save() {
    this.submitted = true;

    if (this.FormGroupComputadores.invalid) {
      return;
    }

    this.computadoresService.save(this.FormGroupComputadores.value).subscribe({
      next: data => {
        this.cadastrar.push(data);
        this.FormGroupComputadores.reset();
        this.submitted = false; // Resetar a flag "submitted"
      },
    });
  }


  get name(): any {
    return this.FormGroupComputadores.get("name");
  }
  get price(): any {
    return this.FormGroupComputadores.get("price");
  }

}