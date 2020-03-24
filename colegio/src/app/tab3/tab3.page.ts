import { Component } from '@angular/core';
import {User} from '../models/user';
import {LoginService} from '../services/login/login.service';
import {Router} from '@angular/router';

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

  constructor(private loginService: LoginService, private router: Router) {}

  login() {
    this.loginService.login(this.user.email, this.user.password);
    this.user.email = '';
    this.user.password = '';
  }

  registerModal() {
    this.router.navigate([`/tabs/tab2`]);
  }
}
