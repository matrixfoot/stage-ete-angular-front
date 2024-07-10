import { Component,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tfp-comp',
  templateUrl: './tfp-comp.component.html',
  styleUrls: ['./tfp-comp.component.scss']
})
export class TFPCompComponent {
@Output() nextStep = new EventEmitter<void>();
  @Output() previousStep = new EventEmitter<void>();

  // Méthodes pour émettre les événements
  next() {
    this.nextStep.emit();
  }

  previous() {
    this.previousStep.emit();
  }
}
