import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeCatedraticoPageRoutingModule } from './home-catedratico-routing.module';

import { HomeCatedraticoPage } from './home-catedratico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeCatedraticoPageRoutingModule
  ],
  declarations: [HomeCatedraticoPage]
})
export class HomeCatedraticoPageModule {}
