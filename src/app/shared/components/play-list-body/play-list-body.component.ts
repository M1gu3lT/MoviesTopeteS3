import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import * as dataRaw from '../../../data/movies.json'
import { MoviesModel } from '@core/models/movies.model';
import { OrderListPipe } from "../../pipe/order-list.pipe";
import { ImgBrokenDirective } from '@shared/directives/img-broken.directive';

@Component({
  selector: 'app-play-list-body',
  imports: [CommonModule, OrderListPipe,ImgBrokenDirective],
  templateUrl: './play-list-body.component.html',
  styleUrl: './play-list-body.component.scss'
})
export class PlayListBodyComponent implements OnInit{
  movies: MoviesModel[] = []
  optionSort:{property:string | null, order:string} = {property:null, order:'asc'}

  constructor(){}

  ngOnInit(): void {
    const{data}: any = (dataRaw as any).default
    this.movies = data;
  }

  changeSort(property:string):void{
    const{order} = this.optionSort
    this.optionSort={
      property,
      order:order ==='asc' ? 'desc' : 'asc'
    }
    console.log(this.optionSort);
    
  }

}
