import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatistiquesDetailleesComponent } from './statistiques-detaillees.component';

describe('StatistiquesDetailleesComponent', () => {
  let component: StatistiquesDetailleesComponent;
  let fixture: ComponentFixture<StatistiquesDetailleesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StatistiquesDetailleesComponent]
    });
    fixture = TestBed.createComponent(StatistiquesDetailleesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
