import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import { TabsPage } from './tabs.page';
import {throwError} from 'rxjs';

describe('TabsPage', () => {
  let component: TabsPage;
  let fixture: ComponentFixture<TabsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TabsPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('When user is logout', () =>{
    it('should handle error', fakeAsync(() =>{
      //spyOn(component.loginService, 'isLoggedIn').and.returnValue(throwError({error: 'error'}));
      component.logout();
      tick(50);
      expect(component.loginService.isLoggedIn).toBeFalsy();
    }));
  });
});
