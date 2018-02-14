import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartbarComponent } from './cartbar.component';

describe('CartbarComponent', () => {
  let component: CartbarComponent;
  let fixture: ComponentFixture<CartbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
