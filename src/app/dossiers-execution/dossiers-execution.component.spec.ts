import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DossiersExecutionComponent } from './dossiers-execution.component';

describe('DossiersExecutionComponent', () => {
  let component: DossiersExecutionComponent;
  let fixture: ComponentFixture<DossiersExecutionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DossiersExecutionComponent]
    });
    fixture = TestBed.createComponent(DossiersExecutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
