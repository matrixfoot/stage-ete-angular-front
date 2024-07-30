import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FACFINComponent } from './facfin.component';

describe('FACFINComponent', () => {
  let component: FACFINComponent;
  let fixture: ComponentFixture<FACFINComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FACFINComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FACFINComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
