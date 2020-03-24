import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeCatedraticoPage } from './home-catedratico.page';

const routes: Routes = [
  {
    path: '',
    component: HomeCatedraticoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeCatedraticoPageRoutingModule {}
