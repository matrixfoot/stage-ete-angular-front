import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsReglesComponent } from './ds-regles.component';

describe('DsReglesComponent', () => {
  let component: DsReglesComponent;
  let fixture: ComponentFixture<DsReglesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DsReglesComponent]
    });
    fixture = TestBed.createComponent(DsReglesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
