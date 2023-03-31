import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class AuthService {
   constructor() { }

   getHeaders(): HttpHeaders{
      let header = new HttpHeaders({
         'Content-Type': 'application/json',
         'ngrok-skip-browser-warning': "69420",
         
      })
      return header
   }
   
}