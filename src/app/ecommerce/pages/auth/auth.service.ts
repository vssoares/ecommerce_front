import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { env } from 'src/app/env/env';
import { Cadastro, Login } from 'src/app/shared/interfaces/auth';
import jwt_decode from 'jwt-decode';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private url = env.api;

  constructor(private http: HttpClient) {}

  getHeaders(): HttpHeaders {
    let header = new HttpHeaders({
      'Content-Type': 'application/json',
      'ngrok-skip-browser-warning': '69420',
    });
    return header;
  }

  cadastrarUsuario(usuario: Cadastro): any {
    return this.http.post(`${this.url}auth/user`, usuario);
  }

  login(usuario: Login) {
    return this.http.post(`${this.url}auth/user/login`, usuario);
  }

  private usuarioDados = new BehaviorSubject('');
  currentUsuario = this.usuarioDados.asObservable();

  changeUsuario(usuario: any) {
    this.usuarioDados.next(usuario);
  }

  public setToken(token: any): any {
    return localStorage.setItem('token', token);
  }

  public getToken(): any {
    return localStorage.getItem('token');
  }

  public decodePayloadJWT(): any {
    try {
      return jwt_decode(this.getToken());
    } catch (error) {
      return null;
    }
  }
}
