import { Subscription } from 'rxjs';
import { AuthService } from './../../../ecommerce/pages/auth/auth.service';
import { Component } from '@angular/core';
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

  constructor(
    private carrinhoService: CarrinhoService,
    private authService: AuthService
  ) {
    this.authService.currentUsuario.subscribe(usuario => {
      this.usuario = usuario;
    });

    if (!this.usuario) {
      const user = this.authService.getUsuario();
      this.authService.changeUsuario(user?.user);
    }

    this.subs.push(
      this.carrinhoService._carrinhoDados.subscribe({
        next: (dados: any) => {
          this.qtdCarrinho = dados?.itens.length;
        },
      })
    );
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
