import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MoviesModel } from '@core/models/movies.model';
import { ImgBrokenDirective } from '@shared/directives/img-broken.directive';
import { MultimediaService } from '@shared/services/multimedia.service';
import { response } from 'express';

@Component({
  selector: 'app-media-player',
  imports: [CommonModule,ImgBrokenDirective],
  templateUrl: './media-player.component.html',
  styleUrl: './media-player.component.scss'
})
export class MediaPlayerComponent implements OnInit {
  mockCover:MoviesModel={
    title:'Contador',
    poster:'https://m.media-amazon.com/images/S/pv-target-images/8bd67b94dbfa1a54e9cb5be8f79645141aed159dbc6d2c781b0a77a88e1a2bff._UR1920,1080_CLs%7C1920,1080%7C/G/bundle/BottomRightCardGradient16x9.png,/G/01/digital/video/merch/subs/benefit-id/m-r/Prime/logos/channels-logo-white.png%7C0,0,1920,1080+0,0,1920,1080+1578,847,263,156_SX500_FMjpg_.jpg', //cover
    director: 'Christopher Nolan',
    trailerUrl: 'http://localhost/movie.mp3',
    _id: 1

  }

  constructor(private multimediaService: MultimediaService){}

  ngOnInit(): void {
     console.log('🟠 MediaPlayerComponent iniciado'); // DEBUG
    const observer1$ = this.multimediaService.callback.subscribe(
      (response: MoviesModel)=>{
        console.log('recibiendo pelicula...', response);
        
      }
    )
  }

}
