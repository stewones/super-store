import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloSdaComponent } from './hello-sda.component';

describe('HelloSdaComponent', () => {
  let component: HelloSdaComponent;
  let fixture: ComponentFixture<HelloSdaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelloSdaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloSdaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
