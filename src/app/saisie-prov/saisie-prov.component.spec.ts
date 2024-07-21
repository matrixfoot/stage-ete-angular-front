import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaisieProvComponent } from './saisie-prov.component';

describe('SaisieProvComponent', () => {
  let component: SaisieProvComponent;
  let fixture: ComponentFixture<SaisieProvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaisieProvComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaisieProvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
