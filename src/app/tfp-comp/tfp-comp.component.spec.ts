import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TFPCompComponent } from './tfp-comp.component';

describe('TFPCompComponent', () => {
  let component: TFPCompComponent;
  let fixture: ComponentFixture<TFPCompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TFPCompComponent]
    });
    fixture = TestBed.createComponent(TFPCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
