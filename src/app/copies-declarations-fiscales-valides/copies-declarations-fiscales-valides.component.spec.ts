import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CopiesDeclarationsFiscalesValidesComponent } from './copies-declarations-fiscales-valides.component';

describe('CopiesDeclarationsFiscalesValidesComponent', () => {
  let component: CopiesDeclarationsFiscalesValidesComponent;
  let fixture: ComponentFixture<CopiesDeclarationsFiscalesValidesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CopiesDeclarationsFiscalesValidesComponent]
    });
    fixture = TestBed.createComponent(CopiesDeclarationsFiscalesValidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
