// Importamos módulos y servicios necesarios
import { CommonModule } from '@angular/common'; // Módulo común de Angular
import { Component, Input, OnInit } from '@angular/core'; // Decorador y ciclo de vida de Angular
import { MoviesModel } from '@core/models/movies.model'; // Modelo de películas
import { ImgBrokenDirective } from '@shared/directives/img-broken.directive'; // Directiva personalizada para manejar imágenes rotas
import { MultimediaService } from '@shared/services/multimedia.service'; // Servicio para manejar la multimedia (como el reproductor)

@Component({
  selector: 'app-card-player', // Selector para usar este componente en HTML
  imports: [CommonModule, ImgBrokenDirective], // Módulos que se usarán en el componente
  templateUrl: './card-player.component.html', // Ruta del archivo HTML asociado
  styleUrls: ['./card-player.component.scss'] // Ruta del archivo SCSS asociado
})
export class CardPlayerComponent implements OnInit {

  // Input para recibir el modo de visualización ('small' o 'big') desde el componente padre
  @Input() mode: 'small' | 'big' = 'small'; // Por defecto es 'small'

  // Input para recibir los datos de la película desde el componente padre
  @Input() movie: MoviesModel = { 
    _id: 0, 
    title: '', 
    poster: '', 
    trailerUrl: '', 
    director: '' 
  }; // Valores predeterminados si no se pasa la película

  // Método para alternar el estado de favorito de la película
  toggleFavorite(movie: any): void {
    movie.favorited = !movie.favorited; // Cambia el estado de favorito (de true a false o viceversa)
  }

  // Método para ocultar la película (cambia su visibilidad)
  hideMovie(movie: any): void {
    movie.hidden = true; // Marca la película como oculta
  }

  // Inyección del servicio multimedia, para manejar acciones de reproducción
  constructor(private multimediaService: MultimediaService) { }

  // Ciclo de vida de Angular: método ngOnInit, se ejecuta cuando el componente se inicializa
  ngOnInit(): void {
    // Aquí se puede agregar lógica si se necesita al inicializar el componente
  }

  // Método para "enviar" la película al reproductor (usando el servicio multimedia)
  sendPlay(movie: MoviesModel): void {
    console.log('Enviado película al reproductor...', movie); // Solo un log para pruebas

    // Llamamos al servicio multimedia y emitimos la película seleccionada al reproductor
    this.multimediaService.callback.emit(movie); // El servicio multimedia emite la película para que otro componente la reciba
  }
}
