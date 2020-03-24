import { Component } from '@angular/core';
import {User} from '../models/user';
import {LoginService} from "../services/login/login.service";
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

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
      private loginService: LoginService,
      public toastController: ToastController,
      private route: Router
  ) {}

  login() {
    const rol = this.loginService.login(this.user.email, this.user.password);
    
    if(rol == 'administrador'){
      this.route.navigate(['/home-admin']);
    }
    else if(rol == 'catedratico'){
      this.route.navigate(['/home-catedratico']);
    }
    else if(rol == 'usuario'){
      this.route.navigate(['/home-usuario']);
    }else{
      this.presentToast();
    }

  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: '¡Datos Erroneos! Intenta nuevamente.',
      color: 'danger',
      position: 'top',
      duration: 2000
    });
    toast.present();
  }

  registerModal() {

  }
}
