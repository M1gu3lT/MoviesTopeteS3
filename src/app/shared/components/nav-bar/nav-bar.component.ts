import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  imports: [CommonModule,RouterModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent implements OnInit{

  mainMenu:{
    defaultOptions: Array<any>, accessLink: Array<any>
  } = {defaultOptions:[],accessLink:[]}

  customOptions:Array<any> =[]

  constructor(private router: Router){}

  ngOnInit(): void {
    this.mainMenu.defaultOptions = [
      {
        name: 'Home',
        icon: 'uil uil-estate',
        router: ['/']
      },
      {
        name: 'Buscar',
        icon: 'uil uil-search',
        router: ['/', 'movies']
      },
      {
        name: 'Favoritas',
        icon: 'uil-heart-medical',
        router: ['/', 'favorite'],
        query: { hola: 'mundo' }
      }
    ]

    this.mainMenu.accessLink = [
      {
        name: 'Series',
        icon: 'uil uil-film',
        router: ['/', 'series']
      },
      {
        name: 'Peliculas',
        icon: 'uil uil-video',
        router: ['/', 'peliculas']
      }
    ]

    this.customOptions = [
      {
        name: 'Mi lista º1',
        router: ['/']
      },
      {
        name: 'Mi lista º2',
        router: ['/']
      },
      {
        name: 'Mi lista º3',
        router: ['/']
      },
      {
        name: 'Mi lista º4',
        router: ['/']
      }
    ]
  }

  goTo($event: any): void{
    this.router.navigate(['/', 'favorite'],{
      queryParams:{
        key1:'value1',
        key2:'value2',
        key3:'value3',
      }
    })
    console.log($event);
    
  }
}
