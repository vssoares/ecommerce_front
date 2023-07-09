import { Subscription } from 'rxjs';
import { AuthService } from './../../../ecommerce/pages/auth/auth.service';
import { Component, inject } from '@angular/core';
import { CarrinhoService } from '../carrinho/carrinho.service';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { IconComponent } from '../icon/icon.component';
import { Router, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    MatMenuModule,
    IconComponent,
    RouterModule,
    MatIconModule,
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  usuario: any;
  subs: Subscription[] = [];

  qtdCarrinho = 0;

  authService = inject(AuthService);
  carrinhoService = inject(CarrinhoService);
  route = inject(Router);

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
        if (!dados?.itens?.length) {
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
    this.route.navigate(['/']);
    this.carrinhoService.setDadosCarrinho({});
  }

  openCarrinho() {
    this.carrinhoService.show();
  }
}
