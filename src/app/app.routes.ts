import { Routes } from '@angular/router';  // Importa la interfaz Routes para definir las rutas en Angular
import { HomePagesComponent } from '@modules/home/pages/home-pages/home-pages.component';  // Importa el componente HomePagesComponent

// Definición de las rutas de la aplicación
export const routes: Routes = [
    {
        path: 'auth',  // Ruta para la autenticación
        loadChildren: () => import(`./modules/auth/auth.module`).then(m => m.AuthModule)  // Carga el módulo de autenticación de forma perezosa (lazy loading)
    },
    {
        path: '',  // Ruta raíz de la aplicación (localhost:400)
        component: HomePagesComponent,  // Muestra el componente HomePagesComponent
        loadChildren: () => import(`./modules/home/home.module`).then(m => m.HomeModule)  // Carga el módulo de inicio (home) de forma perezosa
    }
];
