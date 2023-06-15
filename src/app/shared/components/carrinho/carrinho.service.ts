import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, Observable, observable, BehaviorSubject } from 'rxjs';
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

  private carrinhoDados$ = new Subject();
  _carrinhoDados = this.carrinhoDados$.asObservable();

  constructor(
    private http: HttpClient,
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
    this.carrinhoDados$.next(dados)
  }

  get dados_carrinho(){
    return this.carrinhoDados
  }


  adicionarProdutoCarrinho({ produto_id, quantidade }: any): Observable<any>{
    const params = { carrinho_id: this.dados_carrinho?.id, produto_id, quantidade };
    return this.http.patch<[]>(this.apiUrl + 'ecommerce/carrinho/produto', params)
  }
}
