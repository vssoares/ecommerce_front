import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable, forkJoin } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { HomeService } from './home.service';

@Injectable({ providedIn: 'any' })
export class HomeResolve implements Resolve<any> {
  constructor(){
    console.log(1);
    
  }
  resolve() {
    return "teste"
  }
}