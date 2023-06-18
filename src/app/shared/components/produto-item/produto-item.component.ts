import { Component, Input, OnInit } from '@angular/core';
import { fade, routeAnimations } from '../../animations';
import { CarrinhoService } from '../carrinho/carrinho.service';

@Component({
  selector: 'app-produto-item',
  templateUrl: './produto-item.component.html',
  styleUrls: ['./produto-item.component.scss'],
  animations: [routeAnimations, fade],
})
export class ProdutoItemComponent implements OnInit {
  @Input('dados') produto: any;

  constructor(private carrinhoService: CarrinhoService) {}

  ngOnInit(): void {}

  adicionarItemCarrinho() {
    this.carrinhoService
      .adicionarProdutoCarrinho({ produto_id: this.produto.id, quantidade: 1 })
      .subscribe({
        next: dados => {
          console.log(dados);
          this.carrinhoService.setDadosCarrinho(dados);
        },
      });
  }
}
