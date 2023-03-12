import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss']
})
export class ProdutoComponent {

  id_produto: number

  constructor(
    private route: ActivatedRoute,
  ) {
    this.id_produto = 0;
    this.route.params.subscribe(params => {
      this.id_produto = params['id'];
    });
  }

  prepareRouteTransition(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }


}
