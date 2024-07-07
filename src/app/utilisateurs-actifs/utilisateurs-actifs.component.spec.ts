import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilisateursActifsComponent } from './utilisateurs-actifs.component';

describe('UtilisateursActifsComponent', () => {
  let component: UtilisateursActifsComponent;
  let fixture: ComponentFixture<UtilisateursActifsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UtilisateursActifsComponent]
    });
    fixture = TestBed.createComponent(UtilisateursActifsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
