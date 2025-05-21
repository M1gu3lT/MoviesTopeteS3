import { NgModule } from '@angular/core';  // Importa el decorador NgModule de Angular
import { RouterModule, Routes } from '@angular/router';  // Importa RouterModule y Routes para configurar las rutas de la aplicación
import { EmployeeDataComponent } from '@modules/employee-data/employee-data.component';

// Definición de las rutas específicas para el módulo Home
const routes: Routes = [
  {
    path: 'movies',  // Ruta para acceder al módulo de Movies
    loadChildren: () => import('@modules/movies/movies.module').then(m => m.MoviesModule)  // Carga el módulo Movies de forma perezosa
  },
  {
    path: 'favorite',  // Ruta para acceder al módulo de Favoritos
    loadChildren: () => import('@modules/favorite/favorite.module').then(m => m.FavoriteModule)  // Carga el módulo Favorite de forma perezosa
  },
  {
    path: 'media',  // Ruta para acceder al módulo de Medios
    loadChildren: () => import('@modules/media/media.module').then(m => m.MediaModule)  // Carga el módulo Media de forma perezosa
  },
  {
    path: 'series',  // Ruta para acceder al módulo de Series
    loadChildren: () => import('@modules/series/series.module').then(m => m.SeriesModule)  // Carga el módulo Series de forma perezosa
  },
  {
    path: 'peliculas',  // Ruta para acceder al módulo de Películas
    loadChildren: () => import('@modules/peliculas/peliculas.module').then(m => m.PeliculasModule)  // Carga el módulo Peliculas de forma perezosa
  },
  {
    path: 'employee-data',  // Ruta para accedera employee (prueba de conexion DB)
    component: EmployeeDataComponent  
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],  // Configura las rutas para este módulo usando RouterModule.forChild
  exports: [RouterModule]  // Exporta RouterModule para que las rutas sean accesibles en otros módulos
})
export class HomeRoutingModule { }  // Define el módulo de enrutamiento HomeRoutingModule
