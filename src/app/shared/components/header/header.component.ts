import { AuthService } from './../../../ecommerce/pages/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { CarrinhoService } from '../carrinho/carrinho.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  usuario: any;

  constructor(
    private carrinhoService: CarrinhoService,
    private authService: AuthService
  ) {
    this.authService.currentUsuario.subscribe(usuario => {
      this.usuario = usuario;
    });

    if (!this.usuario) {
      const user = this.authService.decodePayloadJWT();
      this.authService.changeUsuario(user?.user);
    }
  }

  logout() {
    this.authService.logout();
    this.usuario = false;
  }

  openCarrinho() {
    this.carrinhoService.show();
  }
}
