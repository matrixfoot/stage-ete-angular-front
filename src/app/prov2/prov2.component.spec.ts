import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Prov2Component } from './prov2.component';

describe('Prov2Component', () => {
  let component: Prov2Component;
  let fixture: ComponentFixture<Prov2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Prov2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Prov2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
