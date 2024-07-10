import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TCL2Component } from './tcl2.component';

describe('TCL2Component', () => {
  let component: TCL2Component;
  let fixture: ComponentFixture<TCL2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TCL2Component]
    });
    fixture = TestBed.createComponent(TCL2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
