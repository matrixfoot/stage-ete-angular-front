import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutAutreDsComponent } from './ajout-autre-ds.component';

describe('AjoutAutreDsComponent', () => {
  let component: AjoutAutreDsComponent;
  let fixture: ComponentFixture<AjoutAutreDsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjoutAutreDsComponent]
    });
    fixture = TestBed.createComponent(AjoutAutreDsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
