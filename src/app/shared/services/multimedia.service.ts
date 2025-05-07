import { Injectable, EventEmitter } from '@angular/core';

// Decorador Injectable indica que el servicio se puede inyectar en otros componentes o servicios
@Injectable({
  providedIn: 'root'  // Este servicio estará disponible a nivel global, en toda la aplicación
})
export class MultimediaService {

  // Se define un EventEmitter para emitir eventos y notificar a otros componentes o servicios
  callback: EventEmitter<any> = new EventEmitter<any>();

  // Constructor vacío, en caso de que se necesiten dependencias en el futuro
  constructor() { }
}
