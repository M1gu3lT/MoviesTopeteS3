import { Component } from '@angular/core';
import { MediaPlayerComponent } from '@shared/components/media-player/media-player.component';
import { SectionGenericComponent } from '@shared/components/section-generic/section-generic.component';

@Component({
  selector: 'app-media-pages',
  imports: [SectionGenericComponent,MediaPlayerComponent],
  templateUrl: './media-pages.component.html',
  styleUrl: './media-pages.component.scss'
})
export class MEdiaPagesComponent {

}