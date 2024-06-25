import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoutenutvaComponent } from './soutenutva.component';

describe('SoutenutvaComponent', () => {
  let component: SoutenutvaComponent;
  let fixture: ComponentFixture<SoutenutvaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SoutenutvaComponent]
    });
    fixture = TestBed.createComponent(SoutenutvaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
