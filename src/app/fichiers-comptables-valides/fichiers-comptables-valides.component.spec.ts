import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FichiersComptablesValidesComponent } from './fichiers-comptables-valides.component';

describe('FichiersComptablesValidesComponent', () => {
  let component: FichiersComptablesValidesComponent;
  let fixture: ComponentFixture<FichiersComptablesValidesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FichiersComptablesValidesComponent]
    });
    fixture = TestBed.createComponent(FichiersComptablesValidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
