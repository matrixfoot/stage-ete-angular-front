import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilisateursConnectesComponent } from './utilisateurs-connectes.component';

describe('UtilisateursConnectesComponent', () => {
  let component: UtilisateursConnectesComponent;
  let fixture: ComponentFixture<UtilisateursConnectesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UtilisateursConnectesComponent]
    });
    fixture = TestBed.createComponent(UtilisateursConnectesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
