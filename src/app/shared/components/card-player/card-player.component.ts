import { CommonModule } from '@angular/common';
import { Component, Input, input, OnInit } from '@angular/core';
import { MoviesModel } from '@core/models/movies.model';

@Component({
  selector: 'app-card-player',
  imports: [CommonModule],
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

  constructor(){}

  ngOnInit(): void {
    
  }
}
