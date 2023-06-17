import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EcommerceComponent } from './ecommerce.component';
import { HeaderComponent } from '../shared/components/header/header.component';
import { CarrinhoComponent } from '../shared/components/carrinho/carrinho.component';
import { EcommerceRoutingModule } from './ecommerce.routing';

@NgModule({
  declarations: [EcommerceComponent, HeaderComponent, CarrinhoComponent],
  imports: [CommonModule, EcommerceRoutingModule],
})
export class EcommerceModule {}
