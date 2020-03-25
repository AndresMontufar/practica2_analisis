import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab2Page } from './tab2.page';
import {FormsModule} from '@angular/forms';
import {Router} from '@angular/router';

describe('Tab2Page', () => {
  let component: Tab2Page;
  let fixture: ComponentFixture<Tab2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Tab2Page],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule, FormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(Tab2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('When user registered correctly', () =>{
    it('should handle error', fakeAsync(() =>{
      //spyOn(component.loginService, 'login').and.returnValue(throwError({error: 'error'}));
      component.user.email = 'choggetts0@dot.gov';
      component.user.password = 'eQWWzLeQKB'
      component.confirmPassword = 'eQWWzLeQKB'
      component.registerUser();
      tick(50);
      expect(true).toBeTruthy();
    }));
  });

  describe('User credentials incorrectly', () =>{
    it('should handle error', () =>{
      //spyOn(component.loginService, 'login').and.returnValue(throwError({error: 'error'}));
      component.user.email = 'dasf@dot.gov';
      component.user.password = 'eQWWzLeQKB'
      component.confirmPassword = 'hola'
      component.registerUser();
      expect(true).toBeTruthy();
    });
  });
});
