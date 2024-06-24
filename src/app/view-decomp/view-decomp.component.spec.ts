import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDecompComponent } from './view-decomp.component';

describe('ViewDecompComponent', () => {
  let component: ViewDecompComponent;
  let fixture: ComponentFixture<ViewDecompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewDecompComponent]
    });
    fixture = TestBed.createComponent(ViewDecompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
