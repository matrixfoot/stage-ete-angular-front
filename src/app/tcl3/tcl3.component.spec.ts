import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TCL3Component } from './tcl3.component';

describe('TCL3Component', () => {
  let component: TCL3Component;
  let fixture: ComponentFixture<TCL3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TCL3Component]
    });
    fixture = TestBed.createComponent(TCL3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
