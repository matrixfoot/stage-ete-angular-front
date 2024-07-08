import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FOPROLOSCOMPOComponent } from './foprolos-compo.component';

describe('FOPROLOSCOMPOComponent', () => {
  let component: FOPROLOSCOMPOComponent;
  let fixture: ComponentFixture<FOPROLOSCOMPOComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FOPROLOSCOMPOComponent]
    });
    fixture = TestBed.createComponent(FOPROLOSCOMPOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
