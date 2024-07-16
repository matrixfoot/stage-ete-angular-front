import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Part2anx1Component } from './part2anx1.component';

describe('Part2anx1Component', () => {
  let component: Part2anx1Component;
  let fixture: ComponentFixture<Part2anx1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Part2anx1Component]
    });
    fixture = TestBed.createComponent(Part2anx1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
