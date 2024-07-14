import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Anx6p2Component } from './anx6p2.component';

describe('Anx6p2Component', () => {
  let component: Anx6p2Component;
  let fixture: ComponentFixture<Anx6p2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Anx6p2Component]
    });
    fixture = TestBed.createComponent(Anx6p2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
