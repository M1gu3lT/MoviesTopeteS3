import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '@modules/auth/service/auth.service';

@Component({
  selector: 'app-login-pages',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login-pages.component.html',
  styleUrl: './login-pages.component.scss'
})
export class LoginPagesComponent implements OnInit{
  formLogin: FormGroup = new FormGroup({});

  constructor(private authService: AuthService){}

  ngOnInit(): void {
    this.formLogin = new FormGroup({
      email:new FormControl('',
        [Validators.required,
          Validators.email
        ]
      ),
      password:new FormControl('',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(12)
        ]
      )
    })
  }

  sendLogin(): void{
    const {email, password} = this.formLogin.value

    this.authService.sendCredetials(email,password)
  }

}
