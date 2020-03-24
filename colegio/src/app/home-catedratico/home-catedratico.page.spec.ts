import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomeCatedraticoPage } from './home-catedratico.page';

describe('HomeCatedraticoPage', () => {
  let component: HomeCatedraticoPage;
  let fixture: ComponentFixture<HomeCatedraticoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeCatedraticoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeCatedraticoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
