import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Anx4p2Component } from './anx4p2.component';

describe('Anx4p2Component', () => {
  let component: Anx4p2Component;
  let fixture: ComponentFixture<Anx4p2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Anx4p2Component]
    });
    fixture = TestBed.createComponent(Anx4p2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
