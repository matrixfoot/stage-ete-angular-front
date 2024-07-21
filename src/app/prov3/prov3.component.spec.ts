import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Prov3Component } from './prov3.component';

describe('Prov3Component', () => {
  let component: Prov3Component;
  let fixture: ComponentFixture<Prov3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Prov3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Prov3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
