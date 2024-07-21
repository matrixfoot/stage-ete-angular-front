import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BCDDEBComponent } from './bcddeb.component';

describe('BCDDEBComponent', () => {
  let component: BCDDEBComponent;
  let fixture: ComponentFixture<BCDDEBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BCDDEBComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BCDDEBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
