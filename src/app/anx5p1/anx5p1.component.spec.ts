import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Anx5p1Component } from './anx5p1.component';

describe('Anx5p1Component', () => {
  let component: Anx5p1Component;
  let fixture: ComponentFixture<Anx5p1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Anx5p1Component]
    });
    fixture = TestBed.createComponent(Anx5p1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
