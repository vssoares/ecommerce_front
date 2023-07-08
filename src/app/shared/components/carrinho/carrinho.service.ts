import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, Observable, observable, BehaviorSubject } from 'rxjs';
import { AuthService } from 'src/app/ecommerce/pages/auth/auth.service';
import { env } from 'src/app/env/env';
@Injectable({
  providedIn: 'root',
})
export class CarrinhoService {
  private apiUrl = env.api;

  carrinho$ = new BehaviorSubject<any>(null);

  carrinhoStatus = false;
  carrinhoDados: any;

  _carrinhoToggle = new Subject();

  private atualizarCarrinho = new BehaviorSubject<any>(null);
  atualizarCarrinho$ = this.atualizarCarrinho.asObservable();

  constructor(private http: HttpClient, private authService: AuthService) {}

  show() {
    this.carrinhoStatus = true;
    this.setStatus(this.carrinhoStatus);
  }

  hide() {
    this.carrinhoStatus = false;
    this.setStatus(this.carrinhoStatus);
  }

  toggle() {
    this.carrinhoStatus = !this.carrinhoStatus;
    this.setStatus(this.carrinhoStatus);
  }

  setStatus(status: boolean) {
    this.carrinhoStatus = status;
    this._carrinhoToggle.next(this.carrinhoStatus);
  }

  fetchDadosCarrinho(): Observable<any[]> {
    const user = this.authService.getUsuario();
    const params = {
      usuario_id: user?.id,
    };
    return this.http.get<[]>(this.apiUrl + 'ecommerce/carrinho', { params });
  }

  getDadosCarrinho(): Observable<any> {
    return this.carrinho$;
  }

  setDadosCarrinho(dados: any) {
    this.carrinho$.next(dados);
  }

  refreshCarrinho(dados: any) {
    this.atualizarCarrinho.next(dados);
  }

  adicionarProdutoCarrinho({ produto_id, quantidade }: any): Observable<any> {
    const carrinho = this.carrinho$.getValue();
    console.log(carrinho);
    console.log(this.carrinho$);

    const params = {
      carrinho_id: carrinho.id,
      produto_id,
      quantidade,
    };
    return this.http.patch<[]>(
      this.apiUrl + 'ecommerce/carrinho/produto',
      params
    );
  }

  removerProdutoCarrinho({ produto_id, isTudo }: any): Observable<any> {
    const carrinho = this.carrinho$.getValue();
    const params = {
      carrinho_id: carrinho?.id,
      produto_id,
    };
    if (isTudo) {
      return this.http.patch<[]>(
        this.apiUrl + 'ecommerce/carrinho/produto/remover/tudo',
        params
      );
    } else {
      return this.http.patch<[]>(
        this.apiUrl + 'ecommerce/carrinho/produto/remover',
        params
      );
    }
  }
}
