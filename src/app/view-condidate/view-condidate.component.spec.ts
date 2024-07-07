import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCondidateComponent } from './view-condidate.component';

describe('ViewCondidateComponent', () => {
  let component: ViewCondidateComponent;
  let fixture: ComponentFixture<ViewCondidateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewCondidateComponent]
    });
    fixture = TestBed.createComponent(ViewCondidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
