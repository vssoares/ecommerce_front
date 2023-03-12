import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { fadeInOutAnimation } from 'src/app/shared/animations';
import { HomeResolve } from './home.resolve';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    data: {
      animation: 'HomeComponent',
      resolve: {
        users: HomeResolve
      }
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  providers: [HomeResolve],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
