// Se importan los módulos necesarios para definir rutas
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Componente principal de la sección de películas
import { PeliculasPagesComponent } from './pages/peliculas-pages/peliculas-pages.component';

// Ruta base que muestra el componente de películas
const routes: Routes = [
  {
    path: '', // Ruta vacía = ruta raíz del módulo
    component: PeliculasPagesComponent
    // outlet: 'child' // Comentado, sería para un outlet secundario
  }
];

// Configuración del módulo de rutas específico para "películas"
@NgModule({
  imports: [RouterModule.forChild(routes)], // Se registran como rutas hijas
  exports: [RouterModule] // Se exporta para que otros módulos puedan usarlo
})
export class PeliculasRoutingModule { }
