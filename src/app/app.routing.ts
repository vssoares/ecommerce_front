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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
