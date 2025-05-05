import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeriesPagesComponent } from './pages/series-pages/series-pages.component';

const routes: Routes = [
  {
      path:'',
      component: SeriesPagesComponent,
      //outlet:'child'
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeriesRoutingModule { }
