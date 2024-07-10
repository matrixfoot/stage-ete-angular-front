import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TVA2Component } from './tva2.component';

describe('TVA2Component', () => {
  let component: TVA2Component;
  let fixture: ComponentFixture<TVA2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TVA2Component]
    });
    fixture = TestBed.createComponent(TVA2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
