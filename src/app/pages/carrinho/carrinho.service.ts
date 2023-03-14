import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, delay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  private apiUrl = 'https://fakestoreapi.com/products';

  constructor(private http: HttpClient) { }

  getCarrinho(): Observable<[]> {
    return this.http.get<[]>(this.apiUrl)  
  }
}
