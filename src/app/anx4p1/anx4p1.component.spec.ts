import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Anx4p1Component } from './anx4p1.component';

describe('Anx4p1Component', () => {
  let component: Anx4p1Component;
  let fixture: ComponentFixture<Anx4p1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Anx4p1Component]
    });
    fixture = TestBed.createComponent(Anx4p1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
