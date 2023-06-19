import { Subscription } from 'rxjs';
import { Component, OnDestroy } from '@angular/core';
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
  carrinhoStatus = false;
  dadosCarrinho: any;
  usuario: any;

  subs: Subscription[] = [];

  constructor(
    private carrinhoService: CarrinhoService,
    private authService: AuthService
  ) {
    this.subs.push(
      this.authService.currentUsuario.subscribe({
        next: usuario => {
          this.usuario = usuario;
        },
      })
    );

    this.subs.push(
      this.carrinhoService._carrinhoToggle.subscribe({
        next: (status: any) => {
          this.carrinhoStatus = !this.carrinhoStatus;
          if (status) {
            document.querySelector('html')?.classList.add('modal-open');
          } else {
            document.querySelector('html')?.classList.remove('modal-open');
          }
        },
      })
    );

    this.subs.push(
      this.carrinhoService._carrinhoDados.subscribe({
        next: dados => {
          this.dadosCarrinho = dados;
        },
      })
    );

    this.subs.push(
      this.carrinhoService._atualizarCarrinho.subscribe({
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
      this.carrinhoService.getDadosCarrinho().subscribe({
        next: dados => {
          this.carrinhoService.setDadosCarrinho(dados);
        },
      })
    );
  }

  removerProduto(produto: any) {
    this.subs.push(
      this.carrinhoService.removerProdutoCarrinho(produto).subscribe({
        next: dados => {
          // Remove o item do carrinho após um tempo para permitir a execução da animação
          setTimeout(() => {
            this.carrinhoService.setDadosCarrinho(dados);
          }, 400);
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
