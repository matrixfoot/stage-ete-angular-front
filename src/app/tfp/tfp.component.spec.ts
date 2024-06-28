import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TFPComponent } from './tfp.component';

describe('TFPComponent', () => {
  let component: TFPComponent;
  let fixture: ComponentFixture<TFPComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TFPComponent]
    });
    fixture = TestBed.createComponent(TFPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
