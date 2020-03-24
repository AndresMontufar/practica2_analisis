import { Component } from '@angular/core';
import {User} from '../models/user';
import {LoginService} from '../services/login/login.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private loginService: LoginService) {}

  user: User = {
    email: '',
    password: ''
  };

  registerUser(){
    this.loginService.register(this.user.email, this.user.password, 'usuario');
    this.user.email = '';
    this.user.password = '';
  }
}
