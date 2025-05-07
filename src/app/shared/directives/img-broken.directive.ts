import { Directive, ElementRef, HostListener, Input } from '@angular/core'; // Importa las clases necesarias de Angular

@Directive({
  selector: 'img[appImgBroken]' // Define un selector de directiva para las imágenes con el atributo 'appImgBroken'
})
export class ImgBrokenDirective {
  @Input() customImg: string = ''; // Define una propiedad de entrada que permite pasar una imagen personalizada

  // Método que se ejecuta cuando la imagen presenta un error (por ejemplo, si no se puede cargar)
  @HostListener('error') handleError(): void {
    const elNative = this.elHost.nativeElement; // Obtiene el elemento DOM de la imagen
    // console.log('🛑🛑 Esta imagen revento -->', this.elHost); // Se puede descomentar para depurar si una imagen se rompe

    // Si la imagen falla, asigna una imagen de reemplazo (la URL de la imagen predeterminada)
    elNative.src = 'https://ionic.io/blog/wp-content/uploads/2024/02/angular-feature-image-1-1536x768.png';
  }

  // Constructor que inyecta el elemento de referencia (elHost) que apunta a la imagen
  constructor(private elHost: ElementRef) {
    // console.log(this.elHost); // Se puede descomentar para inspeccionar el elemento
  }
}
