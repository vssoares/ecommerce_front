import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home.routing';
import { ProdutoItemComponent } from 'src/app/shared/components/produto-item/produto-item.component';
import { HomeComponent } from './home.component';
import { HomeResolve } from './home.resolve';



@NgModule({
  declarations: [
    HomeComponent,
    ProdutoItemComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  providers: [
    
  ]
})
export class HomeModule { }
