import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Anx6Component } from './anx6.component';

describe('Anx6Component', () => {
  let component: Anx6Component;
  let fixture: ComponentFixture<Anx6Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Anx6Component]
    });
    fixture = TestBed.createComponent(Anx6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
