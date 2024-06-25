import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DossiersValidesComponent } from './dossiers-valides.component';

describe('DossiersValidesComponent', () => {
  let component: DossiersValidesComponent;
  let fixture: ComponentFixture<DossiersValidesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DossiersValidesComponent]
    });
    fixture = TestBed.createComponent(DossiersValidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
