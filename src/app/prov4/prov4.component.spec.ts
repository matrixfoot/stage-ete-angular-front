import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Prov4Component } from './prov4.component';

describe('Prov4Component', () => {
  let component: Prov4Component;
  let fixture: ComponentFixture<Prov4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Prov4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Prov4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
