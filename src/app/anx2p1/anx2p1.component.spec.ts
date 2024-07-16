import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Anx2p1Component } from './anx2p1.component';

describe('Anx2p1Component', () => {
  let component: Anx2p1Component;
  let fixture: ComponentFixture<Anx2p1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Anx2p1Component]
    });
    fixture = TestBed.createComponent(Anx2p1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
