import { Component } from '@angular/core';
import {LoginService} from '../services/login/login.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(private loginService: LoginService) {}


  logout() {
    localStorage.removeItem('user');
    this.loginService.isLoggedIn = false;
    alert('Ha cerrado sesion');

  }
}
