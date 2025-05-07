// Importamos los módulos necesarios
import { CommonModule } from '@angular/common'; // Módulo común de Angular para funcionalidades básicas como ngIf, ngFor, etc.
import { Component } from '@angular/core'; // Decorador Component para definir el componente

// Definimos el componente con su selector, plantilla y hoja de estilos
@Component({
  selector: 'app-footer', // El nombre del selector con el que este componente se utilizará en otros archivos HTML
  imports: [CommonModule], // Importamos CommonModule que incluye directivas esenciales para Angular
  templateUrl: './footer.component.html', // Ruta al archivo HTML que define la vista del pie de página
  styleUrls: ['./footer.component.scss'] // Ruta al archivo SCSS para los estilos del pie de página
})
export class FooterComponent {
  // Este componente no tiene lógica adicional en el TypeScript por el momento.
}
