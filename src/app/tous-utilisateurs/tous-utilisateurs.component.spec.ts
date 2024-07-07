import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TousUtilisateursComponent } from './tous-utilisateurs.component';

describe('TousUtilisateursComponent', () => {
  let component: TousUtilisateursComponent;
  let fixture: ComponentFixture<TousUtilisateursComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TousUtilisateursComponent]
    });
    fixture = TestBed.createComponent(TousUtilisateursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
