import { Component, Input } from '@angular/core';
import {
  fade,
  fadeAnimation,
  inOutAnimation,
  routeAnimations,
} from '../../animations';
import { CarrinhoService } from '../carrinho/carrinho.service';

@Component({
  selector: 'app-produto-item',
  templateUrl: './produto-item.component.html',
  styleUrls: ['./produto-item.component.scss'],
  animations: [routeAnimations, fade, fadeAnimation, inOutAnimation],
})
export class ProdutoItemComponent {
  @Input() produto: any;
  adicionandoCarrinho = false;

  constructor(private carrinhoService: CarrinhoService) {}

  adicionarItemCarrinho() {
    this.adicionandoCarrinho = true;
    this.carrinhoService
      .adicionarProdutoCarrinho({
        produto_id: this.produto.id,
        quantidade: 1,
      })
      .subscribe({
        next: dados => {
          this.carrinhoService.setDadosCarrinho(dados);
          this.adicionandoCarrinho = false;
          this.carrinhoService.show();
        },
        error: () => {
          this.adicionandoCarrinho = false;
        },
      });
  }
}
