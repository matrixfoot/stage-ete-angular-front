import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxWizardComponentComponent } from './tax-wizard-component.component';

describe('TaxWizardComponentComponent', () => {
  let component: TaxWizardComponentComponent;
  let fixture: ComponentFixture<TaxWizardComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaxWizardComponentComponent]
    });
    fixture = TestBed.createComponent(TaxWizardComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
