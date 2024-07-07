import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidaturesEnCoursExecutionComponent } from './candidatures-en-cours-execution.component';

describe('CandidaturesEnCoursExecutionComponent', () => {
  let component: CandidaturesEnCoursExecutionComponent;
  let fixture: ComponentFixture<CandidaturesEnCoursExecutionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CandidaturesEnCoursExecutionComponent]
    });
    fixture = TestBed.createComponent(CandidaturesEnCoursExecutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
