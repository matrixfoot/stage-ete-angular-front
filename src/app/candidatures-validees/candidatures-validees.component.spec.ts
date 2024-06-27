import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidaturesValideesComponent } from './candidatures-validees.component';

describe('CandidaturesValideesComponent', () => {
  let component: CandidaturesValideesComponent;
  let fixture: ComponentFixture<CandidaturesValideesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CandidaturesValideesComponent]
    });
    fixture = TestBed.createComponent(CandidaturesValideesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
