import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactureProformaComponent } from './facture-proforma.component';

describe('FactureProformaComponent', () => {
  let component: FactureProformaComponent;
  let fixture: ComponentFixture<FactureProformaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FactureProformaComponent]
    });
    fixture = TestBed.createComponent(FactureProformaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
