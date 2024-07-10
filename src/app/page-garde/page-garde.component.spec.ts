import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageGardeComponent } from './page-garde.component';

describe('PageGardeComponent', () => {
  let component: PageGardeComponent;
  let fixture: ComponentFixture<PageGardeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageGardeComponent]
    });
    fixture = TestBed.createComponent(PageGardeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
