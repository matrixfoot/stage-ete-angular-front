import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Anx3p3Component } from './anx3p3.component';

describe('Anx3p3Component', () => {
  let component: Anx3p3Component;
  let fixture: ComponentFixture<Anx3p3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Anx3p3Component]
    });
    fixture = TestBed.createComponent(Anx3p3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
