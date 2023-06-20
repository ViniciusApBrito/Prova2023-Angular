import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { cadastrar } from './cadastrar';


@Injectable({
  providedIn: 'root'
})
export class ComputadoresService {
  url = "http://localhost:3000/computadores";
  ComputadoresService: any;

  constructor(private http: HttpClient) { }
  save(cadastrar: cadastrar): Observable<cadastrar> {
    return this.http.post<cadastrar>(this.url, cadastrar);
  }
  getcomputer():Observable<cadastrar[]> {
    return this.http.get<cadastrar[]>(this.url);
  }
  
  }

