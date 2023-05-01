import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProdutoService } from './produto.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss']
})
export class ProdutoComponent {

  id_produto: number;
  produto: any;

  subs: Subscription[] = []

  constructor(
    private route: ActivatedRoute,
    private service: ProdutoService
  ) {
    this.id_produto = 0;
    this.route.params.subscribe(params => {
      this.id_produto = params['id'];
      this.carregarProdutos(this.id_produto)
    });
  }

  ngOnInit(): void {
  }

  carregarProdutos(id: number) {
    this.subs.push(this.service.getProduto(id).subscribe((dados) => {
      this.produto = dados
    }))
  }


  ngOnDestroy(): void {
    this.subs.map(sub => {
      sub.unsubscribe();
    })
  }

  prepareRouteTransition(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }


}
