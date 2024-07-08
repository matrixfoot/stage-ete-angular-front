import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageGarde2Component } from './page-garde2.component';

describe('PageGarde2Component', () => {
  let component: PageGarde2Component;
  let fixture: ComponentFixture<PageGarde2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageGarde2Component]
    });
    fixture = TestBed.createComponent(PageGarde2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
