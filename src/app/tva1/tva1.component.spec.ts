import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TVA1Component } from './tva1.component';

describe('TVA1Component', () => {
  let component: TVA1Component;
  let fixture: ComponentFixture<TVA1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TVA1Component]
    });
    fixture = TestBed.createComponent(TVA1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
