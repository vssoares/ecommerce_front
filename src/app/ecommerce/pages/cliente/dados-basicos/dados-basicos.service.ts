import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { env } from 'src/app/env/env';
import { AuthService } from '../../auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class DadosBasicosService {
  private apiUrl = env.api;
  _dadosBasicosCache: any;

  get dadosBasicosCache() {
    return this._dadosBasicosCache;
  }
  set dadosBasicosCache(dados: any) {
    this._dadosBasicosCache = dados;
  }

  constructor(private http: HttpClient, private authService: AuthService) {}

  getDadosBasicos(usuario_id: number) {
    const headers = this.authService.getHeaders();
    const params = {
      usuario_id,
    };
    return this.http.get<any[]>(
      `${this.apiUrl}ecommerce/cliente/dados-basicos`,
      { headers, params }
    );
  }
}
