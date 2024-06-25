import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfInterfaceComponent } from './pdf-interface.component';

describe('PdfInterfaceComponent', () => {
  let component: PdfInterfaceComponent;
  let fixture: ComponentFixture<PdfInterfaceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PdfInterfaceComponent]
    });
    fixture = TestBed.createComponent(PdfInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
