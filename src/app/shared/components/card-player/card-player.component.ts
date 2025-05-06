import { CommonModule } from '@angular/common';
import { Component, Input, input, OnInit } from '@angular/core';
import { MoviesModel } from '@core/models/movies.model';
import { ImgBrokenDirective } from '@shared/directives/img-broken.directive';
import { MultimediaService } from '@shared/services/multimedia.service';

@Component({
  selector: 'app-card-player',
  imports: [CommonModule,ImgBrokenDirective],
  templateUrl: './card-player.component.html',
  styleUrl: './card-player.component.scss'
})
export class CardPlayerComponent implements OnInit{
  @Input() mode: 'small' | 'big' = 'small'
  @Input() movie: MoviesModel={_id:0,title:'', poster:'',trailerUrl:'',director:''};

  toggleFavorite(movie: any) {
    movie.favorited = !movie.favorited;
  }
  
  hideMovie(movie: any) {
    movie.hidden = true;
  }

  constructor(private multimediaService: MultimediaService){}

  ngOnInit(): void {
    
  }

  sendPlay(movie: MoviesModel): void{
    console.log('Enviado pelicula al reproductor...', movie);
    
    this.multimediaService.callback.emit(movie)
  }
}
