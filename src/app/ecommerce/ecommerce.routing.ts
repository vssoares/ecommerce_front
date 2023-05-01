import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EcommerceComponent } from './ecommerce.component';

const routes: Routes = [
  {
    path: "",
    component: EcommerceComponent,
    data: {
      animation: 'EcommerceComponent',
    },
    children: [
      {
        path: "",
        loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
        data: {
          animation: "HomeComponent"
        }
      },
      {
        path: "auth",
        loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule),
        data: {
          animation: "AuthComponent"
        }
      },
      {
        path: "produto",
        loadChildren: () => import('./pages/produto/produto.module').then(m => m.ProdutoModule),
        data: {
          animation: "ProdutoComponent"
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  providers: [],
  exports: [RouterModule]
})
export class EcommerceRoutingModule { }
