import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Annexe1Component } from './annexe1.component';

describe('Annexe1Component', () => {
  let component: Annexe1Component;
  let fixture: ComponentFixture<Annexe1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Annexe1Component]
    });
    fixture = TestBed.createComponent(Annexe1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
