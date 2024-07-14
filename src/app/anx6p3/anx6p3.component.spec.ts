import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Anx6p3Component } from './anx6p3.component';

describe('Anx6p3Component', () => {
  let component: Anx6p3Component;
  let fixture: ComponentFixture<Anx6p3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Anx6p3Component]
    });
    fixture = TestBed.createComponent(Anx6p3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
