import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EcommerceComponent } from './ecommerce.component';
import { HomeComponent } from './pages/home/home.component';
import { ProdutoComponent } from './pages/produto/produto.component';

const routes: Routes = [
  {
    path: '',
    component: EcommerceComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'auth',
        loadChildren: () =>
          import('./pages/auth/auth.module').then(m => m.AuthModule),
      },
      {
        path: 'produto/:id',
        component: ProdutoComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  providers: [],
  exports: [RouterModule],
})
export class EcommerceRoutingModule {}
