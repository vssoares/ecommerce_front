import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarrinhoComponent } from './carrinho.component';
import { CarrinhoRoutingModule } from './carrinho.routing';

@NgModule({
  imports: [
    CommonModule,
    CarrinhoRoutingModule
  ],
  declarations: [CarrinhoComponent]
})
export class CarrinhoModule { }
