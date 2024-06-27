import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturePerformatComponent } from './facture-performat.component';

describe('FacturePerformatComponent', () => {
  let component: FacturePerformatComponent;
  let fixture: ComponentFixture<FacturePerformatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FacturePerformatComponent]
    });
    fixture = TestBed.createComponent(FacturePerformatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
