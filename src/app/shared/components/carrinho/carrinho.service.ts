import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { AuthService } from 'src/app/ecommerce/pages/auth/auth.service';
import { env } from 'src/app/env/env';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  private apiUrl = env.api

  carrinhoStatus = false;
  carrinhoDados: any;

  _carrinhoToggle = new Subject();
  _carrinhoDados = new Subject();

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { }

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
    this._carrinhoToggle.next(this.carrinhoStatus);
  }

  getDadosCarrinho(usuario_id: number): Observable<any[]>{
    const params = {
      usuario_id
    };
    return this.http.get<[]>(this.apiUrl + 'ecommerce/carrinho', { params })
  }

  setDadosCarrinho(dados: any){
    this.carrinhoDados = dados
    this._carrinhoDados.next(dados)
  }

  get dados_carrinho(){
    return this.carrinhoDados
  }

}
