import { Subscription } from 'rxjs';
import { Component, OnDestroy } from '@angular/core';
import { CarrinhoService } from './carrinho.service';
import { fadeAnimation, toggleCarrinho } from '../../animations';
import { AuthService } from 'src/app/ecommerce/pages/auth/auth.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css'],
  animations: [fadeAnimation, toggleCarrinho],
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
            document.querySelector('body')?.classList.add('overflow-hidden');
          } else {
            document.querySelector('body')?.classList.remove('overflow-hidden');
          }
        },
      })
    );

    this.subs.push(
      this.carrinhoService._carrinhoDados.subscribe({
        next: (dados: any) => {
          this.dadosCarrinho = dados;
        },
      })
    );

    this.subs.push(
      this.carrinhoService._atualizarCarrinho.subscribe({
        next: (dados: any) => {
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

  closeCarrinho() {
    this.carrinhoService.hide();
  }

  carregarDadosCarrinho() {
    this.subs.push(
      this.carrinhoService.getDadosCarrinho().subscribe({
        next: (dados: any) => {
          this.carrinhoService.setDadosCarrinho(dados);
        },
      })
    );
  }

  ngOnDestroy(): void {
    if (this.subs.length) {
      this.subs.forEach((sub: Subscription) => {
        sub.unsubscribe();
      });
    }
  }
}
