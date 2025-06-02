// Importo lo necesario para usar directivas como *ngIf, *ngFor
import { CommonModule } from '@angular/common';
// Importo el cliente HTTP para hacer peticiones a la API
import { HttpClient } from '@angular/common/http';

// Importo decoradores y funciones que me ayudan a controlar el DOM y el ciclo de vida del componente
import { Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';

// Importo lo necesario para formularios (reactivos y por template)
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

// Importo el servicio de autenticación personalizado
import { AuthService } from '@modules/auth/service/auth.service';

// Declaro el componente con sus configuraciones
@Component({
  selector: 'app-login-pages', // Nombre del componente en HTML
  imports: [CommonModule, ReactiveFormsModule, FormsModule], // Módulos necesarios
  templateUrl: './login-pages.component.html', // Ruta a la vista (HTML)
  styleUrl: './login-pages.component.scss'     // Ruta a los estilos (CSS)
})
export class LoginPagesComponent implements OnInit {

  // Declaro el formulario de login con dos campos (email y password)
  formLogin: FormGroup = new FormGroup({});

  // Inyecto el servicio de autenticación
  constructor(private authService: AuthService) {}

  // Cuando el componente se carga, inicializo el formulario con validaciones
  ngOnInit(): void {
    this.formLogin = new FormGroup({
      email: new FormControl(
        '', // Valor inicial vacío
        [
          Validators.required, // Campo obligatorio
          Validators.email     // Tiene que tener formato de email
        ]
      ),
      password: new FormControl(
        '',
        [
          Validators.required,     // Campo obligatorio
          Validators.minLength(6), // Mínimo 6 caracteres
          Validators.maxLength(12) // Máximo 12 caracteres
        ]
      )
    });
  }

  // Cuando se hace submit del formulario, llamo a esta función
  sendLogin(): void {
    // Extraigo los datos del formulario
    const { email, password } = this.formLogin.value;

    // Le paso los datos al servicio para iniciar sesión
    this.authService.sendCredetials(email, password);
  }

  // Referencia al modal HTML para poder abrirlo/cerrarlo desde aquí
  @ViewChild('userModal') userModal: ElementRef | undefined;

  // Lista de usuarios (la uso para mostrar resultados)
  MTList: any[] = [];

  // Objeto que representa al usuario que se va a registrar
  MTObj: any = {
    "id": 0,
    "username": "",
    "passwordHash": "",
    "createDate": ""
  }

  // Inyecto el cliente HTTP directamente (otra forma de inyectar servicios)
  http = inject(HttpClient);

  // Abro el modal manualmente manipulando su estilo
  openModal() {
    if (this.userModal) {
      this.userModal.nativeElement.style.display = 'block';
    }
  }

  // Cierro el modal
  closeModal() {
    if (this.userModal) {
      this.userModal.nativeElement.style.display = 'none';
    }
  }

  // Traigo todos los usuarios de la API
  getAllUsers() {
    this.http.get("https://localhost:7278/api/MTMaster").subscribe((res: any) => {
      this.MTList = res;
    });
  }

  // Envío el nuevo usuario a la API para registrarlo
  onSave() {
    this.http.post("https://localhost:7278/api/MTMaster/", this.MTObj).subscribe((res: any) => {
      this.MTList = res; // Actualizo la lista con lo que responde el servidor
    });
  }
}
