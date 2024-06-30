import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAutreDsComponent } from './view-autre-ds.component';

describe('ViewAutreDsComponent', () => {
  let component: ViewAutreDsComponent;
  let fixture: ComponentFixture<ViewAutreDsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewAutreDsComponent]
    });
    fixture = TestBed.createComponent(ViewAutreDsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
