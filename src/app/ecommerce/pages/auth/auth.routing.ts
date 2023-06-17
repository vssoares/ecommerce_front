import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    data: {
      animation: 'LoginComponent',
    },
  },
  {
    path: 'cadastro',
    component: CadastroComponent,
    data: {
      animation: 'CadastroComponent',
    },
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  providers: [],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
