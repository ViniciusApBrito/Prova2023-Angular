import { Component, OnInit } from '@angular/core';
import { ComputadoresService } from '../computadores.service';
import { cadastrar } from '../cadastrar';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  lista: cadastrar[] = [];

  constructor(private ComputadoresService: ComputadoresService){}


  ngOnInit(): void {
    this.loadAnuncios();
  }

  loadAnuncios() {
    this.ComputadoresService.getcomputer().subscribe({
      next: (data) => (this.lista = data),
    });
  }

}
