import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { env } from 'src/app/env/env';

@Injectable({providedIn: 'root'})
export class AuthService {

   private url = env.api

   constructor(
      private http: HttpClient
   ) { }

   getHeaders(): HttpHeaders{
      let header = new HttpHeaders({
         'Content-Type': 'application/json',
         'ngrok-skip-browser-warning': "69420",
      })
      return header
   }
   
   cadastrarUsuario(usuario: any): any {
      return this.http.post(`${this.url}auth/user`, usuario)
   }

}