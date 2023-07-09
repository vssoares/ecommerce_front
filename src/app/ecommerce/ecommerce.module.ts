import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EcommerceComponent } from './ecommerce.component';
import { HeaderComponent } from '../shared/components/header/header.component';
import { CarrinhoComponent } from '../shared/components/carrinho/carrinho.component';
import { EcommerceRoutingModule } from './ecommerce.routing';
import { HomeComponent } from './pages/home/home.component';
import { ProdutoComponent } from './pages/produto/produto.component';
import { ProdutoItemComponent } from '../shared/components/produto-item/produto-item.component';
import { IconComponent } from '../shared/components/icon/icon.component';

@NgModule({
  declarations: [
    EcommerceComponent,
    CarrinhoComponent,
    HomeComponent,
    ProdutoComponent,
    ProdutoItemComponent,
  ],
  exports: [ProdutoComponent, HomeComponent, ProdutoItemComponent],
  imports: [
    CommonModule,
    EcommerceRoutingModule,
    IconComponent,
    HeaderComponent,
  ],
})
export class EcommerceModule {}
