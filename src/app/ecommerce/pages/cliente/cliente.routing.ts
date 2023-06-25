import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClienteComponent } from './cliente.component';
import { DadosBasicosComponent } from './dados-basicos/dados-basicos.component';
import { ResumoComponent } from './resumo/resumo.component';
import { DadosBasicosResolve } from './dados-basicos/dados-basicos.resolver';

const routes: Routes = [
  {
    path: '',
    component: ClienteComponent,
    children: [
      {
        path: 'resumo',
        component: ResumoComponent,
      },
      {
        path: 'dados-basicos',
        component: DadosBasicosComponent,
        resolve: {
          dados: DadosBasicosResolve,
        },
      },
      {
        path: '',
        redirectTo: 'dados-basicos',
        pathMatch: 'full',
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  providers: [],
  exports: [RouterModule],
})
export class ClienteRoutingModule {}
