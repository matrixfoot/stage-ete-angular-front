import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TCL1Component } from './tcl1.component';

describe('TCL1Component', () => {
  let component: TCL1Component;
  let fixture: ComponentFixture<TCL1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TCL1Component]
    });
    fixture = TestBed.createComponent(TCL1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
