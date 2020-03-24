import { Component } from '@angular/core';
import {User} from '../models/user';

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
  constructor() {}

  login() {
    console.log(this.user);
  }

  registerModal() {

  }
}
