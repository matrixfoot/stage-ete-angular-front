import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TVAComponent } from './tva.component';

describe('TVAComponent', () => {
  let component: TVAComponent;
  let fixture: ComponentFixture<TVAComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TVAComponent]
    });
    fixture = TestBed.createComponent(TVAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
