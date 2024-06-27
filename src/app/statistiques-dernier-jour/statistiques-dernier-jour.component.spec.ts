import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatistiquesDernierJourComponent } from './statistiques-dernier-jour.component';

describe('StatistiquesDernierJourComponent', () => {
  let component: StatistiquesDernierJourComponent;
  let fixture: ComponentFixture<StatistiquesDernierJourComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StatistiquesDernierJourComponent]
    });
    fixture = TestBed.createComponent(StatistiquesDernierJourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
