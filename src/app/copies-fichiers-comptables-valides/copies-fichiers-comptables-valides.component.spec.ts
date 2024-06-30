import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CopiesFichiersComptablesValidesComponent } from './copies-fichiers-comptables-valides.component';

describe('CopiesFichiersComptablesValidesComponent', () => {
  let component: CopiesFichiersComptablesValidesComponent;
  let fixture: ComponentFixture<CopiesFichiersComptablesValidesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CopiesFichiersComptablesValidesComponent]
    });
    fixture = TestBed.createComponent(CopiesFichiersComptablesValidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
