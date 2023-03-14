import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarrinhoComponent } from './carrinho.component';

const routes: Routes = [
  {
    path: "",
    component: CarrinhoComponent,
    data: {
      animation: 'CarrinhoComponent',
    },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  providers: [],
  exports: [RouterModule]
})
export class CarrinhoRoutingModule { }
