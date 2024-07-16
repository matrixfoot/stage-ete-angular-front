import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Anx2p2Component } from './anx2p2.component';

describe('Anx2p2Component', () => {
  let component: Anx2p2Component;
  let fixture: ComponentFixture<Anx2p2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Anx2p2Component]
    });
    fixture = TestBed.createComponent(Anx2p2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
