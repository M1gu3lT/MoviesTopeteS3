import { Component } from '@angular/core';  // Importa el decorador Component de Angular
import { NavBarComponent } from "../../../../shared/components/nav-bar/nav-bar.component";  // Importa el componente de la barra de navegación
import { RouterModule } from '@angular/router';  // Importa el RouterModule para la navegación de rutas
import { MediaPlayerComponent } from '@shared/components/media-player/media-player.component';  // Importa el componente del reproductor de medios
import { FooterComponent } from '@shared/components/footer/footer.component';  // Importa el componente de pie de página

@Component({
  selector: 'app-home-pages',  // Selector del componente, usado para agregarlo en plantillas HTML
  imports: [NavBarComponent, RouterModule, MediaPlayerComponent, FooterComponent],  // Módulos y componentes importados que se usan en el componente
  templateUrl: './home-pages.component.html',  // Ruta al archivo HTML que contiene la plantilla de este componente
  styleUrl: './home-pages.component.scss'  // Ruta al archivo SCSS con los estilos específicos de este componente
})
export class HomePagesComponent {  // Definición de la clase para este componente
  // Esta clase no tiene lógica por el momento, pero puede ser ampliada en el futuro
}
