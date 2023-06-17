import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { CarrinhoService } from './carrinho.service';
import { fadeAnimation, toggleCarrinho } from '../../animations';
import { AuthService } from 'src/app/ecommerce/pages/auth/auth.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css'],
  animations: [fadeAnimation, toggleCarrinho],
})
export class CarrinhoComponent implements OnInit {
  carrinhoStatus: boolean = false;
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

    if (this.usuario?.id) {
      this.subs.push(
        this.carrinhoService.getDadosCarrinho(this.usuario.id).subscribe({
          next: (dados: any) => {
            this.carrinhoService.setDadosCarrinho(dados);
          },
        })
      );
    }

    this.subs.push(
      this.carrinhoService._carrinhoDados.subscribe({
        next: (dados: any) => {
          this.dadosCarrinho = dados;
        },
      })
    );
  }

  ngOnInit() {}

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
