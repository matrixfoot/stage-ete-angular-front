import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsMarquesPayesComponent } from './ds-marques-payes.component';

describe('DsMarquesPayesComponent', () => {
  let component: DsMarquesPayesComponent;
  let fixture: ComponentFixture<DsMarquesPayesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DsMarquesPayesComponent]
    });
    fixture = TestBed.createComponent(DsMarquesPayesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
