import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlustvaComponent } from './plustva.component';

describe('PlustvaComponent', () => {
  let component: PlustvaComponent;
  let fixture: ComponentFixture<PlustvaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlustvaComponent]
    });
    fixture = TestBed.createComponent(PlustvaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
