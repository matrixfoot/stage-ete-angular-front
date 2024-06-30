import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsPasEncoreReglesComponent } from './ds-pas-encore-regles.component';

describe('DsPasEncoreReglesComponent', () => {
  let component: DsPasEncoreReglesComponent;
  let fixture: ComponentFixture<DsPasEncoreReglesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DsPasEncoreReglesComponent]
    });
    fixture = TestBed.createComponent(DsPasEncoreReglesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
