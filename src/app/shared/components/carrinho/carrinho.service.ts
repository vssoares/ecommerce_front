import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  carrinhoStatus = false;

  carrinhoSubject = new Subject();

  constructor() { }

  show(){
    this.carrinhoStatus = true;
    this.setStatus(this.carrinhoStatus);
  }

  hide(){
    this.carrinhoStatus = false;
    this.setStatus(this.carrinhoStatus);
  }

  toggle(){
    this.carrinhoStatus = !this.carrinhoStatus;
    this.setStatus(this.carrinhoStatus);
  }

  getStatus(){
    return this.carrinhoStatus;
  }

  setStatus(status: boolean){
    this.carrinhoStatus = status;
    this.carrinhoSubject.next(this.carrinhoStatus);
  }

}
