import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MEdiaPagesComponent } from './pages/media-pages/media-pages.component';

const routes: Routes = [
  {
      path:'',
      component: MEdiaPagesComponent,
      //outlet:'child'
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MediaRoutingModule { }



