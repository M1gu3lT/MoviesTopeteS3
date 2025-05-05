import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeliculasPagesComponent } from './pages/peliculas-pages/peliculas-pages.component';

const routes: Routes = [
  {
      path:'',
      component: PeliculasPagesComponent
      //outlet:'child'
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeliculasRoutingModule { }
