import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsAvecImpayesComponent } from './clients-avec-impayes.component';

describe('ClientsAvecImpayesComponent', () => {
  let component: ClientsAvecImpayesComponent;
  let fixture: ComponentFixture<ClientsAvecImpayesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientsAvecImpayesComponent]
    });
    fixture = TestBed.createComponent(ClientsAvecImpayesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
