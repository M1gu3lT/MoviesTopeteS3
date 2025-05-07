import { Component } from '@angular/core'; 
// Importa el decorador Component para definir el componente.

import { MediaPlayerComponent } from '@shared/components/media-player/media-player.component'; 
// Importa el componente MediaPlayerComponent, que probablemente se utiliza para reproducir medios.

import { SectionGenericComponent } from '@shared/components/section-generic/section-generic.component'; 
// Importa el componente SectionGenericComponent, que parece ser utilizado para mostrar secciones genéricas en la página.

@Component({
  selector: 'app-media-pages', 
  // Define el selector 'app-media-pages', que se utilizará en las plantillas HTML para incluir este componente.

  imports: [SectionGenericComponent, MediaPlayerComponent], 
  // Especifica los componentes que se importan para ser utilizados dentro de 'app-media-pages' (SectionGeneric y MediaPlayer).

  templateUrl: './media-pages.component.html', 
  // Ruta al archivo de plantilla HTML que define el diseño del componente.

  styleUrl: './media-pages.component.scss' 
  // Ruta al archivo de estilos SCSS que define el estilo del componente.
})
export class MEdiaPagesComponent {
  // Esta clase define el componente 'MEdiaPagesComponent'. Actualmente no contiene ninguna lógica, 
  // pero es donde se pueden agregar métodos y propiedades si se necesitan en el futuro.
}
