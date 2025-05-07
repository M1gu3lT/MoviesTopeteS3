import { CommonModule } from '@angular/common'; // Importa el módulo común de Angular
import { Component, Input, OnInit } from '@angular/core'; // Importa decoradores y tipos de Angular
import { MoviesModel } from '@core/models/movies.model'; // Importa el modelo de datos de las películas
import { CardPlayerComponent } from "../card-player/card-player.component"; // Importa el componente para mostrar las películas

@Component({
  selector: 'app-section-generic', // Define el selector del componente
  imports: [CommonModule, CardPlayerComponent], // Importa módulos necesarios
  templateUrl: './section-generic.component.html', // Define la plantilla HTML del componente
  styleUrl: './section-generic.component.scss' // Define los estilos SCSS del componente
})
export class SectionGenericComponent implements OnInit {
  // Propiedades de entrada que permiten pasar datos al componente desde su padre
  @Input() title: string = ''; // Título de la sección
  @Input() mode: 'small' | 'big' = 'big'; // Define el modo de la presentación ('small' o 'big')
  @Input() dataMovies: Array<MoviesModel> = []; // Lista de películas que se pasará al componente

  constructor() {}

  ngOnInit(): void {
    // Método del ciclo de vida de Angular que se ejecuta al inicializar el componente
  }
}
