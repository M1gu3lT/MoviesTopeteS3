// Importamos los módulos y servicios necesarios para el componente
import { CommonModule } from '@angular/common'; // Módulo común de Angular
import { Component, OnInit } from '@angular/core'; // Decorador y ciclo de vida de Angular
import { MoviesModel } from '@core/models/movies.model'; // Modelo de película
import { ImgBrokenDirective } from '@shared/directives/img-broken.directive'; // Directiva personalizada para manejar imágenes rotas
import { MultimediaService } from '@shared/services/multimedia.service'; // Servicio para manejar la multimedia

// Decorador del componente: Selector, imports, template y estilo asociados
@Component({
  selector: 'app-media-player', // Nombre del selector para usar el componente en HTML
  imports: [CommonModule, ImgBrokenDirective], // Módulos que se usan en este componente
  templateUrl: './media-player.component.html', // Ruta del archivo HTML del componente
  styleUrl: './media-player.component.scss' // Ruta del archivo SCSS del componente
})
export class MediaPlayerComponent implements OnInit {
  // Definimos un objeto mock de tipo MoviesModel para simular una película
  mockCover: MoviesModel = {
    title: 'Contador', // Título de la película
    poster: 'https://m.media-amazon.com/images/S/pv-target-images/8bd67b94dbfa1a54e9cb5be8f79645141aed159dbc6d2c781b0a77a88e1a2bff._UR1920,1080_CLs%7C1920,1080%7C/G/bundle/BottomRightCardGradient16x9.png,/G/01/digital/video/merch/subs/benefit-id/m-r/Prime/logos/channels-logo-white.png%7C0,0,1920,1080+0,0,1920,1080+1578,847,263,156_SX500_FMjpg_.jpg', // URL de la imagen de portada
    director: 'Christopher Nolan', // Director de la película
    trailerUrl: 'http://localhost/movie.mp3', // URL del tráiler
    _id: 1 // ID de la película
  };

  // Inyectamos el servicio multimedia en el constructor para gestionar la reproducción
  constructor(private multimediaService: MultimediaService) {}

  // Método que se ejecuta al iniciar el componente
  ngOnInit(): void {
     console.log('🟠 MediaPlayerComponent iniciado'); // Mensaje de depuración

    // Creamos un observable para escuchar los cambios en el servicio multimedia
    const observer1$ = this.multimediaService.callback.subscribe(
      (response: MoviesModel) => { // Cuando recibimos una película
        console.log('recibiendo pelicula...', response); // Mostramos la película recibida en consola
      }
    );
  }
}
