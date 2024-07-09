import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FichierrecapComponent } from './fichierrecap.component';

describe('FichierrecapComponent', () => {
  let component: FichierrecapComponent;
  let fixture: ComponentFixture<FichierrecapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FichierrecapComponent]
    });
    fixture = TestBed.createComponent(FichierrecapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
