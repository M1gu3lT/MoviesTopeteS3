import { Component } from '@angular/core';
import { NavBarComponent } from "../../../../shared/components/nav-bar/nav-bar.component";
import { RouterModule } from '@angular/router';
import { MediaPlayerComponent } from '@shared/components/media-player/media-player.component';
import { FooterComponent } from '@shared/components/footer/footer.component';

@Component({
  selector: 'app-home-pages',
  imports: [NavBarComponent,RouterModule,MediaPlayerComponent,FooterComponent],
  templateUrl: './home-pages.component.html',
  styleUrl: './home-pages.component.scss'
})
export class HomePagesComponent {

}
