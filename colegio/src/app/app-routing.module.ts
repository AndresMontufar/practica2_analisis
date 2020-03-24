import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'home-admin',
    loadChildren: () => import('./home-admin/home-admin.module').then( m => m.HomeAdminPageModule)
  },
  {
    path: 'home-catedratico',
    loadChildren: () => import('./home-catedratico/home-catedratico.module').then( m => m.HomeCatedraticoPageModule)
  },
  {
    path: 'home-usuario',
    loadChildren: () => import('./home-usuario/home-usuario.module').then( m => m.HomeUsuarioPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
