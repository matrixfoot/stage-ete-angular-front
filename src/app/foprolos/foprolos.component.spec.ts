import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoprolosComponent } from './foprolos.component';

describe('FoprolosComponent', () => {
  let component: FoprolosComponent;
  let fixture: ComponentFixture<FoprolosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FoprolosComponent]
    });
    fixture = TestBed.createComponent(FoprolosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
