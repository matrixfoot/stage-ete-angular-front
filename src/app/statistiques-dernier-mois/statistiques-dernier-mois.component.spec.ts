import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatistiquesDernierMoisComponent } from './statistiques-dernier-mois.component';

describe('StatistiquesDernierMoisComponent', () => {
  let component: StatistiquesDernierMoisComponent;
  let fixture: ComponentFixture<StatistiquesDernierMoisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StatistiquesDernierMoisComponent]
    });
    fixture = TestBed.createComponent(StatistiquesDernierMoisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
