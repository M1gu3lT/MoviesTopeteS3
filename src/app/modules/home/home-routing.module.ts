import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'movies',
    loadChildren:()=>import('@modules/movies/movies.module').then(m => m.MoviesModule)
  },
  {
    path:'favorite',
    loadChildren:()=>import('@modules/favorite/favorite.module').then(m => m.FavoriteModule)
  },
  {
      path:'media',
      loadChildren:()=> import(`@modules/media/media.module`).then(m => m.MediaModule)
  },
  {
      path:'series',
      loadChildren:()=> import(`@modules/series/series.module`).then(m => m.SeriesModule)
  },
  {
      path:'peliculas',
      loadChildren:()=> import(`@modules/peliculas/peliculas.module`).then(m => m.PeliculasModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
