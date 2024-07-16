import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Anx5p3Component } from './anx5p3.component';

describe('Anx5p3Component', () => {
  let component: Anx5p3Component;
  let fixture: ComponentFixture<Anx5p3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Anx5p3Component]
    });
    fixture = TestBed.createComponent(Anx5p3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
