import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Anx3p1Component } from './anx3p1.component';

describe('Anx3p1Component', () => {
  let component: Anx3p1Component;
  let fixture: ComponentFixture<Anx3p1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Anx3p1Component]
    });
    fixture = TestBed.createComponent(Anx3p1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
