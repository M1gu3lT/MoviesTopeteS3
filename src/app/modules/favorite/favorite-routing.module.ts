import { NgModule } from '@angular/core';  // Importa el decorador NgModule de Angular
import { RouterModule, Routes } from '@angular/router';  // Importa RouterModule y Routes para configurar las rutas del módulo
import { FavoritePagesComponent } from './pages/favorite-pages/favorite-pages.component';

// Definición de las rutas para el módulo de Favoritos
const routes: Routes = [
  {
    path: '',  // Ruta raíz del módulo de favoritos
    component: FavoritePagesComponent  // Asocia la ruta con el componente FavoritePagesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],  // Configura las rutas para este módulo usando RouterModule.forChild
  exports: [RouterModule]  // Exporta RouterModule para que las rutas sean accesibles en otros módulos
})
export class FavoriteRoutingModule { }  // Define el módulo de enrutamiento para el módulo de Favoritos
