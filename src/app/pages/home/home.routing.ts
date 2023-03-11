import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { fadeInOutAnimation } from 'src/app/shared/animations';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    data: {
      animation: 'HomeComponent'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
