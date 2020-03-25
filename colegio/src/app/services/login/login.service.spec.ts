import {fakeAsync, TestBed, tick} from '@angular/core/testing';

import { LoginService } from './login.service';
import {throwError} from 'rxjs';

describe('LoginService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoginService = TestBed.get(LoginService);
    expect(service).toBeTruthy();
  });

  describe('When user is register', () =>{
    it('should handle error', fakeAsync(() =>{
      const service: LoginService = TestBed.get(LoginService);
      service.register('hola@gmail.com', 'hola', 'usuario');
      tick(50);
      expect(service.usuarios).toBeDefined();
    }));
  });

  describe('When user is incorrect', () =>{
    it('should handle error', fakeAsync(() =>{
      const service: LoginService = TestBed.get(LoginService);
      //spyOn(service, 'login').and.returnValue(throwError({error: 'error'}));
      service.login('hola1adf2@gmail.com', 'hola12');
      tick(50);
      expect(service.login).toBeDefined();
    }));
  });
});
