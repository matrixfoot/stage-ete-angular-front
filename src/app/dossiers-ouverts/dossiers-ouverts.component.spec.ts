import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DossiersOuvertsComponent } from './dossiers-ouverts.component';

describe('DossiersOuvertsComponent', () => {
  let component: DossiersOuvertsComponent;
  let fixture: ComponentFixture<DossiersOuvertsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DossiersOuvertsComponent]
    });
    fixture = TestBed.createComponent(DossiersOuvertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
