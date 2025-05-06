import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  sendCredetials(email: string, password: string):void{
    console.log('👌👌',email,password);
    
  }
}
