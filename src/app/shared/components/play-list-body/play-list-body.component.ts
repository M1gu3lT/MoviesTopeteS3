// Importamos los módulos necesarios para el componente
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
// Importamos los datos JSON de las películas
import * as dataRaw from '../../../data/movies.json';
// Importamos el modelo de datos para las películas
import { MoviesModel } from '@core/models/movies.model';
// Importamos la tubería para ordenar la lista
import { OrderListPipe } from "../../pipe/order-list.pipe";
// Importamos una directiva personalizada para manejar imágenes rotas
import { ImgBrokenDirective } from '@shared/directives/img-broken.directive';

// Decorador del componente que especifica el selector, las dependencias de módulos, la plantilla HTML y el archivo de estilo SCSS
@Component({
  selector: 'app-play-list-body',  // Selector para utilizar el componente en las plantillas
  imports: [CommonModule, OrderListPipe, ImgBrokenDirective],  // Módulos necesarios para el componente
  templateUrl: './play-list-body.component.html',  // Ruta de la plantilla HTML
  styleUrl: './play-list-body.component.scss'  // Ruta del archivo de estilos SCSS
})

// Definimos la clase del componente
export class PlayListBodyComponent implements OnInit {
  // Inicializamos las propiedades del componente
  movies: MoviesModel[] = [];  // Array para almacenar las películas
  optionSort: { property: string | null, order: string } = { property: null, order: 'asc' };  // Parámetros de ordenamiento

  // Constructor del componente
  constructor() {}

  // Método ngOnInit para inicializar el componente
  ngOnInit(): void {
    // Importamos los datos desde el archivo JSON
    const { data }: any = (dataRaw as any).default;
    this.movies = data;  // Asignamos los datos de las películas al array de películas
  }

  // Método para cambiar el orden de la lista de películas según la propiedad seleccionada
  changeSort(property: string): void {
    // Extraemos el orden actual
    const { order } = this.optionSort;
    // Cambiamos el orden y la propiedad de la lista
    this.optionSort = {
      property,  // Actualizamos la propiedad que se está utilizando para ordenar
      order: order === 'asc' ? 'desc' : 'asc'  // Si el orden es ascendente, lo cambiamos a descendente y viceversa
    };
    console.log(this.optionSort);  // Imprimimos la configuración de orden en la consola para depuración
  }
}
