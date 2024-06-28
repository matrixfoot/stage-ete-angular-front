import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeclarationsFiscalesEnCoursExecutionComponent } from './declarations-fiscales-en-cours-execution.component';

describe('DeclarationsFiscalesEnCoursExecutionComponent', () => {
  let component: DeclarationsFiscalesEnCoursExecutionComponent;
  let fixture: ComponentFixture<DeclarationsFiscalesEnCoursExecutionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeclarationsFiscalesEnCoursExecutionComponent]
    });
    fixture = TestBed.createComponent(DeclarationsFiscalesEnCoursExecutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
