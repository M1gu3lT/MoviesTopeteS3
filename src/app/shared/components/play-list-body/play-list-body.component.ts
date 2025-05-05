import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import * as dataRaw from '../../../data/movies.json'
import { MoviesModel } from '@core/models/movies.model';

@Component({
  selector: 'app-play-list-body',
  imports: [CommonModule],
  templateUrl: './play-list-body.component.html',
  styleUrl: './play-list-body.component.scss'
})
export class PlayListBodyComponent implements OnInit{
  movies: MoviesModel[] = []

  constructor(){}

  ngOnInit(): void {
    const{data}: any = (dataRaw as any).default
    this.movies = data;
  }

}
