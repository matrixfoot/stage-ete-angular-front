import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Prov1Component } from './prov1.component';

describe('Prov1Component', () => {
  let component: Prov1Component;
  let fixture: ComponentFixture<Prov1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Prov1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Prov1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
