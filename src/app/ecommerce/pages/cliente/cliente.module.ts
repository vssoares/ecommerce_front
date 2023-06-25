import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteComponent } from './cliente.component';
import { ClienteRoutingModule } from './cliente.routing';
import { MenuClienteComponent } from './components/menu-cliente/menu-cliente.component';
import { DadosBasicosComponent } from './dados-basicos/dados-basicos.component';
import { IconComponent } from 'src/app/shared/components/icon/icon.component';

@NgModule({
  declarations: [ClienteComponent, MenuClienteComponent, DadosBasicosComponent],
  imports: [CommonModule, ClienteRoutingModule, IconComponent],
})
export class ClienteModule {}
