import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Anx7p2Component } from './anx7p2.component';

describe('Anx7p2Component', () => {
  let component: Anx7p2Component;
  let fixture: ComponentFixture<Anx7p2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Anx7p2Component]
    });
    fixture = TestBed.createComponent(Anx7p2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
