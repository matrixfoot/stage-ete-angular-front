import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ClickOutsideDirective } from './click-outside.directive';
import { Component } from '@angular/core';

// Create a test component to host the directive
@Component({
  template: `<div clickOutside (clickOutside)="handleClickOutside($event)"></div>`
})
class TestComponent {
  handleClickOutside(event: Event) {
    // Handle the click outside event
  }
}

describe('ClickOutsideDirective', () => {
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClickOutsideDirective, TestComponent]
    });

    fixture = TestBed.createComponent(TestComponent);
  });

  it('should create an instance', () => {
    const directive = fixture.debugElement.query(By.directive(ClickOutsideDirective));
    expect(directive).toBeTruthy();
  });
});
