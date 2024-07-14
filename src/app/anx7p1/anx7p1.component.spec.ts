import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Anx7p1Component } from './anx7p1.component';

describe('Anx7p1Component', () => {
  let component: Anx7p1Component;
  let fixture: ComponentFixture<Anx7p1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Anx7p1Component]
    });
    fixture = TestBed.createComponent(Anx7p1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
