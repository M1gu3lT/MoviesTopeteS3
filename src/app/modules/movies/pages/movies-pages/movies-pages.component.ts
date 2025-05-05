import { Component, OnInit } from '@angular/core';
import { SectionGenericComponent } from "../../../../shared/components/section-generic/section-generic.component";
import * as dataRaw from '../../../../data/movies.json'
import { MoviesModel } from '@core/models/movies.model';

@Component({
  selector: 'app-movies-pages',
  imports: [SectionGenericComponent],
  templateUrl: './movies-pages.component.html',
  styleUrl: './movies-pages.component.scss'
})
export class MoviesPagesComponent implements OnInit{
  mockMoviesList: Array<MoviesModel> =[
  ]

  constructor(){}

  ngOnInit(): void {
    const {data}: any = (dataRaw as any).default
    this.mockMoviesList = data;
    
  }

}
