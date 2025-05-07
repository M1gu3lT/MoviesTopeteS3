// Se importan los módulos necesarios para configurar rutas en Angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Se trae el componente que se mostrará en esta sección
import { MoviesPagesComponent } from './pages/movies-pages/movies-pages.component';

// Se define la ruta principal de este módulo
const routes: Routes = [
  {
    path: '', // Ruta base
    component: MoviesPagesComponent, // Componente que se carga en esta ruta
    // outlet: 'child' // Esto está comentado, pero sería para usar un outlet secundario
  }
];

// Se configura el módulo de rutas para esta parte de la app
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
