import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDecFiscComponent } from './view-dec-fisc.component';

describe('ViewDecFiscComponent', () => {
  let component: ViewDecFiscComponent;
  let fixture: ComponentFixture<ViewDecFiscComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewDecFiscComponent]
    });
    fixture = TestBed.createComponent(ViewDecFiscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
