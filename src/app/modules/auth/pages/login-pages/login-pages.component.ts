// Módulo común de Angular (ngIf, ngFor, etc.)
import { CommonModule } from '@angular/common';

// Decorador de componente y hooks del ciclo de vida
import { Component, OnInit } from '@angular/core';

// Herramientas para crear formularios reactivos
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

// Servicio que maneja la autenticación
import { AuthService } from '@modules/auth/service/auth.service';

@Component({
  selector: 'app-login-pages', // Nombre del componente en el HTML
  imports: [CommonModule, ReactiveFormsModule], // Módulos que se usan en el componente
  templateUrl: './login-pages.component.html', // Vista asociada
  styleUrl: './login-pages.component.scss'     // Estilos asociados
})
export class LoginPagesComponent implements OnInit {

  // Formulario reactivo para capturar email y password
  formLogin: FormGroup = new FormGroup({});

  // Inyectamos el servicio de autenticación
  constructor(private authService: AuthService) {}

  // Hook que se ejecuta cuando se carga el componente
  ngOnInit(): void {
    // Inicializamos el formulario con validaciones
    this.formLogin = new FormGroup({
      email: new FormControl(
        '', // Valor inicial
        [
          Validators.required, // Obligatorio
          Validators.email     // Debe tener formato de email
        ]
      ),
      password: new FormControl(
        '',
        [
          Validators.required,     // Obligatorio
          Validators.minLength(6), // Mínimo 6 caracteres
          Validators.maxLength(12) // Máximo 12 caracteres
        ]
      )
    });
  }

  // Método que se ejecuta al enviar el formulario
  sendLogin(): void {
    // Obtenemos los valores del formulario
    const { email, password } = this.formLogin.value;

    // Llamamos al servicio de autenticación con las credenciales
    this.authService.sendCredetials(email, password);
  }
}
