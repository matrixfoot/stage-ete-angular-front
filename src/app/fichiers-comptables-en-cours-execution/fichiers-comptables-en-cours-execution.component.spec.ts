import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FichiersComptablesEnCoursExecutionComponent } from './fichiers-comptables-en-cours-execution.component';

describe('FichiersComptablesEnCoursExecutionComponent', () => {
  let component: FichiersComptablesEnCoursExecutionComponent;
  let fixture: ComponentFixture<FichiersComptablesEnCoursExecutionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FichiersComptablesEnCoursExecutionComponent]
    });
    fixture = TestBed.createComponent(FichiersComptablesEnCoursExecutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
