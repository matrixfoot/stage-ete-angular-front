import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FACDETComponent } from './facdet.component';

describe('FACDETComponent', () => {
  let component: FACDETComponent;
  let fixture: ComponentFixture<FACDETComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FACDETComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FACDETComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
