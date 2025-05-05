import { Component } from '@angular/core';
import { NavBarComponent } from "../../../../shared/components/nav-bar/nav-bar.component";
import { PlayListHeaderComponent } from "../../../../shared/components/play-list-header/play-list-header.component";
import { PlayListBodyComponent } from "../../../../shared/components/play-list-body/play-list-body.component";

@Component({
  selector: 'app-favorite-pages',
  imports: [NavBarComponent, PlayListHeaderComponent, PlayListBodyComponent],
  templateUrl: './favorite-pages.component.html',
  styleUrl: './favorite-pages.component.scss'
})
export class FavoritePagesComponent {

}
