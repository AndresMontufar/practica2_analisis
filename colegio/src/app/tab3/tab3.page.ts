import { Component } from '@angular/core';
import {User} from '../models/user';
import {LoginService} from "../services/login/login.service";

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {


  user: User = {
    email: '',
    password: ''
  };

  constructor(
      private loginService: LoginService
  ) {}

  login() {
    this.loginService.login(this.user.email, this.user.password);
    this.user.email = '';
    this.user.password = '';
  }

  registerModal() {

  }
}
