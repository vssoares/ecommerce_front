import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutoComponent } from './produto.component';
import { ProdutoRoutingModule } from './produto.routing';

@NgModule({
  declarations: [ProdutoComponent],
  imports: [CommonModule, ProdutoRoutingModule],
})
export class ProdutoModule {}
