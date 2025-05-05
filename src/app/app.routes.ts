import { Routes } from '@angular/router';
import { HomePagesComponent } from '@modules/home/pages/home-pages/home-pages.component';

export const routes: Routes = [
    {
        path:'auth',
        loadChildren:()=> import(`./modules/auth/auth.module`).then(m => m.AuthModule)
    },
    {
        path:'',//localhost:400
        component: HomePagesComponent,
        loadChildren:()=> import(`./modules/home/home.module`).then(m => m.HomeModule)
    }
];
