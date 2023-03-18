import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { AuthRoutingModule } from './auth.routing';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,

    MatFormFieldModule,
    MatInputModule,
    MatIconModule
  ],
  declarations: [
    AuthComponent,
    LoginComponent,
    CadastroComponent
  ]
})
export class AuthModule { }
