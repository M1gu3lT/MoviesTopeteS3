// Decorador que marca esta clase como un servicio que puede ser inyectado
import { Injectable } from '@angular/core';

// Declaramos que este servicio estará disponible en toda la aplicación
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // Constructor vacío por ahora, listo para inyectar dependencias si se necesitan después
  constructor() { }

  // Método que "recibe" las credenciales del usuario
  sendCredetials(email: string, password: string): void {
    // Aquí debería ir la lógica real para autenticar con el backend
    // Por ahora, solo imprime las credenciales en consola (útil para pruebas)
    console.log('👌👌', email, password);
  }
}
