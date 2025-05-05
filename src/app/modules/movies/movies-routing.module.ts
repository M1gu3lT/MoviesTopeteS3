import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesPagesComponent } from './pages/movies-pages/movies-pages.component';

const routes: Routes = [
  {
    path:'',
    component: MoviesPagesComponent,
    //outlet:'child'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
