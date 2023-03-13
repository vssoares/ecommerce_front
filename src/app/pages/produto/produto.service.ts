import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, delay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  private apiUrl = 'https://fakestoreapi.com/products/';

  constructor(private http: HttpClient) { }

  getProduto(id: number): Observable<[]> {
    return this.http.get<[]>(this.apiUrl + id)
  }
}
