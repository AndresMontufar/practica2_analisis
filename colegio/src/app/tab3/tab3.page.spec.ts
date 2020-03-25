import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import {Location} from '@angular/common';

import { Tab3Page } from './tab3.page';
import {FormsModule} from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';
import {throwError} from 'rxjs';
import {Routes} from '@angular/router';
import {Tab2Page} from '../tab2/tab2.page';
import {HomeAdminPage} from '../home-admin/home-admin.page';
import {HomeUsuarioPage} from '../home-usuario/home-usuario.page';
import {HomeCatedraticoPage} from '../home-catedratico/home-catedratico.page';

describe('Tab3Page', () => {
  let component: Tab3Page;
  let fixture: ComponentFixture<Tab3Page>;
  let location: Location;

  const routes: Routes = [
    { path: 'tabs/tab2', component: Tab2Page },
    { path: 'home-admin', component: HomeAdminPage },
    { path: 'home-usuario', component: HomeUsuarioPage },
    { path: 'home-catedratico', component: HomeCatedraticoPage },
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Tab3Page, Tab2Page, HomeCatedraticoPage, HomeUsuarioPage, HomeAdminPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule, FormsModule, RouterTestingModule.withRoutes(routes)]
    }).compileComponents();

    location = TestBed.get(Location)
    fixture = TestBed.createComponent(Tab3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('When admin is login', () =>{
    it('should handle error', fakeAsync(() =>{
      //spyOn(component.loginService, 'login').and.returnValue(throwError({error: 'error'}));
      component.user.email = 'admin@admin.com';
      component.user.rol = 'administrador';
      component.user.password = 'admin'
      component.login();
      tick(500);
      expect(component.route.navigated).toBeTruthy();
    }));
  });

  describe('When register() is called', () =>{
    it('should handle error', fakeAsync(() =>{
      component.registerModal();
      tick(500);
      expect(component.route.navigated).toBeTruthy();
    }));
  });

  describe('When teacher is login', () =>{
    it('should handle error', fakeAsync(() =>{
      //spyOn(component.loginService, 'login').and.returnValue(throwError({error: 'error'}));
      component.user.email = 'choggetts0@dot.gov';
      component.user.rol = 'catedratico';
      component.user.password = 'eQWWzLeQKB'
      component.login();
      tick(500);
      expect(component.route.navigated).toBeTruthy();
    }));
  });

  describe('When user is login', () =>{
    it('should handle error', fakeAsync(() =>{
      component.user.email = 'ssawkin2@nyu.edu';
      component.user.rol = 'usuario';
      component.user.password = 'nQ1KfK'
      component.login();
      tick(500);
      expect(component.route.navigated).toBeTruthy();
    }));
  });

  describe('When incorrect user is login', () =>{
    it('should handle error', fakeAsync(() =>{
      component.user.email = 'hola@gmail.com';
      component.user.rol = 'usuario';
      component.user.password = 'hola'
      component.login();
      tick(500);
      expect(component.presentToast).toBeTruthy();
    }));
  });
});
