import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Anx3p2Component } from './anx3p2.component';

describe('Anx3p2Component', () => {
  let component: Anx3p2Component;
  let fixture: ComponentFixture<Anx3p2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Anx3p2Component]
    });
    fixture = TestBed.createComponent(Anx3p2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
