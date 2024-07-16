import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Anx2p3Component } from './anx2p3.component';

describe('Anx2p3Component', () => {
  let component: Anx2p3Component;
  let fixture: ComponentFixture<Anx2p3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Anx2p3Component]
    });
    fixture = TestBed.createComponent(Anx2p3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
