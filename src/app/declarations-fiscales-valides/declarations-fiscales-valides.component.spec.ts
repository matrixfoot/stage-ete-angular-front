import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeclarationsFiscalesValidesComponent } from './declarations-fiscales-valides.component';

describe('DeclarationsFiscalesValidesComponent', () => {
  let component: DeclarationsFiscalesValidesComponent;
  let fixture: ComponentFixture<DeclarationsFiscalesValidesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeclarationsFiscalesValidesComponent]
    });
    fixture = TestBed.createComponent(DeclarationsFiscalesValidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
