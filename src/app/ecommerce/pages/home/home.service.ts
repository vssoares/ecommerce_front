import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, delay } from 'rxjs';
import { env } from 'src/app/env/env';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private apiUrl = env.api

  constructor(
    private http: HttpClient,
    private authService: AuthService
    ) { }

  getProdutos(): Observable<[]> {
    const headers = this.authService.getHeaders()
    return this.http.get<[]>(this.apiUrl + 'ecommerce/produtos', {headers})
  }
}
