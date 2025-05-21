import { NgModule } from '@angular/core';  // Importa el decorador NgModule de Angular
import { RouterModule, Routes } from '@angular/router';  // Importa RouterModule y Routes para configurar las rutas del módulo
import { LoginPagesComponent } from './pages/login-pages/login-pages.component';  // Importa el componente LoginPagesComponent
import { AdminComponent } from './admin/admin.component';

// Definición de las rutas para el módulo de autenticación (Auth)
const routes: Routes = [
  {
    path: 'login',  // Ruta para la página de inicio de sesión (http://localhost:4200/auth/login)
    component: LoginPagesComponent  // Asocia la ruta con el componente LoginPagesComponent
  },
  {
    path: 'admin',  // Ruta de redirección en caso de rutas no encontradas
    component: AdminComponent // Redirige cualquier otra ruta no definida a la página de login
  },
  {
    path: '**',  // Ruta de redirección en caso de rutas no encontradas
    redirectTo: '/auth/login'  // Redirige cualquier otra ruta no definida a la página de login
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],  // Configura las rutas para este módulo usando RouterModule.forChild
  exports: [RouterModule]  // Exporta RouterModule para que las rutas sean accesibles en otros módulos
})
export class AuthRoutingModule { }  // Define el módulo de enrutamiento para el módulo de autenticación
