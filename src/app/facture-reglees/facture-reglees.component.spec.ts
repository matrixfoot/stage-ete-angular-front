import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactureRegleesComponent } from './facture-reglees.component';

describe('FactureRegleesComponent', () => {
  let component: FactureRegleesComponent;
  let fixture: ComponentFixture<FactureRegleesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FactureRegleesComponent]
    });
    fixture = TestBed.createComponent(FactureRegleesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
