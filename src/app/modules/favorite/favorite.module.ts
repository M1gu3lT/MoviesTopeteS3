import { NgModule } from '@angular/core';  // Importa el decorador NgModule de Angular
import { CommonModule } from '@angular/common';  // Importa CommonModule, necesario para el uso de directivas y componentes comunes

import { FavoriteRoutingModule } from './favorite-routing.module';  // Importa el módulo de rutas específicas para el módulo de favoritos
import { SharedModule } from '@shared/shared.module';  // Importa el módulo compartido que contiene componentes, directivas y pipes reutilizables

@NgModule({
  declarations: [],  // No se declara ningún componente, ya que los componentes ya están declarados en el módulo compartido
  imports: [
    CommonModule,  // Importa el módulo común de Angular
    FavoriteRoutingModule,  // Importa el módulo de rutas de favoritos
    SharedModule  // Importa el módulo compartido que contiene componentes y funcionalidades reutilizables
  ]
})
export class FavoriteModule { }  // Define el módulo de favoritos que configura las rutas y dependencias específicas para esta sección
