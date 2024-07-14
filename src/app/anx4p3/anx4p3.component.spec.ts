import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Anx4p3Component } from './anx4p3.component';

describe('Anx4p3Component', () => {
  let component: Anx4p3Component;
  let fixture: ComponentFixture<Anx4p3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Anx4p3Component]
    });
    fixture = TestBed.createComponent(Anx4p3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
