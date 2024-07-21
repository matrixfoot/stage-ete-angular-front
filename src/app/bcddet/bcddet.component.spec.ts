import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BCDDETComponent } from './bcddet.component';

describe('BCDDETComponent', () => {
  let component: BCDDETComponent;
  let fixture: ComponentFixture<BCDDETComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BCDDETComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BCDDETComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
