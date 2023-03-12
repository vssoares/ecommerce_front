import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, delay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<[]> {
    return this.http.get<[]>(this.apiUrl).pipe(delay(5000));;
  }
  getPosts(): Observable<[]> {
    return this.http.get<[]>(this.apiUrl).pipe(delay(2000));;
  }
}
