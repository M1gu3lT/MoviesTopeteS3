// Importaciones necesarias
import { CommonModule } from '@angular/common'; // Módulo común de Angular
import { Component, OnInit } from '@angular/core'; // Componentes y ciclo de vida
import { RouterModule } from '@angular/router'; // Módulo de enrutamiento
import { Router } from '@angular/router'; // Clase Router para navegación programática

@Component({
  selector: 'app-nav-bar', // Selector para identificar el componente en el HTML
  imports: [CommonModule, RouterModule], // Módulos que se importan en este componente
  templateUrl: './nav-bar.component.html', // Ruta del archivo de plantilla HTML
  styleUrl: './nav-bar.component.scss' // Ruta del archivo de estilos SCSS
})
export class NavBarComponent implements OnInit {

  // Declaración de las opciones de menú por defecto y enlaces de acceso
  mainMenu: {
    defaultOptions: Array<any>, accessLink: Array<any>
  } = { defaultOptions: [], accessLink: [] };

  // Opciones personalizadas que se mostrarán en el menú
  customOptions: Array<any> = [];

  // Inyección del servicio Router para realizar navegación en el componente
  constructor(private router: Router) { }

  // Método del ciclo de vida de Angular que se ejecuta cuando el componente se inicializa
  ngOnInit(): void {
    // Definición de las opciones por defecto del menú principal
    this.mainMenu.defaultOptions = [
      {
        name: 'Home', // Nombre del menú
        icon: 'uil uil-estate', // Icono de la opción (utiliza la librería de iconos Uicons)
        router: ['/'] // Ruta a la que navegará cuando se haga clic en esta opción
      },
      {
        name: 'Buscar',
        icon: 'uil uil-search',
        router: ['/', 'movies'] // Ruta a la que navegará para buscar películas
      },
      {
        name: 'Favoritas',
        icon: 'uil-heart-medical',
        router: ['/', 'favorite'], // Ruta a la que navegará para mostrar las películas favoritas
        query: { hola: 'mundo' } // Parámetros de consulta para la URL
      }
    ];

    // Definición de los enlaces de acceso rápido en el menú
    this.mainMenu.accessLink = [
      {
        name: 'Series',
        icon: 'uil uil-film',
        router: ['/', 'series'] // Ruta para ver series
      },
      {
        name: 'Peliculas',
        icon: 'uil uil-video',
        router: ['/', 'peliculas'] // Ruta para ver películas
      }
    ];

    // Definición de las opciones personalizadas del menú
    this.customOptions = [
      {
        name: 'Mi lista º1',
        router: ['/'] // Ruta para acceder a la primera lista personalizada
      },
      {
        name: 'Mi lista º2',
        router: ['/'] // Ruta para acceder a la segunda lista personalizada
      },
      {
        name: 'Mi lista º3',
        router: ['/'] // Ruta para acceder a la tercera lista personalizada
      },
      {
        name: 'Mi lista º4',
        router: ['/'] // Ruta para acceder a la cuarta lista personalizada
      }
    ];
  }

  // Método para realizar la navegación programática
  goTo($event: any): void {
    // Uso del servicio Router para navegar a la ruta '/favorite' con parámetros de consulta
    this.router.navigate(['/', 'favorite'], {
      queryParams: { // Parámetros de consulta a agregar a la URL
        key1: 'value1',
        key2: 'value2',
        key3: 'value3',
      }
    });
    
    // Imprime el evento en consola (para depuración)
    console.log($event);
  }
}
