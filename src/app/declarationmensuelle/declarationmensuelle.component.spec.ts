import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeclarationmensuelleComponent } from './declarationmensuelle.component';

describe('DeclarationmensuelleComponent', () => {
  let component: DeclarationmensuelleComponent;
  let fixture: ComponentFixture<DeclarationmensuelleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeclarationmensuelleComponent]
    });
    fixture = TestBed.createComponent(DeclarationmensuelleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
