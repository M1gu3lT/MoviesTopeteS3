import { NgModule } from '@angular/core'; 
// Importa el decorador NgModule, que se utiliza para definir un módulo en Angular.

import { RouterModule, Routes } from '@angular/router'; 
// Importa RouterModule para configurar las rutas y Routes que define las rutas en el módulo.

import { MEdiaPagesComponent } from './pages/media-pages/media-pages.component'; 
// Importa el componente MEdiaPagesComponent, que será utilizado en las rutas.

const routes: Routes = [
  {
    path: '', 
    // Define la ruta raíz (cuando se navega a este módulo sin una subruta específica).

    component: MEdiaPagesComponent, 
    // Establece que cuando la ruta se accede, se renderiza el componente MEdiaPagesComponent.

    //outlet: 'child' 
    // Comentado, ya que indicaría que la ruta se debe renderizar en un outlet de ruta secundaria (no es necesario en este caso).
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)], 
  // Usa RouterModule.forChild para definir las rutas del módulo en lugar de forRoot, ya que es un módulo hijo que se carga de manera perezosa.

  exports: [RouterModule] 
  // Exporta RouterModule para que se puedan usar las rutas definidas en otros módulos.
})
export class MediaRoutingModule { }
// Define el módulo MediaRoutingModule que incluye las rutas para el módulo de medios.
