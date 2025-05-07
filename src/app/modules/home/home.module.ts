import { NgModule } from '@angular/core';  // Importa el decorador NgModule de Angular
import { CommonModule } from '@angular/common';  // Importa el módulo común que contiene las directivas comunes de Angular como ngIf, ngFor, etc.
import { HomeRoutingModule } from './home-routing.module';  // Importa el módulo de enrutamiento específico de Home

@NgModule({
  declarations: [],  // Aquí se declaran los componentes, directivas o pipes del módulo (en este caso está vacío)
  imports: [
    CommonModule,  // Importa CommonModule para usar las directivas comunes de Angular
    HomeRoutingModule  // Importa el módulo de rutas para configurar las rutas específicas de Home
  ]
})
export class HomeModule { }  // Define el módulo HomeModule que puede ser cargado perezosamente o utilizado en otros módulos
