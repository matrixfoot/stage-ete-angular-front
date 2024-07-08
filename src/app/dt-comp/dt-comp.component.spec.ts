import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DTCOMPComponent } from './dt-comp.component';

describe('DTCOMPComponent', () => {
  let component: DTCOMPComponent;
  let fixture: ComponentFixture<DTCOMPComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DTCOMPComponent]
    });
    fixture = TestBed.createComponent(DTCOMPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
