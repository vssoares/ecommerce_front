import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: "",
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
    data: {
      animation: "HomeComponent"
    }
  },
  {
    path: "produto",
    loadChildren: () => import('./pages/produto/produto.module').then(m => m.ProdutoModule),
    data: {
      animation: "ProdutoComponent"
    }
  },
  {
    path: "carrinho",
    loadChildren: () => import('./pages/carrinho/carrinho.module').then(m => m.CarrinhoModule),
    data: {
      animation: "CarrinhoComponent"
    }
  },
  {
    path: "auth",
    loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule),
    data: {
      animation: "AuthComponent"
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
