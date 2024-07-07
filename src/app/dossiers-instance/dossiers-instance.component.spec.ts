import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DossiersInstanceComponent } from './dossiers-instance.component';

describe('DossiersInstanceComponent', () => {
  let component: DossiersInstanceComponent;
  let fixture: ComponentFixture<DossiersInstanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DossiersInstanceComponent]
    });
    fixture = TestBed.createComponent(DossiersInstanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
