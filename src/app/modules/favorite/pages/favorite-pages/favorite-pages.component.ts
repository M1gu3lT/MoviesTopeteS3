import { Component } from '@angular/core';
import { NavBarComponent } from "../../../../shared/components/nav-bar/nav-bar.component";  // Importa el componente NavBarComponent
import { PlayListHeaderComponent } from "../../../../shared/components/play-list-header/play-list-header.component";  // Importa el componente PlayListHeaderComponent
import { PlayListBodyComponent } from "../../../../shared/components/play-list-body/play-list-body.component";  // Importa el componente PlayListBodyComponent

@Component({
  selector: 'app-favorite-pages',  // Define el selector del componente
  imports: [NavBarComponent, PlayListHeaderComponent, PlayListBodyComponent],  // Declara los componentes utilizados en este componente
  templateUrl: './favorite-pages.component.html',  // Ruta de la plantilla HTML
  styleUrl: './favorite-pages.component.scss'  // Ruta del archivo de estilo SCSS
})
export class FavoritePagesComponent {
  // Este componente sirve como contenedor para la página de favoritos, que incluye la barra de navegación y las listas de reproducción.
}
