import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsSupprimesTemporairementComponent } from './clients-supprimes-temporairement.component';

describe('ClientsSupprimesTemporairementComponent', () => {
  let component: ClientsSupprimesTemporairementComponent;
  let fixture: ComponentFixture<ClientsSupprimesTemporairementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientsSupprimesTemporairementComponent]
    });
    fixture = TestBed.createComponent(ClientsSupprimesTemporairementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
