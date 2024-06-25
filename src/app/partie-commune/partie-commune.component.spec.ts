import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartieCommuneComponent } from './partie-commune.component';

describe('PartieCommuneComponent', () => {
  let component: PartieCommuneComponent;
  let fixture: ComponentFixture<PartieCommuneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PartieCommuneComponent]
    });
    fixture = TestBed.createComponent(PartieCommuneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
