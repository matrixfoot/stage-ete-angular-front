import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Anx7p3Component } from './anx7p3.component';

describe('Anx7p3Component', () => {
  let component: Anx7p3Component;
  let fixture: ComponentFixture<Anx7p3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Anx7p3Component]
    });
    fixture = TestBed.createComponent(Anx7p3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
