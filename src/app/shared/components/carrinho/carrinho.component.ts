import { Subscription } from 'rxjs';
import { Component, OnDestroy, inject } from '@angular/core';
import { CarrinhoService } from './carrinho.service';
import {
  fadeAnimation,
  inOutAnimation,
  toggleCarrinho,
} from '../../animations';
import { AuthService } from 'src/app/ecommerce/pages/auth/auth.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css'],
  animations: [fadeAnimation, toggleCarrinho, inOutAnimation],
})
export class CarrinhoComponent implements OnDestroy {
  usuario: any;
  carrinho: any;
  carrinhoStatus = false;
  removendoProduto = false;

  subs: Subscription[] = [];

  authService = inject(AuthService);
  carrinhoService = inject(CarrinhoService);

  constructor() {
    this.subs.push(
      this.authService.currentUsuario.subscribe({
        next: usuario => {
          this.usuario = usuario;
        },
      })
    );

    if (!this.usuario) {
      this.usuario = this.authService.getUsuario();
    }
    this.subs.push(
      this.carrinhoService._carrinhoToggle.subscribe({
        next: (status: any) => {
          this.carrinhoStatus = !this.carrinhoStatus;
          if (status) {
            document
              .querySelector('body')
              ?.classList.add('body-overflow-hidden');
          } else {
            document
              .querySelector('body')
              ?.classList.remove('body-overflow-hidden');
          }
        },
      })
    );

    this.subs.push(
      this.carrinhoService.getDadosCarrinho().subscribe({
        next: (dados: any) => {
          this.carrinho = dados;
        },
      })
    );

    this.subs.push(
      this.carrinhoService.atualizarCarrinho$.subscribe({
        next: dados => {
          if (dados) {
            this.carregarDadosCarrinho();
          }
        },
      })
    );

    if (this.usuario?.id) {
      this.carregarDadosCarrinho();
    }
  }

  carregarDadosCarrinho() {
    this.subs.push(
      this.carrinhoService.fetchDadosCarrinho().subscribe({
        next: dados => {
          this.carrinhoService.setDadosCarrinho(dados);
        },
      })
    );
  }

  adicionarProduto(produto: any) {
    this.carrinhoService
      .adicionarProdutoCarrinho({
        produto_id: produto.produto_id,
        quantidade: 1,
      })
      .subscribe({
        next: dados => {
          this.carrinhoService.setDadosCarrinho(dados);
        },
      });
  }

  removerProduto(produto: any, isTudo?: boolean) {
    this.subs.push(
      this.carrinhoService
        .removerProdutoCarrinho({ ...produto, isTudo })
        .subscribe({
          next: dados => {
            this.carrinhoService.setDadosCarrinho(dados);
          },
        })
    );
  }

  closeCarrinho() {
    this.carrinhoService.hide();
  }

  ngOnDestroy(): void {
    if (this.subs.length) {
      this.subs.forEach((sub: Subscription) => {
        sub.unsubscribe();
      });
    }
  }
}
