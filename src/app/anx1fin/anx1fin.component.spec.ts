import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Anx1finComponent } from './anx1fin.component';

describe('Anx1finComponent', () => {
  let component: Anx1finComponent;
  let fixture: ComponentFixture<Anx1finComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Anx1finComponent]
    });
    fixture = TestBed.createComponent(Anx1finComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
