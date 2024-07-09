import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaisieAutoBanqueComponent } from './saisie-auto-banque.component';

describe('SaisieAutoBanqueComponent', () => {
  let component: SaisieAutoBanqueComponent;
  let fixture: ComponentFixture<SaisieAutoBanqueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SaisieAutoBanqueComponent]
    });
    fixture = TestBed.createComponent(SaisieAutoBanqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
