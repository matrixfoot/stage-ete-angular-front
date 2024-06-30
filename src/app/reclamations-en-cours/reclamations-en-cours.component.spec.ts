import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReclamationsEnCoursComponent } from './reclamations-en-cours.component';

describe('ReclamationsEnCoursComponent', () => {
  let component: ReclamationsEnCoursComponent;
  let fixture: ComponentFixture<ReclamationsEnCoursComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReclamationsEnCoursComponent]
    });
    fixture = TestBed.createComponent(ReclamationsEnCoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
