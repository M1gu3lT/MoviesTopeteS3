import { Component, OnInit } from '@angular/core';  // Importa los módulos necesarios para el componente y el ciclo de vida OnInit
import { SectionGenericComponent } from "../../../../shared/components/section-generic/section-generic.component";  // Importa el componente para mostrar secciones genéricas
import * as dataRaw from '../../../../data/movies.json';  // Importa el archivo JSON que contiene la lista de películas
import { MoviesModel } from '@core/models/movies.model';  // Importa el modelo de datos de película

@Component({
  selector: 'app-movies-pages',  // Define el selector del componente
  imports: [SectionGenericComponent],  // Declara los componentes que se utilizarán dentro de este componente
  templateUrl: './movies-pages.component.html',  // Ruta al archivo HTML para el diseño de la página
  styleUrl: './movies-pages.component.scss'  // Ruta al archivo de estilos SCSS para este componente
})
export class MoviesPagesComponent implements OnInit{
  // Array que almacenará las películas a mostrar
  mockMoviesList: Array<MoviesModel> = []; 

  constructor(){}

  // Método que se ejecuta al inicializar el componente
  ngOnInit(): void {
    // Importa y asigna los datos de las películas desde el archivo JSON a la lista mockMoviesList
    const { data }: any = (dataRaw as any).default;
    this.mockMoviesList = data;  // Asigna las películas al array mockMoviesList
  }
}
