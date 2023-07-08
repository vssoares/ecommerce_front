import { Subscription } from 'rxjs';
import { AuthService } from './../../../ecommerce/pages/auth/auth.service';
import { Component, inject } from '@angular/core';
import { CarrinhoService } from '../carrinho/carrinho.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  usuario: any;
  subs: Subscription[] = [];

  qtdCarrinho = 0;

  authService = inject(AuthService);
  carrinhoService = inject(CarrinhoService);

  constructor() {
    this.authService.currentUsuario.subscribe({
      next: usuario => {
        this.usuario = usuario;
      },
    });

    if (!this.usuario) {
      this.usuario = this.authService.getUsuario();
    }

    this.carrinhoService.getDadosCarrinho().subscribe({
      next: (dados: any) => {
        if (!dados) {
          this.qtdCarrinho = 0;
          return;
        }
        this.qtdCarrinho = dados?.itens.length;
      },
    });
  }

  logout() {
    this.authService.logout();
    this.usuario = false;
    this.carrinhoService.setDadosCarrinho({});
  }

  openCarrinho() {
    this.carrinhoService.show();
  }
}
