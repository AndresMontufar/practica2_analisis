import { Injectable } from '@angular/core';
import {User} from '../../models/user';
import {users} from '../../mocks/mock-users';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isLoggedIn = false;
  usuarios: Array<User>;

  constructor(private loginService: LoginService) { }

  // @ts-ignore
  login(email: string, password: string):any {
    this.usuarios = users;


    this.usuarios.forEach(function(value) {
      if (email === value.email && password === value.password) {
        localStorage.setItem('user', JSON.stringify(value));
      } else{
      }
      // console.log(value);
    });

    if(localStorage.getItem('user')!= null){
      this.isLoggedIn = true;
      alert('logueado');

    }else {
      alert('Credenciales incorrectas');
    }
  }

  register(email: string, password: string, rol: string){
    this.usuarios.push({email, password, rol});
    alert('Usuario registrado');
  }
}
