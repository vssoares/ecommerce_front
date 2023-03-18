import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, delay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private apiUrl = 'http://localhost:3000/api/v1/ecommerce/produtos';

  constructor(private http: HttpClient) { }

  getProdutos(): Observable<[]> {
    return this.http.get<[]>(this.apiUrl)  
  }
}
