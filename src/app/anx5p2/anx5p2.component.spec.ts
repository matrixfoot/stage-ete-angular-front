import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Anx5p2Component } from './anx5p2.component';

describe('Anx5p2Component', () => {
  let component: Anx5p2Component;
  let fixture: ComponentFixture<Anx5p2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Anx5p2Component]
    });
    fixture = TestBed.createComponent(Anx5p2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
