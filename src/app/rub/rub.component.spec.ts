import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RubComponent } from './rub.component';

describe('RubComponent', () => {
  let component: RubComponent;
  let fixture: ComponentFixture<RubComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RubComponent]
    });
    fixture = TestBed.createComponent(RubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
